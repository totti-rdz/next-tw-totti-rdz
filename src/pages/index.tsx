import type { NextPage } from "next";
import Waves from "../components/Waves";


const Home: NextPage = () => {
  return (
    <>
      <div className="relative bg-gradient-to-b from-blue-500 to-cyan-500">
        <div className="h-[65vh] w-full m-0 p-0 flex justify-center items-center text-center px-5">
          <div>hello world</div>
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
