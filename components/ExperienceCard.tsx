import { ReactNode } from "react";

interface Props {
  title: string;
  subTitle: string;
  icon: ReactNode;
}

const ExperienceCard = ({ title, subTitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl text-slate-200">{icon}</span>
      </span>
      <div>
        <h3 className="md:text-2xl text-xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-500">{subTitle}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
