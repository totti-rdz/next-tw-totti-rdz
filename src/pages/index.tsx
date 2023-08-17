import type { NextPage } from "next";
import Image from "next/image";
import profileImg from "../assets/profile-image.jpg";
import Waves from "../components/Waves";
import { UnderConstruction } from "../components/UnderConstruction/UnderConstruction";
import Stars from "../components/Stars/Stars";
import Statistics from "../components/Statistics/Statistics";
import AboutMe from "../components/AboutMe/AboutMe";

const Home: NextPage = () => {
  return (
    <>
      <section className="relative bg-gradient-to-b from-blue-500 to-cyan-500">
        <div className="h-[65vh] w-full m-0 p-0 flex justify-center items-center text-center px-5">
          <div className="rounded-full overflow-hidden h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 mx-3 shrink-0">
            <Image src={profileImg} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase text-white shrink-1">
            <span className="bg-[url('../assets/text-background-waves.webp')] bg-cover bg-center text-transparent bg-clip-text hover:bg-clip-border hover:text-white rounded-lg px-0 sm:px-5">
              Hello world
            </span>
          </h1>
        </div>
        <Waves />
      </section>
      <section className="space-y-10 mt-20 mb-10">
        <div className="w-full space-y-10">
          <AboutMe />
        </div>
        <div className="w-full">
          <Stars />
        </div>
        <div className="w-full">
          <Statistics />
        </div>
        <div className="">
          <UnderConstruction />
        </div>
      </section>
    </>
  );
};

export default Home;
