import Title from "./Title";
import { MdWork } from "react-icons/md";
import { SiReactivex, SiToptal, SiFreelancer, SiFiverr } from "react-icons/si";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper px-4  ">
      <Title text="Experiences" icon={<MdWork />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="InterNative Labs, LLC"
          subTitle="
          Full Stack Developer Sep 2023 - Present · 2 mos"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Firmsol"
          subTitle="Full Stack Developer Jun 2023 - Oct 2023 · 5 mos"
          icon={<SiToptal />}
        />
        <ExperienceCard
          title="Shot Technologies Pvt Ltd"
          subTitle="Full Stack Developer Jun 2022 - Aug 2023 · 1 yr 3 mos "
          icon={<SiReactivex />}
        />

        <ExperienceCard
          title="Freelancer"
          subTitle="MERN Stack Developer 2021 - 2023"
          icon={<SiFreelancer />}
        />
      </div>
    </div>
  );
};

export default Experience;
