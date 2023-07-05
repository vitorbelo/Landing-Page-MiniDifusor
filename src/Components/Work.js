import React from "react";
import Garantia from "../Assets/garantia.png";

const Work = () => {
  const workInfoData = [
    {
      image: Garantia,
      title: "Resultados em 90 Dias ou seu dinheiro de volta.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Garantia</p>
        <h1 className="primary-heading">Satisfação garantida ou seu dinheiro de volta</h1>
        <p className="primary-text">
        Confiamos tanto na eficácia do Rosa Amazônica que caso você utilize ele durante 90 dias e não tenha resultados, devolvemos o seu dinheiro. Isso mesmo! 
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;