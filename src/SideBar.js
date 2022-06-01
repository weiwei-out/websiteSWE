import React from "react";
import { ReactComponent as LinkedIn } from "./Assets/logo_linkedin.svg";
import { ReactComponent as GitHub } from "./Assets/logo_github.svg";
import { ReactComponent as Email } from "./Assets/logo_email.svg";
import { ReactComponent as Resume } from "./Assets/logo_resume.svg";

const SideBar = () => {
  return (
    <div className="fixed mt-[36vh]">
      <div className="bg-red1 w-sideBar h-sideBar rounded-tr-2xl grid place-items-center">
        <LinkedIn
          onClick={() => window.open("https://www.linkedin.com/in/andrewwei1")}
        />
      </div>
      <div className="bg-red2 w-sideBar h-sideBar grid place-items-center">
        <GitHub onClick={() => window.open("https://github.com/weiwei-out/")} />
      </div>
      <div className="bg-red3 w-sideBar h-sideBar grid place-items-center">
        <Email />
      </div>
      <div className="bg-red4 w-sideBar h-sideBar rounded-br-2xl grid place-items-center">
        <Resume
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1n671ywLpWTKDumCK-zn2Jz0Gz9zZnJcE/view"
            )
          }
        />
      </div>
    </div>
  );
};

export default SideBar;
