"use client";
import { getNowWeather } from "@/utils/getNowWeather";
import Image from "next/image";
import { useState } from "react";
export default function Switcher() {
  const [weather, setWeather] = useState();
  return (
    <button className="bg-[var(--primary-color)] p-4 cursor-pointer">
      <Image src={"/icons/weathers/summer.svg"} alt="Summer Icon" width={20} height={20} />
    </button>
  );
}
