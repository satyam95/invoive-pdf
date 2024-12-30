import Image from "next/image";
import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";

export function Navbar() {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="Logo"
          className="size-10"
        />
        <h3 className="text-3xl font-semibold">
          Invoice<span className="text-blue-500">Marshal</span>
        </h3>
      </Link>
      <Link href="/login">
        <RainbowButton>Get Started</RainbowButton>
      </Link>
    </div>
  );
}
