import React from 'react';
import logo2 from './img/logo2.jpg'
import profile from './img/profile.png'
import sign from './img/sign.png'

const Home = () => {
  return (
    <div>
      {/* main content */}
      <div class="relative hidden lg:flex items-center ml-auto">
        {/* Navbar or header section */}
        <nav>
          <div >
            <ul class="flex flex-col mt-6 md:flex-row md:space-x-3 md:mt-0 md:text-sm md:font-large bg-white h-10 text-black text-semibold gap-2 pt-2">
            <li>
              <img src={logo2} height="50%" width="100px " class="ml-6 content-center " />
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class=" hover:bg-sky-500 h-2 w-20  hover:flex justify-end" >
              <div class="md:flex ">
              <img src={profile} height="-5px" width="30px " /><span class="border-b-red-500">Signin</span>
              </div>
            </li>
            <div class="bg-black h-10 w-0.5"> </div>

            <li class="hover:border-b-red-500">
              <span class="table-cell text-left ">Home</span>  
            </li>
            <div class="bg-black h-5 w-0.5"> </div>

            <li class=" hover:bg-red-500 h-2 w-auto  hover:flex justify-end" >
              <span class="table-cell text-left">News</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-yellow-500">
              <span class="table-cell text-left">Sport</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-sky-400">
              <span class="table-cell text-left">Reel</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-sky-700">
              <span class="table-cell text-left">Worklife</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-green-500">
              <span class="table-cell text-left">Travel</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-sky-900">
              <span class="table-cell text-left">Future</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-purple-600">
              <span class="table-cell text-left">Culture</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-white hover:text-black">
              <span class="table-cell text-left">Music</span>  
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-white hover:text-black flex flex-row">
              <select class="bg- text-black">More
              
                <option>More</option>
                <option>Tv</option>
                <option>Weather</option>
                <option>Sounds</option>
              
              </select>
            </li>
            <div class="bg-white h-10 w-0.5"> </div>

            <li class="hover:underline hover:bg-white hover:text-black">
            <div class="md:flex row-auto ">
              <img src={sign} height="10%" width="20px" class=" "/><span class="mr-12 pt-2">Search_BBC</span>
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
