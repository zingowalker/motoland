import { MouseEventHandler } from "react";



export interface MotorcycleProps{
filter(arg0: (motorcycle: { model: string; }) => boolean): unknown;
make: string;
model: string;
year: number;
type: string;
displacement:string;
engine: string;
power:string;
torque:string;
compression: number;
bore_stroke:"78.0 x 86.0 mm (3.1 x 3.4 inches)";
fuel_system: string;
fuel_control: string;
ignition: string;
lubrication: string;
cooling: string;
gearbox: string;
transmission: string;
clutch: string;
fuel_consumption: string;
emission: string;
// frame:"Half-duplex split cradle ";
// front_suspension:"Telescopic, 41 mm forks";
// front_wheel_travel:"200 mm (7.9 inches)";
// rear_suspension:"Monoshock with linkage";
rear_wheel_travel:string;
front_tire:number;
rear_tire:number;
front_brakes: string;
rear_brakes:string;
total_weight: string;
seat_height: string;
total_height:string;
total_length:string;
total_width: string;
ground_clearance: string;
wheelbase:string;
fuel_capacity: string;
starter: string;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
}

export interface PageProps {
  searchParams: FilterProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}