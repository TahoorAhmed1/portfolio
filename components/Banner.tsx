import Image from "next/image";
import user from "../assets/img/user.jpg";

const Banner = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 pb-14 pt-10 flex flex-col md:flex-row items-center gap-10 px-2 ">
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] border-indigo-700 p-2 object-cover"
          src={user}
          alt="ProfileImg"
        />
      </div>
      <div className="w-[85%] flex flex-col items-center md:items-start    gap-2">
        <h1 className="md:text-5xl text-4xl font-bold text-center">
          Tahoor Ahmed
        </h1>
        <h3 className="text-2xl text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Full Stack Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left ">
          I am a skilled Full Stack Developer with a strong passion for creating
          efficient and impactful web & mobile applications.
        </p>
      </div>
    </div>
  );
};

export default Banner;
