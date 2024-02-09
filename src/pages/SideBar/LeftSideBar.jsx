import Avater from "../../Components/LeftSideBar/Avater";
import DownloadCV from "../../Components/LeftSideBar/DownloadCV";
import ExtraSkills from "../../Components/LeftSideBar/ExtraSkills";
import Info from "../../Components/LeftSideBar/Info";
import Languages from "../../Components/LeftSideBar/Languages";
import Skills from "../../Components/LeftSideBar/Skills";

const LeftSideBar = () => {
   return (
      <>
         <div className=" p-2 bg-white rounded min-h-screen">
            <Avater />
            <Info />
            <Languages />
            <Skills />
            <ExtraSkills />
            <DownloadCV />
         </div>
      </>
   );
};

export default LeftSideBar;