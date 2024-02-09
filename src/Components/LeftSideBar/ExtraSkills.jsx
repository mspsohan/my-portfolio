import { IoIosCheckboxOutline } from "react-icons/io";
const ExtraSkills = () => {
   return (
      <>
         <div className="font-bold mb-3 text-xl">Extra Skills</div>
         <div className="flex items-center gap-2">
            <IoIosCheckboxOutline size="20" className="text-yellow-400" />
            <h2>Tailwind Css, Material UI</h2>
         </div>
         <div className="flex items-center gap-2">
            <IoIosCheckboxOutline size="20" className="text-yellow-400" />
            <h2>Git Knowledge</h2>
         </div>
         <hr className="my-5" />
      </>
   );
};

export default ExtraSkills;