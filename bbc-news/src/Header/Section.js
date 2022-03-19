import React from 'react';

import s from './img/s.jpg'
import sc1 from './img/sc1.jpg'
import sc2 from './img/sc2.jpg'

const Section = () => {
  return (
    <div class="mb-10">
          <div class="content-center px-14">

            <div class="grid grid-cols-5 gap-4 mt-4 ">
            <div class="">
                <div class="relative">
                  <img src={s} height="300px" width="400px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">What hijab verdict means for religious freedom in India</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">The hijab, according to a landmark Indian court ruling on Tuesday, has "something to do with culture but certainly not with religion".</p>
              
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={sc1} height="300px" width="400px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">The tragedy of Afghanistan's malnourished children</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">"I'm helpless as he suffers. I've spent the whole night scared that at any minute he'll stop breathing,' she says.</p>
                  
                </div>
              </div>
              <div class="">
                <div class="relative">
                  <img src={sc2} height="300px" width="400px" class="mb-2"/>
                </div>
                <div class="absoulte mt-0">
                  <h4 class="font-bold text-md text-zinc-800 tracking-tight leading-6 mb-2">Nazanin Zaghari-Ratcliffe and Anoosheh Ashoori arrive in UK after being freed from Iran</h4>
                  <p class="text-sm font-sans text-gray-600 tracking-tight leading-5 mb-2">Their release came after months of negotiations between the British and Iranian governments.</p>
                  
                </div>
              </div>
                <a  class="font-bold text-md text-zinc-500 tracking-tight leading-3 mb-1 height=300px width:100px" href="#">
                   P&O Ferries sparks sacking </a>
            </div>
          </div>
        </div>

  )
}

export default Section
