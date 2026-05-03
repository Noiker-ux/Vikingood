"use client";
import Image from "next/image";
export default function Switcher() {
  return (
    <button className="primary-button">
      <Image src={"/icons/weathers/summer.svg"} alt="Summer Icon" width={20} height={20} />
    </button>
  );
}
