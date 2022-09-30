import React from "react";
import { BlogsContainer, Categories, Hero } from "../components";

const Home = () => {
   return (
      <>
         <Hero />
         <div className="container mx-auto  lg:px-10">
            <div className="my-20">
               <Categories />
            </div>
            <div className="my-20">
               <BlogsContainer />
            </div>
         </div>
      </>
   );
};

export default Home;
