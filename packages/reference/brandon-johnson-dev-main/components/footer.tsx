import { navItems, socialLinks } from "@/lib/navigation";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Link from "next/link";
import { Logo } from "./logo";

export const Footer = () => {
  const legal: { name: string; href: string }[] = [];
  const socials = [
    {
      title: "twitter",
      href: "https://twitter.com/swizzmagik",
      icon: (
        <IconBrandX className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "github",
      href: "https://github.com/swizzmagik",
      icon: (
        <IconBrandGithub className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
    {
      title: "linkedin",
      href: "https://linkedin.com/in/swizzmagik",
      icon: (
        <IconBrandLinkedin className="h-5 w-5 text-muted dark:text-muted-dark hover:text-black" />
      ),
    },
  ];

  return (
    <div className="relative">
      <div className="border-t border-neutral-100  dark:border-neutral-800 px-8 pt-20 pb-32 relative bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto text-sm text-neutral-500 dark:text-neutral-400 flex sm:flex-row flex-col justify-between items-start ">
          <div>
            <div className="mr-4  md:flex mb-4">
              <Logo />
            </div>
            <div>Copyright &copy; 2024 J. Brandon Johnson</div>
            <div className="mt-2">All rights reserved.</div>
          </div>
          <div className="grid grid-cols-3 gap-10 items-start mt-10 md:mt-0">
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {navItems.map((link) => (
                <Link
                  key={link.title}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {legal.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="flex justify-center space-y-4 flex-col mt-4">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-5xl md:text-9xl lg:text-[18rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        BRANDON
      </p>
    </div>
  );
};
