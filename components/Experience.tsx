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
          title="Shot Technologies Pvt Ltd"
          subTitle="Full Stack Developer 2023 - Present"
          icon={<SiReactivex />}
        />
        <ExperienceCard
          title="Firmsol"
          subTitle="Full Stack Developer 2023 - present"
          icon={<SiToptal />}
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
