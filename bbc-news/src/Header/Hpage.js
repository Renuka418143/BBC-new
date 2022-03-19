import React from 'react';
import './Hpage.css';

import h from './img/h.jpg'

const Hpage = () => {
  return (
    <div class="mb-10">
          <div class="content-center px-14">
            <div>
            <div class="bg-yellow-500 h-6 w-1 ">
            <h2 className='text'>
            <a href='#'>
              <p>
                
              </p>
            </a>
            </h2>
            </div>
            </div>

            <div class="grid grid-cols-3 gap-4 mt-4 ">
            <div class="">
                <div className='img'>
                  <img src={h} height="400px" width="800px" marginleft="right" class="mb-2"/>
                </div></div>
            </div>
          </div>
        </div>
        

  )
}

export default Hpage;
