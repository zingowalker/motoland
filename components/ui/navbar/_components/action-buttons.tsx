"use client";

import React, { useState } from "react";

import { Button } from "@/components/ui/button";

import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";

const ActionButtons = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <div
      className="
    flex
    items-center
    md:justify-end
    md:space-x-6
    sm:px-10
    
    "
    >
      <div className="flex xl:space-x-6">
        <Link
          href={"/rate-list"}
          className="
            xl:flex
            items-center
            hidden
            "
        >
          <div className="font-light flex">Price</div>
        </Link>

        <Link
          href={"/sign-in"}
          className="
            xl:flex
            items-center
            hidden
            
            "
        >
          <div className="font-light flex xl:w-12">Sign In</div>
        </Link>
      </div>

      <div className="flex lg:space-x-4 items-center">
        <Link href={"/rent-motorcycle"}>
          <Button
            className="
                hidden
                md:flex
                text-md
                font-light
                rounded-[40px]
                border-4
                border-red-400/90
                py-6
                bg-red-500
                hover:scale-110
                transition-all
                duration-300
                shadow-md
                hover:shadow-red-300
                
                "
          >
            Rent Motorcycle
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button
            className="
              hidden
              text-red-950
              text-md
              font-light
              bg-red-50
              p-6
                rounded-[40px]
                hover:scale-110
                transition-all
                duration-300
                shadow-md
                md:hidden
                lg:flex
                hover:shadow-red-300"
          >
            Contact Us
          </Button>
        </Link>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
             bg-red-500
             p-3
             rounded-full
             xl:hidden
             "
        >
          <X className="h-6 w-6 text-[#eff0ff] items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="bg-red-100 p-3 rounded-full xl:hidden"
        >
          <AlignJustify className="h-6 w-6 text-red-400 items-center justify-center rounded-full" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} />}
    </div>
  );
};

export default ActionButtons;
