import { Link } from "react-router-dom";
const HomeBottomText = () => {
  return (
   
    
     <div className="font-[font2] flex items-center justify-center gap-2">
      <div className="border-3  hover:border-[#d3fd50] hover:text-[#D3FD50] h-25 flex items-center px-14 border-white rounded-full uppercase">
        <Link className=" text-[4vw]  "to='/project'>
          Projects
        </Link>
      </div>
      <div className="border-3  hover:border-[#d3fd50] hover:text-[#D3FD50] h-25 flex items-center px-14 border-white rounded-full uppercase">
        <Link className=" text-[4vw]  "to='/agence'>
          Agence
        </Link>
      </div>
    </div>
   
  );
};

export default HomeBottomText;
