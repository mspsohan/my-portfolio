import { FaFacebook, FaGithub, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Avater = () => {
   return (
      <div className="text-center">
         <div className="mx-auto flex justify-center">
            <img src="https://i.ibb.co/415bCgy/profile-pic.png" alt="" className="rounded-full w-24 h-24 bg-gray-400" />
         </div>
         <div className="my-6">
            <h2 className="text-2xl font-bold">Sohan Perves</h2>
            <h3>MERN Stack Developer</h3>
         </div>
         <div className="flex gap-2">
            <Link><FaLinkedinIn className="p-2 text-4xl bg-yellow-300 hover:bg-white rounded-full" /></Link>
            <Link><FaFacebook className="p-2 text-4xl bg-yellow-300 hover:bg-white rounded-full" /></Link>
            <Link><FaTwitter className="p-2 text-4xl bg-yellow-300 hover:bg-white rounded-full" /></Link>
            <Link><FaInstagram className="p-2 text-4xl bg-yellow-300 hover:bg-white rounded-full" /></Link>
            <Link><FaGithub className="p-2 text-4xl bg-yellow-300 hover:bg-white rounded-full" /></Link>
         </div>
         <hr className="my-5" />
      </div>
   );
};

export default Avater;