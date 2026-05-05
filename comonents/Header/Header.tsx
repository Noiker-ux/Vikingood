import Link from "next/link";
import LogoIcon from "@/public/icons/logo-light.svg";
export default function Header() {
  return (
    <header className=" bg-red-300 flex justify-between items-center px-16 py-3">
      <button className="">{/* <Image src="/icons/sound-icon.svg" alt="" width={28} height={14} /> */}</button>
      <Link href="/">
        <LogoIcon />
      </Link>
      <button className="uppercase font-medium"> Inquire </button>
    </header>
  );
}
