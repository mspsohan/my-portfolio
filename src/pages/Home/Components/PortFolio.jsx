import img1 from "../../../assets/inventohub.netlify.app_.png"
import img2 from "../../../assets/the-library-msp.netlify.app_.png"
const PortFolio = () => {
   return (
      <>
         <div id="portfolio" className="flex flex-col items-center justify-center font-medium mt-16">
            <h2 className="text-5xl ">Portfolio</h2>
            <hr className="w-60 my-3 border-b-4 rounded-full border-yellow-500" />
         </div>
         <div className="mx-5 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] mb-16 p-5">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
               <div className="h-[400px] relative overflow-hidden border border-yellow-500 group">
                  <img src={img1} alt="" className="absolute duration-1000 group-hover:-translate-y-[calc(100%-400px)] " />
               </div>
               <div className="h-[400px] relative overflow-hidden border border-yellow-500 group">
                  <img src={img2} alt="" className="absolute duration-1000 group-hover:-translate-y-[calc(100%-400px)]" />
               </div>
               <div className="h-[400px] relative overflow-hidden border border-yellow-500 group">
                  <img src={img2} alt="" className="absolute duration-1000 group-hover:-translate-y-[calc(100%-400px)]" />
               </div>
               <div className="h-[400px] relative overflow-hidden border border-yellow-500 group">
                  <img src={img1} alt="" className="absolute duration-1000 group-hover:-translate-y-[calc(100%-400px)] " />
               </div>
            </div>
         </div>
      </>
   );
};

export default PortFolio;