"use client";
import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  // const handleLogoClick = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };
  return (
    <Link
      href="/"
      // onClick={handleLogoClick}
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
    >
      <Image
        src="/images/avatar.jpg"
        alt="Logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="font-medium text-black dark:text-white">
        J. Brandon Johnson
      </span>
    </Link>
  );
};
