import IWeatherItem from "./weatherItem.interface";
import SummerIcon from "@/public/icons/weathers/summer.svg";
import SpringIcon from "@/public/icons/weathers/spring.svg";
import WinterIcon from "@/public/icons/weathers/winter.svg";
import AutumnIcon from "@/public/icons/weathers/autmn.svg";

export const weatherList: IWeatherItem[] = [
  {
    id: "winter",
    label: "Зима",
    icon: <WinterIcon />,
  },
  {
    id: "spring",
    label: "Весна",
    icon: <SpringIcon />,
  },
  {
    id: "summer",
    label: "Лето",
    icon: <SummerIcon />,
  },
  {
    id: "autumn",
    label: "Осень",
    icon: <AutumnIcon />,
  },
];
