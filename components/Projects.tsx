import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import bizhub from "../assets/img/projects/bizhub.webp";
import ecommerce from "../assets/img/projects/ecommerce.webp";
import pasbanDashboard from "../assets/img/projects/pasbanDashboard.png";
import interNativeLogistics from "../assets/img/projects/interNativeLogistics.png";
import interNativeLedger from "../assets/img/projects/interNativeLedger.webp";
import kindleHub from "../assets/img/projects/kindleHub.webp";
import messanger from "../assets/img/projects/messanger.webp";
import infinibayfrontend from "../assets/img/projects/infinibay-frontend.png";
import glowskin from "../assets/img/projects/glow-skin-care.png";
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
          img={infinibayfrontend.src}
          title="Virtual Machine Web Frontend"
          link="https://infinibay-frontend.vercel.app/"
        />
        <ProjectCard
          img={glowskin.src}
          title="Skin care"
          link="https://glow-skin-care.vercel.app/"
        />
        <ProjectCard
          img={interNativeLogistics.src}
          title="InterNative Logistics "
          link="https://internative-logistics.vercel.app/"
        />
        <ProjectCard
          img={messanger.src}
          title="Messanger"
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={kindleHub.src}
          title="kindle Hub "
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={bizhub.src}
          title="BizHub"
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={ecommerce.src}
          title="Ecommerce "
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
        <ProjectCard
          img={interNativeLedger.src}
          title="interNative Ledger "
          link="https://portfolio-nu-gray-95.vercel.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
