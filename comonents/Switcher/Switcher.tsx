"use client";
import { getNowWeather } from "@/utils/getNowWeather";
import { Button } from "@heroui/react/button";
import { Tooltip } from "@heroui/react/tooltip";
import Image from "next/image";
import { useState } from "react";
export default function Switcher() {
  const [weather, setWeather] = useState();
  return (
    <div className="mt-20">
      <Tooltip delay={0}>
        <Button>
          <Image src={"/icons/weathers/summer.svg"} alt="Summer Icon" width={20} height={20} />
        </Button>
        <Tooltip.Content>
          <Tooltip.Arrow />
          <p className="bg-red-500 z-20">{getNowWeather()}</p>
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
}
