import React from "react";
import "./Card.css";

import cp from './img/cp.jpg'
import cp2 from './img/cp2.jpg'
import cp4 from './img/cp4.jpg'
import cp3 from './img/cp3.jpg'
import cp5 from './img/cp5.jpg'




function Card({ title, imgeUr, body }) {
  const arr = [
    {
      src: cp,
      desc: "Russians grieve for fallensoldiers  mounts and Putin attacks",
      href:"https://www.bbc.com/news/world-europe-60769509",
    },
    {
      
      src: cp4,
      desc: "What does Putin want and will Russia end its war?",
      href:"https://www.bbc.com/news/world-europe-56720589",
    },
    {
      src: cp2,
      desc: "Civilian toll mounts and Putin attacks 'traitors'",
      href:"https://www.bbc.com/news/world-europe-60769514",
    },
    {
      src: cp3,
      desc: "Russian-occupied city stays angry and defiant",
      href:"https://www.bbc.com/news/world-60769318",
    },
    {
      src: cp5,
      desc: "Tracking the Russian invasion of attcks",
      href:"https://www.bbc.com/news/world-europe-60506682",
    },
  ];
  return (
    <>

      <div className="the_line"></div>
      <div className="continer">
        {arr.map((currElem)=>{return(
        <div className="card-container">
          <img src={currElem.src} alt="the_card_news" />
          <a href={currElem.href}>{currElem.desc}</a>
        </div>
        );})}
      </div>
    </>
  );
}

export default Card;

