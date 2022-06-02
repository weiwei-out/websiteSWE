import { ReactComponent as Andrew } from "../Assets/asset_andrew.svg";

const Home = () => {
  return (
    <div className="h-full w-full relative bg-bg1">
      <div className="h-[30vh] w-full bg-bg2 absolute bottom-0" />
      <div className="absolute flex w-[65vw] ml-[15vw] pt-[27vh] justify-end z-9">
        <div className="grow">
          <div className="text-9xl text-white text-center ">andrew wei</div>
          <div className="text-5xl text-white text-center mt-5">
            full stack web developer
          </div>
        </div>
        <div className="z-9">
          <Andrew />
        </div>
      </div>
    </div>
  );
};

export default Home;
