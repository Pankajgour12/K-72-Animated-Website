import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Agence() {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef(null);
  const imageRef = useRef(null);

  const imageArray = [
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg", // fixed space
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_640X960-640x960.jpg",
  ];

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: imageDivRef.current,
      start: "top 41%",
      end: "top -90%",
  
      pin: true,


      pinSpacing:true,
      pinReparent:true,
     pinType:'transform',
      scrub:1,
       
      
      anticipatePin:1,
      invalidateOnRefresh:true,
      onUpdate: (self) => {
        let imageIndex ;
        if(self.progress<1){
          imageIndex = Math.floor(self.progress * imageArray.length)

        }else{
          imageIndex = imageArray.length -1
        }
        imageRef.current.src = imageArray[imageIndex];
      },
    });
  }); 



  return (
    <div className="parent ">
      <div className="section1 relative py-1 ">
        {/* animated image */}
        <div
          ref={imageDivRef}
          className="absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-[10vw] left-[30vw]"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src={imageArray[0]}
            alt="animated sequence"
          />
        </div>
    


        {/* text section */}
        <div className="relative font-[font2] ">
          <div className="mt-[55vh]">
            <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
              SEVEN7Y <br />
              TWO
            </h1>
          </div>

          <div className="pl-[40%] mt-5 mb-5">
            <p className="  text-[3rem] leading-[3rem] indent-[5em]">
              We’re inquisitive and open-minded, and we make sure creativity
              crowds out ego from every corner. A brand is a living thing, with
              values, a personality and a story. If we ignore that, we can
              achieve short-term success, but not influence that goes the
              distance. We bring that perspective to every brand story we help
              tell.
            </p>
          </div>
        </div>











      </div>

      <div className="section2 h-screen">
        <div className="w-screen mt-[5rem]  px-24 font-[font2] text-[1rem]">
{/*   Row 1 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <div>
      <h2>Expertise</h2>
    </div>
    <div>
      <ul>
        <li>Strategy</li>
        <li>Advertising</li>
        <li>Branding</li>
        <li>Design</li>
        <li>Content</li>
      </ul>
    </div>
  </div>

 {/*  Row 2 */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/*   Left */}
    <div className="md:col-span-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <p>
          Our Work_ Born in curiosity, raised by dedication and fed with a
          steady diet of creativity.
        </p>
        <p>
          Our Creative_ Simmering in an environment where talent can come to a
          full boil. Encouraged to become the best versions of ourselves.
        </p>
      </div>
    </div>

  {/*   Right */}
    <div>
      <p>
        Our Culture_ We’re open to each other. Period. The team works together
        to create a space that makes us proud.
      </p>
    </div>
  </div>
</div>
      </div>
    </div>
  );
}

export default Agence;

