import React from "react";
import "./Card.css";

function Card({ title, imgeUr, body }) {
  const arr = [
    {
      src: "www.google.com",
      desc: "",
      href:"#",
    },
    {
      src: "www.google.com",
      desc: "",
      href:"#",
    },
    {
      src: "www.google.com",
      desc: "",
      href:"#",
    },
    {
      src: "www.google.com",
      desc: "",
      href:"#",
    },
    {
      src: "www.google.com",
      desc: "",
      href:"#",
    },
  ];
  return (
    <>
      <div className="the_line"></div>
      <div className="continer">
        {arr.map((currElem)=>{return(
        <div className="card-container">
          <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/3374/production/_123627131_georgia2.jpg" alt="the_card_news" />
          <a href="#">Russia faces brain drain as thousands flee abroad</a>
        </div>
        );})}
      </div>
    </>
  );
}

export default Card;

{
  /* <div className='image-container'>
  <img src={imgeUr} alt=''/>
  </div>
<div className='card-container-horizental'>
<div className='card-title'>
<h4>{title} bbc news report todays  updates </h4>
</div>

<div className='card-body'>
<p>{body} am sat in a cavernous hall in a large hotel on the southern coast of Turkey. The room is packed with hundreds of journalists awaiting the arrival of the Russian Foreign Minister, Sergei Lavrov.</p>
</div>
</div>
<br></br>
<div className='btn'>
  <button>
    <a>
      view more
    </a>
  </button>
</div>
<div></div> */
}
