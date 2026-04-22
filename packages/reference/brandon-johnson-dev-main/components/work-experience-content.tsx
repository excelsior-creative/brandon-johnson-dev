"use client";

export const WorkExperienceContent = ({ experience }: { experience: any }) => {
  return (
    <div className="text-neutral-800 dark:text-neutral-200 text-base sm:text-lg md:text-2xl font-sans max-w-3xl mx-auto">
      <div className="text-neutral-600 dark:text-neutral-400 text-xs sm:text-sm mb-2 sm:mb-4">
        {experience.period}
      </div>
      <div className="text-base sm:text-lg font-bold mb-1 sm:mb-2">
        {experience.role}
      </div>
      <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        {experience.company}
      </div>
      <p className="text-sm sm:text-base mb-5 sm:mb-8 line-clamp-3 sm:line-clamp-none">
        {experience.description}
      </p>
      <a
        href={experience.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-xs sm:text-sm text-blue-500 hover:text-blue-600 transition-colors mt-auto"
      >
        Learn More →
      </a>
    </div>
  );
};
