import React from "react";
import ProfilePic from "../Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Avaliações</p>
        <h1 className="primary-heading">Avaliações</h1>
        <p className="primary-text">
          Acompanhe um pouco das avaliações recebidas sobre o produto:
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
            Perfeito! Acabamento simples, mas dá uma impressão de que é um produto premium, gostei muito, foi excelente para decoração.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Antonio Carlos</h2>
      </div>
    </div>
  );
};

export default Testimonial;