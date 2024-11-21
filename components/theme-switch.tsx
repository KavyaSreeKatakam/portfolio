"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
    className="fixed bottom-5 right-5 w-[3rem] h-[3rem] dark:bg-white bg-black text-white
     dark:text-gray-950 bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 
     shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all"

     title= {theme === "dark" ? "Light Mode" : "Dark Mode"}
      onClick={toggleTheme}
    >
      {theme === "dark" ? <BsSun /> : <BsMoon/>}
    </button>
  );
}

