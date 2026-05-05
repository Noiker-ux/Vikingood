import { weatherList } from "@/data/weatherList";

export function getNowWeather() {
  const seasons = weatherList.map((weatherItem) => weatherItem.id);
  const month = new Date().getMonth();
  return seasons[Math.floor((month + 1) / 3)];
}
