import { SiInformatica } from "react-icons/si";
import Title from "./Title";

const Aboutme = () => {
  return (
    <div className="wrapper px-4">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="md:text-lg text-base font-medium tracking-wide flex flex-col gap-6 ">
        <p>
          My name is Tahoor Ahmed, and I am a highly skilled MERN (MongoDB,
          Express.js, React.js, Node.js) / ReactNative developer with 3 years of
          professional experience. I am dedicated to creating efficient and
          user-friendly web applications using the MERN stack. I have a strong
          passion for web development and strive to contribute to innovative
          projects that have a positive impact. During my career, I have gained
          expertise in both front-end and back-end technologies, allowing me to
          work on various aspects of web development. I have hands-on experience
          with MongoDB for database management, Express.js for building robust
          web APIs, React.js for creating interactive user interfaces, and
          Node.js for server-side development.
        </p>
        <p>
          My ultimate goal is to utilize my skills and knowledge to contribute
          to meaningful projects that push the boundaries of innovation. I am
          excited to be a part of teams that share the same passion for creating
          impactful solutions and strive to make a positive difference in the
          world.
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
