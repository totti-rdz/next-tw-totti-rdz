import type { NextPage } from "next";
import Image from "next/image";
import profileImg from "../assets/profile-image.jpg";
import { UnderConstruction } from "../components/UnderConstruction";
import Waves from "../components/Waves";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-blue-500 to-cyan-500">
        <div className="h-[65vh] w-full m-0 p-0 flex justify-center items-center text-center px-5">
          <div className="rounded-full overflow-hidden h-16 sm:h-20 md:h-24 w-16 sm:w-20 md:w-24 mx-3 shrink-0">
            <Image src={profileImg} />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold uppercase text-white shrink-1">
            Hello world
          </h1>
        </div>
        <Waves />
      </div>
      <div className="my-10">

        <UnderConstruction />
      </div>
    </>
  );
};

export default Home;
