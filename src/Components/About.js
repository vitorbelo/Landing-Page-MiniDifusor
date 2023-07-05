import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre</p>
        <h1 className="primary-heading">
            Um mini difusor portátil oferece várias vantagens e benefícios
        </h1>
        <p className="primary-text">
            Este difusor portátil é capaz de dispersar suavemente os óleos essenciais de sua escolha, enchendo o ar com fragrâncias relaxantes e revitalizantes. Sinta-se instantaneamente revigorado após um longo dia de trabalho ou desfrute de uma noite de sono tranquila, graças à luz noturna suave que cria uma atmosfera acolhedora.
        </p>
        <p className="primary-text">
            Além disso, este incrível dispositivo possui a opção de névoa fria, que ajuda a hidratar o ambiente, proporcionando uma sensação refrescante e aliviando os sintomas de ressecamento. Ideal para dias secos ou para quem sofre com problemas respiratórios.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Saiba mais</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Assistir o vídeo
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;