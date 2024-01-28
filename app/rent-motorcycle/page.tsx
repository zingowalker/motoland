import Link from "next/link";
import Image from "next/image";
import SearchBar from "./_components/search-bar";
import MotorcycleCard from "./_components/motorcycle-card";
import ShowMore from "./_components/show-more";
import { fetchMotorcycles } from "@/utils";
import { PageProps } from "@/types";

export default async function page({ searchParams }: PageProps) {
  const allMotorcycles = await fetchMotorcycles({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !Array.isArray(allMotorcycles) ||
    allMotorcycles.length < 1 ||
    !allMotorcycles;
  return (
    <div className="mt-12 xl:py-12 py-10 px-10" id="discover">
      <div className="md:items-center flex flex-col gap-y-2.5">
        <h1 className="text-4xl font-bold">Motorcycle Catalogue</h1>
        <p>Explore motorcycle you might like</p>
      </div>

      <div className="mt-12 w-full flex-between justify-center items-center flex-wrap gap-5">
        <SearchBar />

        {/* <div className="flex justify-start flex-wrap items-center gap-2">
          <CustomFilter title="fuel_system" options={fuels} />
          <CustomFilter title="year" options={yearsOfProduction} />
        </div> */}
      </div>

      {!isDataEmpty ? (
        <section className="px-16">
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
            {allMotorcycles?.map((motorcycle) => (
              <MotorcycleCard key={motorcycle.model} motorcycle={motorcycle} />
            ))}
          </div>

          <ShowMore
            pageNumber={(searchParams.limit || 10) / 10}
            isNext={(searchParams.limit || 10) > allMotorcycles.length}
          />
        </section>
      ) : (
        <div className="mt-16 flex justify-center items-center flex-col gap-2">
          <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          <p>{allMotorcycles?.message}</p>
        </div>
      )}
    </div>
  );
}
