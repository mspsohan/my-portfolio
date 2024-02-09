
const Languages = () => {
   return (
      <>
         <h2 className="font-bold mb-3 text-xl">Languages</h2>
         <div>
            <div className="flex justify-between">
               <h3>Bangla</h3>
               <p>100%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
               <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '100%' }}></div>
            </div>
         </div>
         <div>
            <div className="flex justify-between">
               <h3>English</h3>
               <p>90%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
               <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '90%' }}></div>
            </div>
         </div>
         <div>
            <div className="flex justify-between">
               <h3>Hindi</h3>
               <p>80%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
               <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: '80%' }}></div>
            </div>
         </div>
         <hr className="my-5" />
      </>
   );
};

export default Languages;