const NavBar = () => {
  return (
    <div className="fixed flex w-full pt-[6vh] justify-center z-10 ">
      <div className="flex w-[80vw] max-w-[2160px]">
        <div className="basis-1/2"></div>
        <div className="basis-1/2">
          <div className="flex">
            <div className="text-2xl text-white ml-navBar">skills</div>
            <div className="text-2xl text-white ml-navBar">portfolio</div>
            <div className="text-2xl text-white ml-navBar">about</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
