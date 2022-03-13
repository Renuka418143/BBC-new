import React from "react";
// import "tailwindcss/base";
// import "tailwindcss/components";
// import "tailwindcss/utilities";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <section class="bg-neutral-600 text-white">
          <div>
            <h3 class="font-bold text-lg hover:underline px-14 pt-4">Explore the BBC</h3>
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
  );
};

export default Footer;
