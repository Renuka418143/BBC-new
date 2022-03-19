import React from 'react';
import logo2 from './img/logo2.jpg'
import profile from './img/profile.png'
import sign from './img/sign.png'

const Home = () => {
  return (
    <div>
      {/* main content */}
      <div class="relative hidden lg:flex items-center ">
        {/* Navbar or header section  mt-6 gap-2 pt-2 ml-auto*/}
        <nav>
          <div >
            <ul class="flex flex-col md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-large bg-white h-10 text-black text-semibold ">
            <li>
              <img src={logo2} height="10%" width="100px " class="ml-6 content-center " />
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class=" hover:bg-sky-500 h-2 w-20  hover:flex justify-end " >
              <div class="md:flex  border-l-2 px-1.5">
              <img src={profile} height="-5px" width="30px " /><span class="border-b-red-500">Signin</span>
              </div>
            </li>
            {/* <div class="bg-black h-10 w-0.5"> </div> */}

            <li class="hover:border-b-red-500 border-l-2 px-1.5">
              <span class="table-cell ">Home</span>  
            </li>
            {/* <div class="bg-black h-5 w-0.5"> </div> */}

            <li class="hover:border-b-red-500 border-l-2 px-1.5" >
              <span class="table-cell ">News</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-l-2 px-1.5 px-1.5 hover:underline hover:bg-yellow-500">
              <span class="table-cell ">Sport</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class=" border-l-2 px-1.5 hover:underline hover:bg-sky-400">
              <span class="table-cell ">Reel</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-l-2 px-1.5 hover:underline hover:bg-sky-700">
              <span class="table-cell ">Worklife</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-l-2 px-1.5 hover:underline hover:bg-green-500">
              <span class="table-cell ">Travel</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-l-2 px-1.5 hover:underline hover:bg-sky-900">
              <span class="table-cell ">Future</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-l-2 px-1.5 hover:underline hover:bg-purple-600">
              <span class="table-cell">Culture</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-l-2 px-1.5 hover:underline hover:bg-white hover:text-black">
              <span class="table-cell">Music</span>  
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-l-2 px-1.5 hover:underline hover:bg-white hover:text-black ">
              <select class="bg- text-black">More
              
                <option>More</option>
                <option>Tv</option>
                <option>Weather</option>
                <option>Sounds</option>
              
              </select>
            </li>
            {/* <div class="bg-white h-10 w-0.5"> </div> */}

            <li class="border-x-2 px-1.5 hover:underline hover:bg-white hover:text-black">
            <div class="md:flex row-auto ">
              <img src={sign} height="2%" width="20px"/><span class=" ">Search_BBC</span>
              </div> 
            </li>
            </ul>
          </div>
        </nav>


      </div>

      
        {/* body section */}
        


        {/* footer section */}
        <div>

        </div>

    </div>
  )
}

export default Home
