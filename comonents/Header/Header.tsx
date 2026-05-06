import Link from "next/link";
import LogoIcon from "@/public/icons/logo-light.svg";
import SoundIcon from "@/public/icons/sound.svg";
export default function Header() {
  return (
    <header className=" bg-red-300 flex justify-between items-center px-16 py-3">
      <button>
        <SoundIcon className="w-full h-4" />
      </button>
      <Link href="/">
        <LogoIcon />
      </Link>
      <button className="uppercase font-medium"> Inquire </button>
    </header>
  );
}
