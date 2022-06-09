import { ReactComponent as Languages } from "../Assets/languages.svg";
import { ReactComponent as Tools } from "../Assets/tools.svg";

const Skills = () => {
  return (
    <div className="h-full w-full flex bg-bg2 justify-center">
      <div className="h-[33vh] w-full bg-bg1 absolute bottom-0 z-8" />
      <div className="flex items-end h-full w-[60vw] z-10 justify-between">
        <div className="mb-[15vh] ">
          <Languages />
        </div>
        <div className="mb-[15vh]">
          <Tools />
        </div>
      </div>
    </div>
  );
};

export default Skills;
