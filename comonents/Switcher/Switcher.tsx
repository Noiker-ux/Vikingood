"use client";
import { weatherList } from "@/data/weatherList";
import { getNowWeather } from "@/utils/getNowWeather";
import { Button } from "@heroui/react/button";
import { Tooltip } from "@heroui/react/tooltip";

import { Fragment, useState } from "react";
export default function Switcher() {
  const [weather, setWeather] = useState(getNowWeather());
  const weatherInfo = weatherList.find((item) => item.id === weather);
  const [hover, setHover] = useState(false);
  return (
    <div className="absolute right-10 bottom-10 mt-20 ml-40 flex flex-col w-fit" onMouseLeave={() => setHover(false)}>
      <div className={`flex flex-col overflow-hidden  ${hover ? "h-auto " : "h-0"}`}>
        {weatherList
          .filter((e) => e.id != weather)
          .map((weatherItem) => (
            <Tooltip key={weatherItem.id} delay={0}>
              <Button
                isIconOnly
                className={"rounded-none p-6 bg-[var(--primary-color)] group"}
                onHoverChange={() => setHover(true)}
                onClick={() => {
                  setWeather(weatherItem.id);
                  setHover(false);
                }}
              >
                <div className="fill-[var(--primary-light-color)] scale-150 group-hover:fill-[var(--background-color)]">
                  {weatherItem.icon}
                </div>
              </Button>
              <Tooltip.Content
                className={
                  "py-2.5 px-6 rounded-none text-md bg-[var(--background-color)] font-bold text-lg text-[var(--primary-color)]"
                }
                placement="left"
                offset={15}
              >
                <Tooltip.Arrow />
                {weatherItem.label}
              </Tooltip.Content>
            </Tooltip>
          ))}
      </div>
      <Tooltip delay={0}>
        <Button
          isIconOnly
          className={"rounded-none p-6 bg-[var(--background-color)]"}
          onHoverChange={() => setHover(true)}
        >
          <div className="scale-150 fill-[var(--primary-color)]">{weatherInfo?.icon}</div>
        </Button>
        <Tooltip.Content
          className={
            "py-2.5 px-6 rounded-none text-md bg-[var(--background-color)] font-bold text-lg text-[var(--primary-color)]"
          }
          placement="left"
          offset={15}
        >
          <Tooltip.Arrow />
          {weatherInfo?.label}
        </Tooltip.Content>
      </Tooltip>
    </div>
  );
}
