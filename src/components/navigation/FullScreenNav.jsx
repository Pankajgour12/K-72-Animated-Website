const FullScreenNav = () => {
  return (
    <div
      id="fullscreennav"
      className=" text-white h-screen py-40 w-full absolute bg-black"
    >
      <div id="">
        <div className="link relative border-t-1 border-white">
          <h1 className="font-[font2] text-[8vw] text-center leading-[0.8] pt-8 uppercase">
          
            Work
          </h1>

          <div className="move absolute text-black flex top-0 bg-[#D3FD50] ">
            <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="lg:h-25 h-14 rounded-full shrink-0 lg:w-80 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="lg:h-25 h-14 rounded-full shrink-0 lg:w-80 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
             <div className="moveX flex items-center">
              <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="lg:h-25 h-14 rounded-full shrink-0 lg:w-80 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg"
                alt=""
              />
              <h2 className="whitespace-nowrap font-[font2] lg:text-[8vw] text-5xl  text-center lg:leading-[0.8] lg:pt-10 pt-4 uppercase">
                Pour Tout voir
              </h2>
              <img
                className="lg:h-25 h-14 rounded-full shrink-0 lg:w-80 w-32 object-cover"
                src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
