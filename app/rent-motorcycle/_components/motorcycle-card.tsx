"use client";

import { useState } from "react";
import Image from "next/image";
import { MotorcycleProps } from "@/types";
import CustomButton from "./custom-button";
import MotorcycleDetails from "./motorcycle-details";
import { generateBikeImageUrl } from "@/utils";
// import { calculateMotorcycleRent } from "@/utils";
import { TbManualGearbox, TbBrandKickstarter } from "react-icons/tb";
import { GiWeight } from "react-icons/gi";

interface MotorcycleCardProps {
  motorcycle: MotorcycleProps;
}

const MotorcycleCard = ({ motorcycle }: MotorcycleCardProps) => {
  const { make, model, engine, starter, gearbox, type } = motorcycle;
  const [isOpen, setIsOpen] = useState(false);

  // const fullDayRent = calculateMotorcycleRent(model, engine, false);
  // const halfDayRent = calculateMotorcycleRent(model, engine, true);

  return (
    <div className="bike-card group text-gray-700 bg-red-50 hover:bg-white hover:shadow-md">
      <div className="bike-card__content">
        <h2 className="bike-card__content-title">
          {make} {model}
        </h2>
      </div>

      {/* <p className="flex mt-6 text-[16px] leading-[22px] font-semibold">
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          ₹
        </span>
         {fullDayRent} 
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /full day - 8 hrs
        </span>{" "}
        <span className="self-start text-[14px] leading-[17px] font-semibold">
          ₹
        </span>
        {halfDayRent}
        <span className="self-end text-[14px] leading-[17px] font-medium">
          /half day - 4 hrs
        </span>
      </p> 
      */}

      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={`/images/${motorcycle.model
            .toLowerCase()
            .replace(/\s+/g, "")}.jpg`}
          alt="motorcycle model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2 ">
        <div className="flex group-hover:invisible w-full justify-between text-gray-500">
          <div className="flex flex-col justify-center items-center gap-2">
            <TbBrandKickstarter width={20} height={20} />
            <p className="text-[14px] leading-[17px]">
              {starter === "e" ? "Electric" : "Kick"}
            </p>
          </div>
          <div className="bike-card__icon">
            <TbManualGearbox width={20} height={20} />
            <p className="text-[14px] leading-[17px]">{gearbox}</p>
          </div>
          <div className="bike-card__icon">
            <GiWeight weight={20} height={20} />
            <p className="text-[14px] leading-[17px]">{type}</p>
          </div>
        </div>
        <div className="bike-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-red-500"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <MotorcycleDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        motorcycle={motorcycle}
      />
    </div>
  );
};

export default MotorcycleCard;
