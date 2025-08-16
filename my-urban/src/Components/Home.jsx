import React from "react";
import Carousel from "./Carousel";
import CategoryGrid from "./CategoryGrid";
import Footer from "./Footer";

function Home(){
    return(
        <div>
      <Carousel />
      <CategoryGrid />
      <Footer/>
        </div>
    )
}
export default Home;