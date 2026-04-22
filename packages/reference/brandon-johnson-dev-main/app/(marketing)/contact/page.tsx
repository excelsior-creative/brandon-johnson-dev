import { Background } from "@/components/background";
import { ContactForm } from "@/components/contact";
import { HorizontalGradient } from "@/components/horizontal-gradient";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden py-20 md:py-0 px-4 md:px-20 bg-gray-50 dark:bg-black">
      <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-2 relative overflow-hidden">
        <Background />
        <ContactForm />
        <div className="relative w-full z-20 hidden md:flex border-l border-neutral-100 dark:border-neutral-900 overflow-hidden bg-gray-50 dark:bg-black items-center justify-center">
          <div className="max-w-sm mx-auto text-center">
            <Image
              src="/images/avatar.jpg"
              alt="J. Brandon Johnson"
              width={100}
              height={100}
              className="rounded-full m-auto mb-4"
            />
            <p
              className={cn(
                "font-semibold text-xl text-center dark:text-muted-dark text-muted"
              )}
            >
              I'm always looking for new opportunities and challenges.
            </p>
            <p
              className={cn(
                "font-normal text-base text-center text-neutral-500 dark:text-neutral-200 mt-8"
              )}
            >
              Whether you have a specific project in mind or just want to
              discuss potential collaborations, I'd love to hear from you.
            </p>
          </div>
          <HorizontalGradient className="top-20" />
          <HorizontalGradient className="bottom-20" />
          <HorizontalGradient className="-right-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
          <HorizontalGradient className="-left-80 transform rotate-90 inset-y-0 h-full scale-x-150" />
        </div>
      </div>
    </div>
  );
}
