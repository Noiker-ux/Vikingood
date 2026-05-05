import { ReactNode } from "react";

export default interface IWeatherItem {
  id: string;
  label: string;
  icon: ReactNode;
}
