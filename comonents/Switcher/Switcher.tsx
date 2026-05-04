"use client";
import Image from "next/image";
export default function Switcher() {
  return (
    <button className="bg-[var(--primary-color)] p-4">
      <Image src={"/icons/weathers/summer.svg"} alt="Summer Icon" width={20} height={20} />
    </button>
  );
}
