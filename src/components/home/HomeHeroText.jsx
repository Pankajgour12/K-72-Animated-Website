import React from "react";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center">
      <div className="text-[9.0vw] uppercase leading-[8vw] justify-center flex items-center ">The spark
        </div>
        <div className="text-[9.0vw] uppercase leading-[8vw] justify-center flex items-center gap-2 ">who 
          <div className="h-[0.73em] w-[18vw] rounded-full -mt-3 overflow-hidden">
        <Video />
        </div>
        </div>
      <div className="text-[9.0vw] uppercase leading-[8vw] justify-center flex items-center "> 
        
       
        generates</div>
       
      <div className="text-[9.0vw] uppercase leading-[8vw] justify-center flex items-center ">creativity</div>
    </div>
  );
};

export default HomeHeroText;
