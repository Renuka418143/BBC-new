import React from 'react';
import './Sport.css';
import {AiOutlineClockCircle} from "react-icons/ai";

import sp from './img/sp.jpg'
import sp1 from './img/sp1.jpg'
import sp2 from './img/sp2.jpg'
import sp3 from './img/sp3.jpg'
import sp4 from './img/sp4.jpg'
import sp5 from './img/sp5.jpg'
import sp6 from './img/sp6.jpg'



const Sport = () => {
  return (
    <div class="mb-10">
  
   <br/>
   <h2 class="text-slate-900 font-bold text-2xl px-20 ml-4 pb-4">Sport
       <hr />
    </h2>
    <br />
    
  
            <div class="grid grid-cols-4 gap-1">
                <div class="col-span-2">
                    <div class="relative">
                        <img src={sp} height="900px" width="600px" class="col-span-2 bg-black bg-blend-darken"/>
                    </div>
                    <div className="text1">
                    </div>
                    <h4 class="font-bold text-xl">Relentless Reds throw down the gauntlet to Premier League leaders Man City</h4>
                    <AiOutlineClockCircle />   </div>
              
             <div class="col-span-2">
                 <div class="grid grid-cols-3 gap-1">
                 <div class="">
                <div class="relative">
                  <img src={sp1} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Tottenham manager Antonio Conte says Harry Kane "deserves to win </h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2"></p>
                  <AiOutlineClockCircle />
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={sp2} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">England call up Crystal Palace defender for friendlies</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2"></p>
                  <AiOutlineClockCircle />
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={sp3} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Max Verstappen says Formula 1 does 'not need to heal'</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2"></p>
                  <AiOutlineClockCircle />
                </div>
                </div>
                <div class="">
                <div class="relative">
                  <img src={sp4} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">England v France George Furbank starts in Paris</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">4 minutes ago4 minutes ago</p> 
                  <AiOutlineClockCircle />
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={sp6} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Emotional Yarmolenko scores winner</h4>
                  <AiOutlineClockCircle /><p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Asia</p>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={sp5} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Osaka in tears after being heckled</h4>
                  <AiOutlineClockCircle />
                  
                  
                </div>
                </div>
                

                 </div>
             </div>
            </div>
          </div>


  )
}

export default Sport;
