"use client";

import ColourfulText from "@/components/ui/colourful-text";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi2";
import Balancer from "react-wrap-balancer";
import { Button } from "./button";
import { DocumentModal } from "./resume-modal";

import { Link } from "next-view-transitions";
import Image from "next/image";
import { useRouter } from "next/navigation";

export const Hero = () => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isCoverLetterOpen, setIsCoverLetterOpen] = useState(false);
  const [resumeContent, setResumeContent] = useState("");
  const [coverLetterContent, setCoverLetterContent] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    // This function is called directly from a user interaction (click)
    // which should allow unmuted autoplay in most browsers
    setIsPlaying(true);
    setIsMuted(false);

    // Small timeout to ensure the video element is rendered
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        const playPromise = videoRef.current.play();

        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Playback failed:", error);
            // If it fails with unmuted, try with muted as fallback
            if (videoRef.current) {
              videoRef.current.muted = true;
              setIsMuted(true);
              videoRef.current.play().catch((e) => {
                console.error("Even muted playback failed:", e);
                // Reset state if all playback attempts fail
                setIsPlaying(false);
              });
            }
          });
        }
      }
    }, 50);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
    }
  };

  // Load document contents
  useEffect(() => {
    const loadContent = async () => {
      try {
        // Load resume
        const resumeResponse = await fetch("/resume.md");
        if (resumeResponse.ok) {
          const resumeContent = await resumeResponse.text();
          setResumeContent(resumeContent);
        }

        // Load cover letter
        const coverLetterResponse = await fetch("/cover-letter.md");
        if (coverLetterResponse.ok) {
          const coverLetterContent = await coverLetterResponse.text();
          setCoverLetterContent(coverLetterContent);
        }
      } catch (error) {
        console.error("Failed to load document content:", error);
      }
    };
    loadContent();
  }, []);

  const handleResumeClick = () => {
    setIsResumeOpen(true);
  };

  const handleCoverLetterClick = () => {
    setIsCoverLetterOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen pt-20 md:pt-40 relative overflow-hidden">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="flex justify-center relative"
      >
        {!isPlaying && (
          <div className="relative">
            <button
              onClick={handlePlayVideo}
              className="relative w-[180px] h-[180px] p-0 bg-transparent rounded-full cursor-pointer group"
              aria-label="Play introduction video"
            >
              <Image
                src="/images/avatar.jpg"
                alt="Avatar"
                width={180}
                height={180}
                className="rounded-full"
              />
              <div className="absolute inset-0 bg-black/10 hover:bg-black/20 rounded-full transition-colors duration-200"></div>
              <div className="absolute -inset-[5px] rounded-full opacity-0 border-[5px] border-white/50 group-hover:opacity-100 transition-opacity duration-200"></div>
            </button>
            <button
              onClick={handlePlayVideo}
              className="absolute -bottom-[10px] -right-[10px] z-10 flex items-center justify-center w-14 h-14 bg-neutral-800 dark:bg-black/50 rounded-full border-[2px] border-neutral-700/50 dark:border-white/20 shadow-lg hover:bg-neutral-700 dark:hover:bg-black/70 transition-colors duration-200 cursor-pointer"
              aria-label="Play introduction video"
            >
              <FaPlay className="ml-0.5 text-white" size={18} />
            </button>
          </div>
        )}
        {isPlaying && (
          <div className="relative">
            <motion.div
              className="absolute -inset-3 rounded-full bg-blue-200/40 dark:bg-blue-300/20"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <video
              ref={videoRef}
              onEnded={handleVideoEnded}
              className="rounded-full w-[180px] h-[180px] object-cover relative z-10"
              playsInline
              autoPlay
              muted={false}
              controls={false}
            >
              <source src="/images/brandon-hello-video.mp4" type="video/mp4" />
            </video>
            {isMuted && (
              <button
                onClick={toggleMute}
                className="absolute bottom-2 right-2 bg-white/80 dark:bg-black/70 p-1.5 rounded-full"
                aria-label="Unmute video"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              </button>
            )}
          </div>
        )}
      </motion.div>
      <motion.h1
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
        }}
        className="text-2xl md:text-4xl lg:text-6xl font-semibold max-w-4xl mx-auto text-center mt-6 relative z-10"
      >
        <Balancer>
          Software Engineering, <ColourfulText text="Supercharged" />
        </Balancer>
      </motion.h1>
      <motion.p
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.2,
        }}
        className="text-center mt-6 text-base md:text-xl text-muted dark:text-muted-dark max-w-4xl mx-auto relative z-10"
      >
        <Balancer>
          Hi! I'm Brandon, a 5x Software Engineer powered by the latest LLMs and
          agentic workflows. I also manage an army of 600+ AI agents that
          collaborate, learn, and act on data 24x7x365.
        </Balancer>
      </motion.p>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.4,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={handleResumeClick}>View Resume</Button>
          <Button onClick={handleCoverLetterClick} variant="outline">
            View Cover Letter
          </Button>
        </div>
        <Button
          variant="simple"
          as={Link}
          href="/contact"
          className="flex space-x-2 items-center group"
        >
          <span>Contact me</span>
          <HiArrowRight className="text-muted group-hover:translate-x-1 stroke-[1px] h-3 w-3 transition-transform duration-200 dark:text-muted-dark" />
        </Button>
      </motion.div>
      <motion.div
        initial={{
          y: 80,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: "easeOut",
          duration: 0.5,
          delay: 0.6,
        }}
        className="flex items-center gap-4 justify-center mt-6 relative z-10"
      >
        <div className="p-4 border border-neutral-200 bg-neutral-100 dark:bg-neutral-800 dark:border-neutral-700 rounded-[32px] mt-20 relative">
          <div className="absolute inset-x-0 bottom-0 h-40 w-full bg-gradient-to-b from-transparent via-white to-white dark:via-black/50 dark:to-black scale-[1.1] pointer-events-none" />
          <div className="p-2 bg-white dark:bg-black dark:border-neutral-700 border border-neutral-200 rounded-[24px]">
            <Image
              src="/images/dashboard.png"
              alt="header"
              width={1920}
              height={1080}
              className="rounded-[20px]"
            />
          </div>
        </div>
      </motion.div>

      <DocumentModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        content={resumeContent}
        title="Resume"
        downloadUrl="/john-brandon-johnson-resume.pdf"
        downloadLabel="Download PDF"
      />

      <DocumentModal
        isOpen={isCoverLetterOpen}
        onClose={() => setIsCoverLetterOpen(false)}
        content={coverLetterContent}
        title="Cover Letter"
      />
    </div>
  );
};
