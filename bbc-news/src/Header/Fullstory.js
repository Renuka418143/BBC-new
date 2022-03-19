import React from 'react';
import './Fullstory.css';
import fs from './img/fs.jpg'
import fs1 from './img/fs1.jpg'
import fs2 from './img/fs2.jpg'
import fs3 from './img/fs3.jpg'
import fs4 from './img/fs4.jpg'
import fs5 from './img/fs5.jpg'
import f6 from './img/f6.jpg'


const Fullstory = () => {
  return (
    <div class="mb-10">
  
   <br/>
   <h2 class="text-slate-900 font-bold text-2xl px-20 ml-4 pb-4">FullStory
       <hr />
    </h2>
    <br />
    
  
            <div class="grid grid-cols-12">
            <div class="col-span-1"></div>
                <div class="col-span-5">
                    <div class="relative">
                        <img src={fs} height="900px" width="550px" class="col-span-2 bg-black bg-blend-darken"/>
                    </div>
                    <div className="text1">
                    </div>
                    <h4 class="font-bold text-xl">Afghans turn to cryptocurrencies amid US sanctions </h4>
              </div>
              
             <div class="col-span-5">
                 <div class="grid grid-cols-3 gap-1">
                 <div class="">
                <div class="relative">
                  <img src={fs1} height="200px" width="300px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Nazanin Zaghari-Ratcliffe: Why has she been freed now?</h4>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={fs2} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Selling sex to survive in Iran</h4>
                 
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={fs3} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Ukraine war: The women tracing missing relatives</h4>
              
                  
                </div>
                </div>
                <div class="">
                <div class="relative">
                  <img src={fs4} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Why is turning to Saudi Arabia for oil so controversial?</h4>
                 
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={fs5} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Who are the dual nationals jailed in Iran?</h4>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={f6} height="200px" width="250px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Protester exposes cracks in Kremlin's war message</h4>
   
                  
                </div>
                </div>
                

                 </div>
             </div>
            </div>
          </div>


  )
}

export default Fullstory;
