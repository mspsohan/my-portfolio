import { Link } from "react-router-dom";
import { MdCloudDownload } from "react-icons/md";
const DownloadCV = () => {
   return (
      <div className="">
         <Link to="#" className="relative border w-full inline-flex items-center justify-start overflow-hidden  px-6 py-3 font-medium transition-all bg-yellow-300 rounded hover:bg-white group">
            <span className="w-60 h-60 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-14 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
            <span className="relative w-full text-center text-black transition-colors duration-300 ease-in-out group-hover:text-white flex items-center mx-auto justify-center text-xl gap-4">Download CV <MdCloudDownload className="text-2xl" /></span>
         </Link>
      </div>
   );
};

export default DownloadCV;