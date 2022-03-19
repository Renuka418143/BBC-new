import React from 'react';
import h from './img/h.jpg'
import './Page.css'



const Page = () => {
  return (
    <div class="mb-2">
    <div class="content-center px-14">
            <div>
           
            </div>

            <div class="grid grid-cols-12  gap-4 mt-4 ">
            <div class="col-span-1"></div>
            <div class="col-span-5">
                <div class="relative">
              <a href="#">
                <h4 class="font-bold text-4xl">Zenlensky says
                Russia peace talks 
                'more' realistic </h4>
                </a>
                <br />
                <p >Ukrainian President Volodymyr Zelensky says 
                peace talks with Russia are beginning to "sound more realistic"
                Ukrainian negotiator Mykhailo Podolyak said there are "fundamental
                 contradictions" during the talks but "certainly room for compromise"</p>
                 <a href="#"><li>Infection and hunger as hundreds hide in Mariupol cellar</li></a>
                 <a href="#"><li>Infection and hunger as hundreds hide in Mariupol cellar</li></a>
                 
                 
                </div>
           
                
              </div>
              <div class="col-span-6">
            <div class="relative">
            <img className='img' src={h} height="100px" width="1000px"  class="mb-2"/>
                </div>
                
              </div>
              </div>
              
              
          </div>
          </div>
        /*  <div class="content-right px-30">
          <div class="absoulte mt-0">
                  
                  <a href='#'>
                  <h4 class="font-bold text-xl text-zinc-800 tracking-tight leading-6 mb-2">Chelesea snatch late win over Newcastle</h4> </a>
                  </div>
        <div class="">
                <div class="relative">
                  <img className='img' src={s1} height="100px" width="900px" />
                </div>
                
                </div>
               
                </div>
              </div>*/
              
         
      

  )
}

export default Page
