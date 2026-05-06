import Switcher from "@/comonents/Switcher/Switcher";
import InquireForm from "@/comonents/InquireForm/InquireForm";
import StartIcon from "@/public/icons/master.svg";
export default function Home() {
  return (
    <main className="flex justify-center items-center h-[calc(100vh-3rem)]">
      <div className="flex flex-col items-center">
        <StartIcon className="w-4 h-4" />
        <h1 className="text-white text-9xl">VIKINGOOD</h1>
        <p className="text-white">Отправляйтесь в настоящий рай для отдыха.</p>
      </div>
      <Switcher />
    </main>
  );
}
