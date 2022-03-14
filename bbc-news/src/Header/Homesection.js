import React from "react";
import "./Homesection.css";
import Card from "./Card";
const Homesection = () => {
  return (
    <div style={{ backgroundColor: "#f2efec", padding: "0rem 10rem" }}>
      <div>
        <br />
        <div class="content-center px-14">
          <div class=" inline gap-4">
            <img src={require("../img/s1.png")} height="400px" width="500px" class="" flexDirection="row" alignItems="center" />
          </div>
        </div>
      </div>

      <div></div>
      <Card title="Card Title" imgeUrl="https://www.bbc.com/news/world-europe-60687203" body="" />
    </div>
  );
};
export default Homesection;
