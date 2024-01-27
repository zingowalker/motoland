import {FilterProps, MotorcycleProps} from '@/types';



// export const calculateMotorcycleRent = (model: string, engine: string, isHalfDay: boolean): number => {
//     const motorcycleRates = {
//         'Himalayan': { fullDay: 2500, halfDay: 1500 },
//         'Classic 500': { fullDay: 2000, halfDay: 1400 },
//         'Classic 350': { fullDay: 1800, halfDay: 1000 },
//         'Bullet 500': { fullDay: 2000, halfDay: 1200 },
//         'Bullet 350': { fullDay: 1800, halfDay: 1000 },
//         'Avenger Cruise 220': { fullDay: 1000, halfDay: 600 },
//         'Scooty Pep': { fullDay: 800, halfDay: 500 },
//       };
   
//        // Get the rates for the specific motorcycle model
//        const rates = motorcycleRates[model];

//         if (!rates) {
//             throw new Error(`No rates found for motorcycle model: ${model}`);
//         }

//         // Select the appropriate rate based on full-day or half-day
//         const rate = isHalfDay ? rates.halfDay : rates.fullDay;

//         return rate;
// }

export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };


export async function fetchMotorcycles(filters: FilterProps){
    const { manufacturer, year, model} = filters;
    const headers: HeadersInit = {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
            'X-RapidAPI-Host': 'motorcycles-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://motorcycles-by-api-ninjas.p.rapidapi.com/v1/motorcycles?make=${manufacturer}&year=${year}&model=${model}`, 
    {
        headers: headers,
    });

    const result = await response.json();

    return result;
}


// export const generateBikeImageUrl = (motorcycle: MotorcycleProps, angle?
//     :string) => {

//     }

export const generateBikeImageUrl = (motorcycle: MotorcycleProps, angle?: string) => {
    const { make, model, year } = motorcycle;
  
    // Convert model to lowercase and replace spaces with underscores
    const formattedModel = model.toLowerCase().replace(/\s+/g, '_');
  
    // Generate the image path based on the car details
    const imagePath = `/images/${make.toLowerCase()}/${formattedModel}_${year}_${angle || 'default'}.jpg`;
  
    return imagePath;
  };