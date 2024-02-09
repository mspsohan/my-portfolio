import Banner from "../Components/Banner";
import Contact from "../Components/Contact";
import Copyright from "../Components/Copyright";
import Education from "../Components/Education";
import PortFolio from "../Components/PortFolio";

const Home = () => {
   return (
      <div id="home">
         <Banner />
         <Education />
         <PortFolio />
         <Contact />
         <Copyright />
      </div>
   );
};

export default Home;