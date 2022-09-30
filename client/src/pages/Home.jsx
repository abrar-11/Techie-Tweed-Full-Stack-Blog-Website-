import React from "react";
import { Categories, Hero } from "../components";

const Home = () => {
   return (
      <>
         <Hero />
         <div className="container mx-auto py-20 px-10">
            <Categories />
         </div>
      </>
   );
};

export default Home;
