"use client";

import ContentMenu from "./content-menu";

import React, { useState } from "react";

import {
  AlignJustify,
  BarChart,
  Building2,
  Camera,
  ChevronDown,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Info,
  LibrarySquare,
  LifeBuoy,
  Lock,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  UserCircle2,
  UserPlus,
} from "lucide-react";

interface MenuItem {
  title: string;
  menu: string;
  options: { label: string; emoji: React.ReactElement; href: string }[];
}
                   
const items: MenuItem[] = [
  {
    title: "Our Motorcycle Adventure Tours",
    menu: "our-motorcycle-adventure-tours",
    options: [
      {
        label: "5N/6D Amazing Ladakh",
        emoji: <UserPlus className="text-orange-500" />,
        href: "/amazing-ladakh",
      },
      {
        label: "7N/8D West Ladakh",
        emoji: <DollarSign className="text-green-500" />,
        href: "/west-ladakh",
      },
      {
        label: "8N/9D Lakes of Ladakh",
        emoji: <Code className="text-blue-500" />,
        href: "/lakes-of-ladakh",
      },
      {
        label: "9N/10D Land of high Passes",
        emoji: <PaintBucket className="text-indigo-500" />,
        href: "/land-of-high-passes",
      },
      {
        label: "10N/11D Kashmir to Ladakh",
        emoji: <BarChart className="text-rose-500" />,
        href: "/kashmir-to-ladakh",
      },
    ],
  },

  // {
  //   title: "For Business",
  //   menu: "for-business",
  //   options: [
  //     {
  //       label: "Bird AI",
  //       // emoji: <Sparkles className="text-indigo-500" />,
  //       href: "/bird-ai",
  //     },
  //     {
  //       label: "Enterprise",
  //       // emoji: <Building2 className="text-green-500" />,
  //       href: "/enterprise",
  //     },
  //     {
  //       label: "Bird HQ",
  //       // emoji: <Home className="text-blue-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "Customers",
  //       // emoji: <Smile className="text-indigo-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "Security",
  //       // emoji: <Lock className="text-rose-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "Video Hosting",
  //       // emoji: <Camera className="text-orange-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "Video Library",
  //       // emoji: <LibrarySquare className="text-amber-500" />,
  //       href: "/",
  //     },
  //   ],
  // },
  // {
  //   title: "Resources",
  //   menu: "resources",
  //   options: [
  //     {
  //       label: "Blog",
  //       // emoji: <AlignJustify className="text-orange-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "Help & Support",
  //       // emoji: <LifeBuoy className="text-green-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "Download",
  //       // emoji: <Download className="text-blue-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "BirdSDK",
  //       // emoji: <Code2Icon className="text-rose-500" />,
  //       href: "/",
  //     },
  //     {
  //       label: "Screen Recorder",
  //       // emoji: <Headphones className="text-orange-500" />,
  //       href: "/screen-recorder",
  //     },
  //     {
  //       label: "Community",
  //       // emoji: <GraduationCap className="text-green-500" />,
  //       href: "/",
  //     },
  //   ],
  // },         
  {                                        
    title: "Ladakh Information",
    menu: "ladakh-information",
    options: [
      {
        label: "General",
        emoji: <Info className="text-red-500" />,
        href: "/information/general",
      },
      {
        label: "Places to Visit in Ladakh",
        emoji: <UserCircle2 className="text-green-500" />,
        href: "/information/places-to-visit-in-ladakh",
      },
      {
        label: "Festivals of Ladakh 2024-2025",
        emoji: <Newspaper className="text-blue-500" />,
        href: "/information/festivals-of-ladakh-2024-2025",
      },
    ],
  },
];

export function NavigationMenuBar() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const renderMenu = (item: MenuItem) => {
    const { title, menu, options } = item;

    return (
      <div
        className="flex items-center relative"
        onMouseEnter={() => handleMouseEnter(menu)}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center">
          <div className="w-auto">{title}</div>
          <div>
            <ChevronDown className="relative top-[1px] h-3 w-3" />
          </div>
          <div className="mt-20">
            {activeMenu === menu && (
              <ContentMenu
                options={options.map((option, index) => ({
                  ...option,
                  href: option.href,
                }))}
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="hidden text-md font-light space-x-4 w-full items-center xl:flex h-24">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <div className="cursor-pointer hidden xl:block">
            {renderMenu(item)}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}
