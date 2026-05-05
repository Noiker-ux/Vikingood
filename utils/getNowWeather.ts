export function getNowWeather(date: Date) {
  const seasons = ["Зима", "Весна", "Лето", "Осень"];
  const month = date.getMonth();
  return seasons[Math.floor((month + 1) / 3)];
}
