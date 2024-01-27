import { Button } from "@/components/ui/button";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="xl:py-12 py-10 px-10 bg-[#fecaca]">
      <div className="md:items-center flex flex-col">
        <h1 className="lg:text-4xl xl:text-6xl text-3xl flex justify-center font-medium text-red-500 pt-10">
          Ride, Explore, Discover Ladakh...
        </h1>

        <div className="flex flex-col items-center justify-center">
          <p className="text-xl xl:text-3xl font-light xl:w-2/3 text-[#450a0a] lg:pt-6 pt-4 md:text-center">
            Motoland Adventures, is a local motorcycle travel agency nestled in
            the heart of Leh, Ladakh. We thrive on the spirit of motorcycle
            exploration.
          </p>
          <p className="text-xl xl:text-3xl font-light xl:w-2/3 text-[#450a0a] lg:pt-6 pt-4 md:text-center">
            Embark on an array of exhilarating outdoor escapades in Ladakh and
            Zanskar with us.
          </p>

        </div>
        <div className="flex gap-4 py-10 xl:pt-10">
          <Link href="/free">
            <Button
              className="xl:text-3xl text-xl md:justify-center md:flex
                    font-semibold rounded-[60px] border-8 border-red-400/90
                    py-6 px-8 xl:py-10 xl:px-24 bg-[#ef4444] transition-all
                    duration-300 shadow-md hover:shadow-[#fca5a5] hover:scale-110"
            >
              Motorcycle Tours
            </Button>
          </Link>
        </div>
        <div className="xl:pt-16">
          <video
            className="rounded-[20px] shadow-red-400 shadow-2xl xl:w-5/6 xl:mx-auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
