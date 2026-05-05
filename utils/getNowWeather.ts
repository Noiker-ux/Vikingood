export function getNowWeather() {
  const seasons = ["Зима", "Весна", "Лето", "Осень"];
  const month = new Date().getMonth();
  return seasons[Math.floor((month + 1) / 3)];
}
