import React from "react";
import image from "../assets/images/upper-navbar/image.png";
import arrow from "../assets/images/upper-navbar/arrow.png"

const UpperNavbar = () => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-16 relative">
        <div className="flex justify-center items-center absolute right-0 px-6 gap-2">
          <div>
            <h2>
              Free Trial | <span className="text-sm px-2 ">2days left</span>
            </h2>
            <h2 className="text-sm text-primary">Extend free trial</h2>
          </div>
          <div>
            <img src={image} alt="" />
          </div>
          <div>
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpperNavbar;
