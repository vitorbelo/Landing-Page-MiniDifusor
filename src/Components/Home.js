import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
// import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Mini Difusor Portátil Aroma
          </h1>
          <p className="primary-text">
            Projetado para tornar sua vida mais tranquila e revigorante, este umidificador de ar USB oferece uma experiência aromática única 
            que irá transformar qualquer ambiente. Combinando tecnologia avançada com um design compacto e elegante, é o companheiro perfeito para o seu lar 
            ou escritório.
          </p>
          <button className="secondary-button">
            Peça já <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;