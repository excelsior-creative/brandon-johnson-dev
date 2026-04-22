import { IconArrowRight } from "@tabler/icons-react";

export const WorkExperienceCard = ({
  period,
  role,
  company,
  description,
  index,
  link,
}: {
  period: string;
  role: string;
  company: string;
  description: string;
  index: number;
  link: string;
}) => {
  return (
    <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300">
      <div className="text-sm text-neutral-400 mb-2">{period}</div>
      <h3 className="text-lg font-bold mb-1">{role}</h3>
      <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
        {company}
      </div>
      <p className="text-sm text-neutral-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-sm text-foreground hover:text-foreground/80 transition-colors"
      >
        Learn More <IconArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
};
