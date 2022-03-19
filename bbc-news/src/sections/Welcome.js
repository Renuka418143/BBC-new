import React from 'react';
import './styles1.css';
import './Welcome.css';
import mu1 from './img/mu1.jpg'
import mu2 from './img/mu2.jpg'
import mu4 from './img/mu4.jpg'
import mu5 from './img/mu5.jpg'
import mu6 from './img/mu6.jpg'


const welcome = () => {
  return (
    <div class="mb-5">
     <h2 class="text-slate-900 font-bold text-2xl px-20 ml-4 pb-4">Around the BBC
       <hr />
    </h2>

            <div class="grid grid-cols-4 gap-4">
                <div class="col-span-2">
                    <div class="relative">
                        <img src={mu1} height="500px" width="600px" class="col-span-2 bg-black bg-blend-darken"/>
                    </div>
                    <div className="text1">
                    </div>
                    <div className="card-container">
                    <h4 class="font-bold text-3xl">The Syrian women replacing men leaders
                    <a href="https://www.bbc.com/news/world-middle-east-60682214"></a>
                    </h4>  

                    </div>
                    
              </div>
              <div class="grid-rows-2 col-span-1">
                <div>  
                    <div class="relative ">
                        <img src={mu2} height="200px" width="300px" class="row-span-1 pb-2"/>
                        
                    </div>
                    <div class="text2 ml-2" >
                    </div>
                    <br />
                    <br/>
                    <h4>
                    <a href="#" />
                    Oil prices plunge UAE supports boost</h4>
                </div>
                <div>  
                    <div class="relative ">
                        <img src={mu4} height="200px" width="300px" class="row-span-1 pb-2"/>
                    </div>
                    <div className="card-container">
                     <div>
                           <div class="text2 ml-2" >
                    </div>
                    <h4>
                    <a href="#" />
                    Oil prices plunge UAE supports boost</h4>
                </div>
                <div> 
                     </div>
                    </div>
                   
                </div>
              </div>
              <div class="grid-rows-2 col-span-1">
                <div>  
                        <div class="relative ">
                            <img src={mu5} height="200px" width="300px" class="row-span-1 pb-2"/>
                            
                        </div>
                        <div class="text2 ml-2" >
                        </div>
                        
                        <h4 class="font-semibold text-xl mb-1">
                        Why 'workcations' are here to stay safe and cool</h4>
                    </div>
                    <div> 
                     
                        <div class="relative ">
                            <img src={mu6} height="200px" width="300px" class="row-span-1 pb-2"/>
                        </div>
                        <br/>
                        <div class="text3 ml-2" >
                        </div>
                        <h6 class="font-semibold text-xl mb-1">Where Japan's pirates once ruled</h6>
                    </div>
              </div>
            </div>
          </div>


  )
}

export default welcome;
