import React from "react";
import "./style.css";
const Sport = () => {
  return (
    <div class="mb-10">
      <div class="content-center px-14">
        <div>
          {" "}
          <div class="bg-yellow-500 h-6 w-1 ">
            <h2 class="text-slate-700 font-bold text-2xl px-18 ml-4 pb-4">Sport</h2>
          </div>{" "}
        </div>{" "}
        <div class="grid grid-cols-3 gap-4 mt-4 ">
          <div class="">
            {" "}
            <div class="relative">
              <img src={require("./img/spt1.png")} height="300px" width="400px" class="mb-2"  alt="1st pic"/>
            </div>{" "}
            <div class="absoulte mt-0">
              <h4 class="font-bold text-xl text-zinc-800 tracking-tight leading-6 mb-2">Chelesea snatch late win over Newcastle</h4>
              <p class="text-lg font-sans text-gray-600 tracking-tight leading-5 mb-2">
                Chelesea snatch a dramatic late winner, to beat Newcastle in the first game at Stamford Bridge since Blues' Russian owner Roman
                Abramovich was sanctioned by the UK government
              </p>
              <div class="bg-yellow-500 h-4 w-1 ">
                <h4 class="uppercase text-sm ml-2"> football</h4>
              </div>
            </div>{" "}
          </div>{" "}
          <div class="">
            <div class="relative">
              <img src={require("./img/spt2.png")} height="300px" width="400px" class="mb-2" alt="1st pic" />
            </div>
            <div class="absoulte mt-0">
              <h4 class="font-bold text-xl text-zinc-800 tracking-tight leading-6 mb-2">Emotional Yarmolenko scores winner</h4>
              <p class="text-lg font-sans text-gray-600 tracking-tight leading-5 mb-2">
                Ukraine international Andriy Yarmolenko scores the opener against Aston Villa in his first West Ham appearance since the outbreak of
                war in his native country.
              </p>
              <div class="bg-yellow-500 h-4 w-1 ">
                <h4 class="uppercase text-sm ml-2"> football</h4>
              </div>
            </div>
          </div>
          <div class="">
            <div class="relative">
              <img src={require("./img/spt3.png")} height="300px" width="400px" class="mb-2" alt="1st pic"/>
            </div>{" "}
            <div class="absoulte mt-0">
              <h4 class="font-bold text-xl text-zinc-800 tracking-tight leading-6 mb-2">Osaka in tears after being heckled</h4>
              <p class="text-lg font-sans text-gray-600 tracking-tight leading-5 mb-2">
                Former world number one Naomi Osaka is brought to tears by a heckler during her 6-0 6-4 defeat by Veronika KUdermetova at Indian
                Wells.
              </p>
              <div class="bg-yellow-500 h-4 w-1 ">
                <h4 class="uppercase text-sm ml-2"> tennis</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sport;
