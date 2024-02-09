import { Outlet } from "react-router-dom";
import LeftSideBar from "../pages/SideBar/LeftSideBar";
import RightSideBar from "../pages/SideBar/RightSideBar";

const Layouts = () => {
   return (
      <div className="flex max-w-[1440px] bg-[#F0F0F6] mx-auto">
         <div className="w-[330px] min-h-screen">
            <LeftSideBar />
         </div>
         <div className="w-full">
            <Outlet />
         </div>
         <div className="w-[110px] min-h-screen ">
            <RightSideBar />
         </div>
      </div>
   );
};

export default Layouts;