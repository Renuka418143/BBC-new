import React from "react";
import "./Card.css";
import lr from './img/lr.png'
import lr3 from './img/lr3.png'
import lr2 from './img/lr2.png'

import lr7 from './img/lr7.jpg'
import lr6 from './img/lr6.jpg'







function Longreads({ title, imgeUr, body }) {
  const arr = [
    {
      src: lr,
      desc: "Ukraine war: Residents rescued after Kyiv apartment block strike",
      href:"https://www.bbc.com/news/world-europe-60733921",
    },
    {
      
      src: lr2,
      desc: "Can China do more to stop Russia's war in Ukraine?",
      href:"https://www.bbc.com/news/world-asia-china-60615280",
    },
    {
      src: lr3,
      desc: "How to spot false posts from Ukraine",
      href:"https://www.bbc.com/news/blogs-trending-60654288",
    },
    {
      src: lr6,
      desc: "Ukraine maps: Tracking the Russian invasion",
      href:"https://www.bbc.com/news/world-europe-60729206",
    },
    {
      src: lr7,
      desc: "erial attacks hit city that is corridor to Kyiv",
      href:"https://www.bbc.com/news/world-europe-60729216",
    },
  ];
  return (
    <>
     <h2 class="text-slate-900 font-bold text-2xl px-20 ml-4 pb-4">Longreads
       <hr />
    </h2>
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

export default Longreads;

