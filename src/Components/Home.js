import { ReactComponent as Andrew } from "../Assets/asset_andrew.svg";
// import { useEffect } from "react";

const Home = () => {
  //Rain Effect
  // const numDrops = 100;
  // const backDrop = document.getElementById("rain");
  // // // helper function to generate a random number range.
  // function randRange(minNum, maxNum) {
  //   return Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
  // }

  // useEffect(() => (backDrop.style.backgroundColor = "#FF99FF"));
  // useEffect(() => console.log("working"));

  return (
    <div className="relative">
      <div className="h-[30vh] w-full mt-[71vh] bg-bg2 absolute z-9" />
      <div className="h-full w-full pl-[7vw] flex items-center justify-center bg-bg1">
        {/* <div className="h-full w-full absolute bg-black" id="rain" /> */}
        <div className="absolute flex w-[80vw] max-w-[2160px] h-full z-9">
          <div className="flex content-center justify-center self-center basis-1/2">
            <div className="relative">
              <div className="text-9xl text-white text-center ">andrew wei</div>
              <div className="text-5xl text-white text-center mt-5">
                full stack web developer
              </div>
            </div>
          </div>
          <div className="flex basis-1/2 h-[80vh] justify-center self-center z-9">
            <Andrew className="self-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
