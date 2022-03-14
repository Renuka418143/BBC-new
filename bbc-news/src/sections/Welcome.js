import React from 'react';
import './styles1.css';
import './welcome.css';

const welcome = () => {
  return (
    <div class="mb-5">
          <div class="content-center px-14">
            <div class=" flex flex-row mb-3 mt-2">
              <h2 class="text-slate-600 font-semibold text-2xl px-18 pt-4 mr-80 ">Welcome to BBC.com</h2>
              <div class="ml-40">
                <h2 class="text-slate-400 font-semibold text-2xl pt-4 mr-0 ml-60">Thursday, 10 March</h2>
              </div>
            </div>

            <div class="grid grid-cols-4 gap-4">
                <div class="col-span-2">
                    <div class="relative">
                        <img src="/img/s1.png" height="500px" width="600px" class="col-span-2 bg-black bg-blend-darken"/>
                    </div>
                    <div className="text1">
                        <h4 class="font-bold text-3xl">Child among Ukraine hospital air strike dead</h4>
                        <p class="text-sm">Ukraine's president says the Russian attack on the facility, which killed three and wounded 17, is a war crime.</p>
                        <div class="bg-red-600 h-4 w-1 mr-2"> <h4 class="uppercase text-sm ml-2"> Europe</h4></div>
                    </div>
              </div>
              <div class="grid-rows-2 col-span-1">
                <div>  
                    <div class="relative ">
                        <img src="/img/s2.png" height="200px" width="300px" class="row-span-1 pb-2"/>
                    </div>
                    <div class="text2 ml-2" >
                        <h4 class="font-semibold text-xl mb-1">Oil prices plunge as UAE supports supply boost</h4>
                        <div class="bg-red-600 h-4 w-1 mr-2"> <h4 class="uppercase text-sm ml-2"> Business</h4></div>
                    </div>
                </div>
                <div>  
                    <div class="relative ">
                        <img src="/img/s3.png" height="200px" width="300px" class="row-span-1 pb-2"/>
                    </div>
                    <div class="text3 ml-2" >
                        <h4 class="font-semibold text-xl mb-1">Children of the Soviet era running from Russia</h4>
                        <div class="bg-sky-600 h-4 w-1 mr-2"> <h4 class="uppercase text-sm ml-2"> Europe</h4></div>
                    </div>
                </div>
              </div>
              <div class="grid-rows-2 col-span-1">
                <div>  
                        <div class="relative ">
                            <img src="/img/s4.png" height="200px" width="300px" class="row-span-1 pb-2"/>
                        </div>
                        <div class="text2 ml-2" >
                            <h4 class="font-semibold text-xl mb-1">Why 'workcations' are here to stay</h4>
                            <div class="bg-sky-600 h-4 w-1 mr-2"> <h4 class="uppercase text-sm ml-2"> Worklife</h4></div>
                        </div>
                    </div>
                    <div>  
                        <div class="relative ">
                            <img src="/img/s5.png" height="200px" width="300px" class="row-span-1 pb-2"/>
                        </div>
                        <div class="text3 ml-2" >
                            <h4 class="font-semibold text-xl mb-1">Where Japan's pirates once ruled</h4>
                            <div class="bg-green-600 h-4 w-1 mr-2"> <h4 class="uppercase text-sm ml-2"> Travel</h4></div>
                        </div>
                    </div>
              </div>
            </div>
          </div>
        </div>

  )
}

export default welcome
