import type { NextPage } from "next";
import Image from "next/image";
import profileImg from "../assets/profile-image.jpg";
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
          <span className="bg-[url('../assets/text-background-waves.webp')] bg-cover bg-center text-transparent bg-clip-text hover:bg-clip-border hover:text-white rounded-lg px-0 sm:px-5">
              Hello world
            </span>          </h1>
        </div>
        <Waves />
      </div>

      <div className="relative h-[30vh] sm:h-[20vh] text-center bg-white flex justify-center items-center text-center">
        <p> Content... </p>
      </div>
    </>
  );
};

export default Home;
