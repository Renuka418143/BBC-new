import React from 'react';
import './Must.css';


import mu from './img/mu.jpg'
import mu1 from './img/mu1.jpg'

import mu3 from './img/mu3.jpg'
import mu4 from './img/mu4.jpg'
import mu5 from './img/mu5.jpg'
import mu6 from './img/mu6.jpg'
import mu7 from './img/mu7.jpg'





const Must = () => {
  return (
    <div class="mb-10">
  
   <br/>
   <h2 class="text-slate-900 font-bold text-2xl px-20 ml-4 pb-4">Must See
       <hr />
    </h2>
    <br />
    <div class="grid grid-cols-1 gap-1"></div>
    
  
            <div class="grid grid-cols-12">
            <div class="col-span-1"></div>
                <div class="col-span-5">
                    <div class="relative" className='relative'>
                        <img src={mu} height="900px" width="550px" class="col-span-2 bg-black bg-blend-darken"/>
                        <h4 class="font-bold text-xl"> Hidilyn Diaz: From accusations of anti-government plot to historic Olympic gold</h4>
                    </div>
                    <div className="text1">
                    </div>
                    
              </div>
              
             <div class="col-span-5">
                 <div class="grid grid-cols-3 gap-1">
                 <div class="">
                <div class="relative">
                  <img src={mu1} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-sm text-zinc-800 tracking-tight leading-6 mb-2"> Why US students are staging walkouts over masks</h4>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={mu7} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">The winners of the Open category of the 2022 Sony World Photography Awards have been revealed.</h4>
                
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={mu4} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">The first African to win architecture's top award</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Former world number one Naomi .</p>
                  
                </div>
                </div>
                <div class="">
                <div class="relative">
                  <img src={mu5} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Chelesea snatch late win o</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Chelesea snatch a dramatic</p> 
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={mu3} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Emotional Yarmolenko scores winner</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Ukraine international .</p>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={mu6} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Osaka in tears after being heckled</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Former world number one Naomi .</p>
                  
                </div>
                </div>
                

                 </div>
             </div>
            </div>
          </div>


  )
}

export default Must;
