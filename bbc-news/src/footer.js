import React from 'react';
// import "tailwindcss/base";
// import "tailwindcss/components"; 
// import "tailwindcss/utilities";
import './style.css';

const Footer = () => {
  return (
    <footer>
      <div>
      <section class="bg-gray-200">
      <h2 class="text-slate-600 font-bold text-xl px-14 pt-4 uppercase hover:text-zinc-900" >bbc in other language</h2>
      <div class="grid grid-cols-2">
        <div class="flex md:flex-row">
          <div class="px-14 pt-4">
            <h4 class="font-bold text-lg hover:underline" >Hindi</h4>
            <p class="text-xs hover:underline">बीजेपी की इस जीत से 2024 की राह और मुश्किल हुई: योगेंद्र यादव</p>
          </div>
          <div class="px-14 pt-4">
            <h4 class="font-bold text-lg hover:underline" >Urdu</h4>
            <p class="text-xs text-right hover:underline">ووٹنگ رجحانات: بی جے پی اُترپردیش، عام آدمی پارٹی پنجاب میں آگے، کانگریس نمایاں کارکردگی دکھانے میں ناکام</p>
          </div>
          <div class="px-14 pt-4">
            <h4 class="font-bold text-lg hover:underline" >Tamil</h4>
            <p class="text-xs hover:underline">5 மாநில தேர்தல் முடிவுகள்: வெற்றி, முன்னிலை நிலவரம் என்ன?</p>
          </div>
          <div class="px-14 pt-4">
            <h4 class="font-bold text-lg hover:underline" >Marathi</h4>
            <p class="text-xs hover:underline">या निकालांवरून बोध घेऊ, काँग्रेस पक्षाचा पराभव स्वीकारत राहुल गांधींची प्रतिक्रिया</p>
          </div>
        </div>

          <div class="px-14 pt-4">
          <h4 class="font-bold text-lg hover:underline" >More Languages</h4>
            <div  class="grid grid-cols-4 text-xs">
              <ul>
                <li class="hover:underline">Arabic عربي</li>
                <li class="hover:underline">Chinese 中文网</li>
                <li class="hover:underline">Indonesian INDONESIA</li>
                <li class="hover:underline">Kyrgyz Кыргыз</li>
                <li class="hover:underline">Persian فارسی</li>
                <li class="hover:underline">Somali SOMALI</li>
                <li class="hover:underline">Turkish TÜRKÇE</li>
                <li class="hover:underline">Vietnamese TIẾNG VIỆT</li>
              </ul>
              <ul>
                <li class="hover:underline">Azeri AZƏRBAYCAN</li>
                <li class="hover:underline">French AFRIQUE</li>
                <li class="hover:underline">Japanese 日本語</li>
                <li class="hover:underline">Marathi मराठी</li>
                <li class="hover:underline">Portuguese BRASIL</li>
                <li class="hover:underline">Spanish MUNDO</li>
                <li class="hover:underline">Ukrainian УКРАЇНСЬКA</li>
              </ul>
              <ul>
                <li class="hover:underline">Bangla বাংলা</li>
                <li class="hover:underline">Hausa HAUSA</li>
                <li class="hover:underline">Kinyarwanda GAHUZA</li>
                <li class="hover:underline">Nepali नेपाली</li>
                <li class="hover:underline">Russian НА РУССКОМ</li>
                <li class="hover:underline">Swahili SWAHILI</li>
                <li class="hover:underline">Urdu اردو</li>
              </ul>
              <ul>
                <li class="hover:underline">Burmese မြန်မာ</li>
                <li class="hover:underline">Hindi हिन्दी</li>
                <li class="hover:underline">Kirundi KIRUNDI</li>
                <li class="hover:underline">Pashto پښتو</li>
                <li class="hover:underline">Sinhala සිංහල</li>
                <li class="hover:underline">Tamil தமிழ்</li>
                <li class="hover:underline">Uzbek O'ZBEK</li>
              </ul>
            </div>
          </div>
        </div>
      
      </section>

      <section class="bg-neutral-600 text-white">
        <div> 
        <h3 class="font-bold text-lg hover:underline px-14 pt-4" >Explore the BBC</h3>
        <div class=" px-14 pt-4 font-bold grid grid-cols-6">
          <ul>
            <li>Home</li>
            <li>Future</li>
          </ul>
          <ul>
            <li>News</li>
            <li>Culture</li>
          </ul>
          <ul>
            <li>sport</li>
            <li>Music</li>
          </ul>
          <ul>
            <li>Reel</li>
            <li>Tv</li>
          </ul>
          <ul>
            <li>Worklife</li>
            <li>Weather</li>
          </ul>
          <ul>
            <li>Travel</li>
            <li>Sounds</li>
          </ul>
        </div>
        <hr class="flex px-14 pt-2"></hr>
        <div>
        <ul class="flex flex-row text-sm px-14 pt-4">
                <li class="hover:underline mr-4">Terms of Use</li>
                <li class="hover:underline mr-4">About the BBC</li>
                <li class="hover:underline mr-4">Privacy Policy</li>
                <li class="hover:underline mr-4">Cookies</li>
                <li class="hover:underline mr-4">Accessibility Help</li>
                <li class="hover:underline mr-4">Parental Guidence</li>
                <li class="hover:underline mr-4">Contact the BBC</li>
                <li class="hover:underline mr-4">Get Personalised Newsletters</li>
                <li class="hover:underline mr-4">Adverise with us</li>
              </ul>
              <h3 class="hover:underline px-14 text-sm pt-3">AdChoices / Do Not Sell My Info</h3>
              <ul class="px-14 text-sm pt-3 flex flex-row pb-3">
                <li class="font-bold">Copyright © 2022 BBC.</li>
                <li>The BBC is not responsible for the content of external sites.</li>
                <li class="font-bold">Read about our approch to external linking.</li>
              </ul>
        </div>
        </div>
      </section>

      </div>
    </footer>
   
  )
}

export default Footer
