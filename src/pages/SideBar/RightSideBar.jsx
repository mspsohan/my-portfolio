import { IoHomeSharp } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { GiFeather } from "react-icons/gi";
import { FiMessageSquare } from "react-icons/fi";
import { Link } from 'react-scroll';
const RightSideBar = () => {
   return (
      <div className="fixed">
         <div className="p-2 bg-white flex flex-col items-center gap-10 rounded h-screen pt-20">
            <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer">
               <IoHomeSharp className="p-2 text-4xl rounded-full bg-yellow-400 hover:bg-gray-100" />
            </Link>
            <Link to="education" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer"><FaUserGraduate className="p-2 text-4xl rounded-full bg-yellow-400 hover:bg-gray-100" /></Link>
            <Link to="portfolio" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer"><GiFeather className="p-2 text-4xl rounded-full bg-yellow-400 hover:bg-gray-100" /></Link>
            <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className="cursor-pointer"><FiMessageSquare className="p-2 text-4xl rounded-full bg-yellow-400 hover:bg-gray-100" /></Link>
         </div>
      </div>
   );
};

export default RightSideBar;