import DownloadCV from "../../../Components/LeftSideBar/DownloadCV";
import img from "../../../assets/Sohan Perves Standing.png"

const Banner = () => {

   return (
      <div>
         <div className="mx-5 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex justify-between rounded">
            <div className="flex flex-col justify-center ml-[50px]">
               <h2 className="text-5xl font-medium">I{"'"}m Sohan Perves <br /><span className="text-yellow-400">Mern - Stack</span> Developer</h2>
               <p className="w-[600px] my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ex aspernatur harum sint pariatur voluptatibus aliquam reprehenderit possimus ipsa eveniet repudiandae labore doloremque quia neque repellat, nesciunt vitae, qui voluptate nemo itaque, dignissimos illum. Natus minima placeat pariatur dolores commodi?</p>
               <div className="w-60">
                  <DownloadCV />
               </div>
            </div>
            <div className="">
               <img src={img} alt="" className="w-96" />
            </div>
         </div>
      </div>
   );
};

export default Banner;