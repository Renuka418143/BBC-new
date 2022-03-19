import React from 'react';
import ss from './img/ss.jpg'
import ss2 from './img/ss2.jpg'
import ss3 from './img/ss3.jpg'

import {AiOutlineClockCircle} from "react-icons/ai";



const Hsection = () => {
  return (
    <div class="mb-10">
          <div class="content-center px-14">
            <div>
           
            </div>

            <div class="grid grid-cols-12  gap-4 mt-4 ">
            <div class="col-span-2">
                <div class="relative">
                <a href="#"><h4 class="text-2xl " >Two dead after Japan hit by tremor</h4></a><br/>
                <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">The magnitude 7.3 tremor struck the same region where a major earthquake triggered the Fukushima nuclear disaster 11 years ago.

Two people died </p>
                 <p></p>
                </div>
                
              </div>
              <div class="col-span-4">
            <div class="relative">
                  <img src={ss} height="250px" width="550px" class="mb-2"/>
                </div>
                
              </div>
              <div class="col-span-3">
                <div class="relative">
                  <img src={ss2} height="300px" width="400px" class="mb-2"/>
                </div>
                
                <div class="absoulte mt-0">
                <a href="#">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Biden brands Putin a 'war criminal'</h4></a>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">It is the first time he has used such language to condemn President Putin, and the White House later said he was "speaking from his heart"</p>
                
                </div>
              </div>
              <div class="col-span-3">
                <div class="relative">
                  <img src={ss3} height="300px" width="400px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                <a href="#">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Russia attacks theatre sheltering civilians, Mariupol says</h4></a>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Russia's airstrikes and shells have previously hit a maternity hospital, a church and apartment towers.</p>
                  <AiOutlineClockCircle/>8h
                
                  
           
                </div>
              </div>
              </div>
              
              
          </div>
        </div>

  )
}

export default  Hsection;
