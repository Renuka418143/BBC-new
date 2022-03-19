import React from 'react';
import './Around.css';
import ar from './img/ar.jpg'
import ar2 from './img/ar2.jpg'
import ar3 from './img/ar3.jpg'
import ar5 from './img/ar5.jpg'
import ar6 from './img/ar6.jpg'
import ar4 from './img/ar4.jpg'
import ar7 from './img/ar7.jpg'





const Around = () => {
  return (
    <div class="mb-10">
  
   <br/>
   <h2 class="text-slate-900 font-bold text-2xl px-20 ml-4 pb-4">Around the BBC
       <hr />
    </h2>
    <br />
    
  
            <div class="grid grid-cols-12 gap-1">
            <div class="col-span-1"></div>
                <div class="col-span-5">
                    <div class="relative">
                        <img src={ar} height="900px" width="600px" class="col-span-2 bg-black bg-blend-darken"/>
                    </div>
                    <div className="text1">
                    </div>
                    <h4 class="font-bold text-xl">How countries get their national identities</h4>
                    <a>BBC Worklife</a>
              </div>
              
             <div class="col-span-5">
                 <div class="grid grid-cols-3 gap-1">
                 <div class="">
                <div class="relative">
                  <img src={ar2} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">The 'ghost colleagues' of the remote workplace</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">BBC Travel</p> 
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={ar3} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">The healers who treat 'bad luck'</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">formar world </p>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={ar4} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">The most remarkable Star Trek episode ever made</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Former world number one Naomi .</p>
                  
                </div>
                </div>
                <div class="">
                <div class="relative">
                  <img src={ar5} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">The paradox of how antidepressants are tested</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">BBC Future</p> 
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={ar6} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">HOW WE WORK
'Face blindness': Why people blank on faces at work</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Ukraine international .</p>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={ar7} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Africa's global biodiversity hotspot</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Former world number one Naomi .</p>
                  
                </div>
                </div>
                

                 </div>
             </div>
            </div>
          </div>


  )
}

export default Around;
