import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone.webp";
import cyberBlog from "../public/img/projects/cyberBlog.webp";
import noorShop from "../public/img/projects/noorShop.webp";
import dynamicPortfolio from "../public/img/projects/dynamicPortfolio.png";
import bizhub from "../public/img/projects/bizhub.png";
import ecommerce from "../public/img/projects/ecommerce.png";
import pasbanDashboard from "../public/img/projects/pasbanDashboard.png";
import reactBD from "../public/img/projects/reactBD.png";
import dashboard from "../public/img/projects/dashboard.webp";
import Image from "next/image";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="wrapper px-3">
      <Title text="Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <ProjectCard
          img={pasbanDashboard.src}
          title="Dashboard"
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
       
      </div>
    </div>
  );
};

export default Projects;
