import React from "react";
import logo from "../assets/images/right-navbar/Group 5.png";
import projects from "../assets/images/right-navbar/projects.png";
import sample from "../assets/images/right-navbar/sample.png";
import apps from "../assets/images/right-navbar/apps.png";
import intro from "../assets/images/right-navbar/intro.png";
import helpsupport from "../assets/images/right-navbar/help&support.png";
import feedback from "../assets/images/right-navbar/feedback.png";
import collapse from "../assets/images/right-navbar/collapse.png";
import Main from "./Main";

const LeftNavbar = () => {
  return (
    <>
      <div>
        <div className="w-60 h-screen relative">
          <div className="upperdiv">
            <div className="flex justify-center items-center px-2 py-4">
              <img src={logo} className="w-20 h-7 cursor-pointer" alt="" />
            </div>

            <hr className="w-52 m-auto " />

            <div className="p-4 flex gap-2 items-center">
              <img src={projects} alt="" className="cursor-pointer" />
              <h3 className='cursor-pointer hover:text-primary'>My Projects</h3>
            </div>

            <div className="p-4 flex gap-2 items-center">
              <img src={sample} alt="" className="cursor-pointer" />
              <h3 className="cursor-pointer hover:text-primary">Sample projects</h3>
            </div>

            <hr className="w-52 m-auto " />

            <div className="p-4 flex gap-2 items-center">
              <img src={apps} alt="" className="cursor-pointer" />
              <h3 className="cursor-pointer hover:text-primary">Apps</h3>
            </div>

            <div className="p-4 flex gap-2 items-center">
              <img src={intro} alt="" className="cursor-pointer" />
              <h3 className="cursor-pointer hover:text-primary">Intro to Necleo</h3>
            </div>
          </div>

          <div className="lowerdiv absolute bottom-0 w-full">
            <div className="p-4 flex gap-2 items-center">
              <img src={helpsupport} alt="" className="cursor-pointer" />
              <h3 className="cursor-pointer hover:text-primary">Help & Support</h3>
            </div>

            <div className="p-4 flex gap-2 items-center">
              <img src={feedback} alt="" className="cursor-pointer" />
              <h3 className="cursor-pointer hover:text-primary">Feedback</h3>
            </div>

            <div className="p-4 flex gap-2 items-center">
              <img src={collapse} alt="" className="cursor-pointer" />
              <h3 className="cursor-pointer hover:text-primary">Collapse</h3>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftNavbar;
