import React from 'react';
import './styles1.css';


const News = () => {
  return (
    <div class="mb-10">
          <div class="content-center px-14">
            <div>
            <div class="bg-red-600 h-6 w-1 "><h2 class="text-slate-700 font-bold text-2xl px-18 ml-4 pb-4">News</h2></div>
            </div>

            <div class="grid grid-cols-3 gap-4 mt-4 ">
            <div class="">
                <div class="relative">
                  <img src={require("../img/n1.png")} height="300px" width="400px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-xl text-zinc-800 tracking-tight leading-6 mb-2">UK offers £350 a month to Ukrainian refugee hosts</h4>
                  <p class="text-lg font-sans text-gray-600 tracking-tight leading-5 mb-2">There will also be £10,000 per refugee for local authorities, but critics say the plan fails short.</p>
                  <div class="bg-red-600 h-4 w-1 "><h4 class="uppercase text-sm ml-2"> UK</h4></div>
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={require("../img/n2.png")} height="300px" width="400px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-xl text-zinc-800 tracking-tight leading-6 mb-2">Rabbi investigated over Abramovich citizenship</h4>
                  <p class="text-lg font-sans text-gray-600 tracking-tight leading-5 mb-2">Daniel litvak helped Russian billionaire roam Abramovich obtain portuguese citizenship</p>
                  <div class="bg-red-600 h-4 w-1 "><h4 class="uppercase text-sm ml-2"> Europe</h4></div>
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={require("../img/n3.png")} height="300px" width="400px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-xl text-zinc-800 tracking-tight leading-6 mb-2">Are pigs the future of organ transplants?</h4>
                  <p class="text-lg font-sans text-gray-600 tracking-tight leading-5 mb-2">After a serious of medical breakthroughs, will these animals solve the global shortage of organs?</p>
                  <div class="bg-red-600 h-4 w-1 "><h4 class="uppercase text-sm ml-2"> health</h4></div>
                </div>
              </div>
              
            
            </div>
          </div>
        </div>

  )
}

export default News
