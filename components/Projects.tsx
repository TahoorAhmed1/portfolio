import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import bizhub from "../public/img/projects/bizhub.png";
import ecommerce from "../public/img/projects/ecommerce.png";
import pasbanDashboard from "../public/img/projects/pasbanDashboard.png";
import interNativeLogistics from "../public/img/projects/interNativeLogistics.png";
import interNativeLedger from "../public/img/projects/interNativeLedger.png";
import messanger from "../public/img/projects/messanger.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper px-4">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={pasbanDashboard.src}
          title="Dashboard"
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={interNativeLogistics.src}
          title="InterNativeLogistics "
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={interNativeLedger.src}
          title="interNativeLedger "
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={ecommerce.src}
          title="Ecommerce "
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={bizhub.src}
          title="Bizhub"
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={messanger.src}
          title="Messanger"
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
