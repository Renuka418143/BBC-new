import React from "react";
import "./Card.css";
import hm from './img/hm.jpg'
import hm1 from './img/hm1.jpg'
import hm4 from './img/hm4.jpg'
import hm6 from './img/hm6.jpg'
import hm5 from './img/hm5.jpg'




function Cardpaed({ title, imgeUr, body }) {
  const arr = [
    {
      
      desc: "Ukraine war: Residents rescued after Kyiv apartment block strike",
      href:"https://www.bbc.com/news/world-europe-60733921",
    },
    {
      
      src: hm1,
      desc: "Can China do more to stop Russia's war in Ukraine?",
      href:"https://www.bbc.com/news/world-asia-china-60615280",
    },
    {
      src: hm4,
      desc: "How to spot false posts from Ukraine",
      href:"https://www.bbc.com/news/blogs-trending-60654288",
    },
    {
      src: hm6,
      desc: "Ukraine maps: Tracking the Russian invasion",
      href:"https://www.bbc.com/news/world-europe-60729206",
    },
    {
      src: hm5,
      desc: "erial attacks hit city that is corridor to Kyiv",
      href:"https://www.bbc.com/news/world-europe-60729216",
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

export default Cardpaed;

