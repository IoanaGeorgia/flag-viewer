<script setup>
import HeaderComponent from './HeaderComponent.vue'
import LandingContent from './LandingContent.vue'
import { RouterLink } from 'vue-router';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/slider1.jpeg';
import img2 from '../assets/slider2.jpg';
import img3 from '../assets/slider3.jpeg';
import img4 from '../assets/slider4.jpeg';
import img5 from '../assets/slider5.jpg';
import img6 from '../assets/slider6.jpeg';

const modules = [Navigation, Pagination, Autoplay];

const sliderImages = [img1, img2, img3, img4, img5, img6];
</script>

<template>
  <div class="greetings">
    <div class="heroImage">
    </div>

    <div class="heroContent">
      <p class="title">Where in the world?</p>
      <p>
        Welcome to Where in the World, an interactive digital space designed specifically for students and curious minds
        eager to uncover the hidden secrets of global geography. Moving far beyond the static lines of a traditional
        map or the mechanical memorization of dry data, this site transforms your screen into an open window to
        fascinating cultures, diverse landforms, and compelling details from every corner of the planet. Whether you
        are preparing for an important exam or simply looking to test your general knowledge, you are in the perfect
        place to explore the world in a dynamic way.
      </p>
      <p>
        Navigating through hundreds of countries becomes a true visual adventure, where recognizing a flag or
        identifying
        a border is just the first step of a profound educational journey. We want every student to make rapid
        connections between the defining elements of a state—from populations and capitals to its exact placement on the
        globe—all through a remarkably clean and intuitive interface. The technology behind the platform works
        instantly to deliver precise information, removing the boredom from the traditional learning process.
      </p>
      <p>
        Understanding our planet is essential in modern society, and Where in the World aims to become your primary
        guide
        in building a solid foundation of general knowledge. Thanks to its fluid structure and airy design, the website
        allows you to transition quickly from one region to another, stimulating your visual memory and transforming
        geography into a passion rather than just a school subject. Feel free to explore the details of each country,
        embrace the challenge of learning something new every day, and discover exactly where any site on this planet is
        located!
      </p>

      <p>
        <router-link to="/countries">
          Learn about countries here
        </router-link>
      </p>

      <swiper :modules="modules" :slides-per-view="1" :space-between="0" navigation :pagination="{ clickable: true }"
        :autoplay="{ delay: 4000, disableOnInteraction: false }" class="swiper">
        <swiper-slide v-for="(img, index) in sliderImages" :key="index">
          <img :src="img" :alt="'Slider image ' + (index + 1)" class="sliderImg" />
        </swiper-slide>
      </swiper>

      <p class="title">Cultures of earth</p>
      <p>
        Our planet is home to an astonishing diversity of traditions, where each geographical region has shaped unique
        ways of life and social interactions. While Western cultures often place a strong emphasis on individualism
        and rapid technological innovation, many societies in Asia and Africa root their existence around community
        values
        and a deep respect for their ancestors. This cultural richness is reflected in everything around us, from the
        way we communicate to our daily rituals. Here are some of the most fascinating aspects of our global diversity:
      </p>
      <ul>
        <li>Ubuntu Philosophy (Africa): A profound concept that translates to "I am because we are," placing community
          and compassion far above individual success.</li>
        <li>East Asian Collectivism: Cultures such as those in Japan or South Korea, where group harmony (Wa) and
          respect for hierarchy guide daily decisions.</li>
        <li>The Siesta and Socializing Tradition (Mediterranean): A lifestyle centered around slowing down the pace,
          where long lunches and tight-knit community bonds are essential for well-being.</li>
      </ul>

      <p>
        One of the most spectacular ways the cultures of Earth express their identity is through festivals and artistic
        expressions passed down from generation to generation. These events are not merely parties, but true time
        capsules that preserve myths, religious beliefs, and close ties to the cycles of nature. From the bursts of
        color in Asia to the hypnotic rhythms of Latin America, these celebrations demonstrate how art can unite entire
        communities:
      </p>
      <ul>
        <li>Holi Festival (India): Known as the festival of colors, it celebrates the triumph of good over evil and
          the arrival of spring by throwing vibrant colored powders.</li>
        <li>Rio Carnival (Brazil): An incredible fusion of Samba dance and Afro-Brazilian culture, widely considered
          the biggest open-air party on the globe.</li>
        <li>Day of the Dead / Día de los Muertos (Mexico): A lively and colorful celebration where families remember
          and honor deceased relatives, viewing death as a natural part of life.</li>
      </ul>

      <p>
        Last but not least, the way humans adapt to their environment has given rise to highly specific culinary
        cultures
        and lifestyles. Food is not just about nutrition; it represents an art form, a universal language, and a
        testament
        to human ingenuity in the face of varying climates. From nomads on the frozen steppes to isolated island
        communities,
        Earth is a living mosaic of human adaptation:
      </p>
      <ul>
        <li>The Mediterranean Diet: Declared a UNESCO Intangible Cultural Heritage, it is about much more than just
          olives
          and fish—it represents an entire social ritual of preparing and sharing food.</li>
        <li>Tea Culture (Morocco, China, United Kingdom): A simple habit transformed into a complex social ceremony
          that symbolizes hospitality, respect, or diplomacy.</li>
        <li>Nomadic Lifestyle (Mongolia): A culture where life exists in perfect harmony with animals and nature, and
          where moving homes (yurts) is done in accordance with the changing seasons.</li>
      </ul>

      <div class="imageWrapper first"></div>

      <div class="unescoWrapper">
        <div class="text">
          <p class="subtitle">UNESCO</p>
          <p>
            UNESCO, or the United Nations Educational, Scientific and Cultural Organization, is a specialized agency
            dedicated to maintaining global peace and security by fostering international collaboration. Established
            shortly after World War II, this institution helps nations modernize their educational systems, funds
            scientific research, and protects freedom of expression for the press worldwide.
          </p>
          <p>
            For geography and culture enthusiasts, the organization is most famous for its World Heritage preservation
            program, which protects unique historical monuments and natural reserves of inestimable value. From ancient
            temples and historic city centers to fragile natural ecosystems, sites included on this organization's list
            become recognized global treasures, drawing worldwide attention and being saved from destruction for
            generations to come.
          </p>
          <p>
            <a href="https://www.unesco.org/en" target="_blank">
              UNESCO official site
            </a>
          </p>
        </div>
        <div class="unescoImage">

        </div>
      </div>

      <div class="imageWrapper second"></div>


      <p class="subtitle">Local tourism</p>

      <p>
        Local tourism, often referred to as domestic or backyard travel, has experienced a massive resurgence as people
        rediscover the incredible gems hidden right in their own regions. Instead of enduring the stress of long-haul
        flights and complex international border crossings, travelers are choosing to explore nearby towns, state parks,
        and historic landmarks. This shift not only reduces the carbon footprint associated with long-distance travel,
        but it also encourages a deeper connection to one's own heritage, proving that you do not need to cross an ocean
        to find an unforgettable adventure.
      </p>

      <p>
        From an economic perspective, traveling locally acts as a vital lifeline for community growth by keeping
        financial resources within the region. When tourists choose to stay at neighborhood bed-and-breakfasts, dine at
        family-owned diners, and purchase hand-crafted goods from regional artisans, they directly support the
        livelihoods of their neighbors. This sustainable form of travel fosters a sense of community pride and helps
        fund the preservation of regional cultural sites and natural parks that might otherwise be overlooked, ensuring
        these treasures remain vibrant for future generations.
      </p>


      <div class="tipsWrapper">
        <div class="text">
          <p class="subtitle">Travel Tips</p>
          <p>
            Exploring new destinations is one of the most rewarding ways to learn about our planet, but smooth journeys
            require a bit of preparation. Whether you are venturing into a bustling foreign metropolis or discovering a
            hidden gem in your own backyard, keeping a few practical strategies in mind can transform an ordinary trip
            into a seamless and unforgettable adventure.
          </p>

          <ul>
            <li>Research local customs and basic phrases: Learning how to say hello and thank you in the native language
              goes a long way in showing respect to the local community.</li>
            <li>Pack light and versatile clothing: Choosing items that can be layered and mixed easily will save you
              from heavy bags and expensive airline luggage fees.</li>
            <li>Keep digital copies of essential documents: Save photos of your passport, travel insurance, and bookings
              in a secure cloud folder or your email so you can access them even if you lose your phone.</li>
            <li>Notify your bank before leaving: Let your card providers know you are traveling so they do not flag your
              international or long-distance transactions as fraudulent activity.</li>
            <li>Always carry a reusable water bottle and power bank: Staying hydrated and keeping your phone charged for
              maps and emergencies are the two easiest ways to prevent travel stress.</li>
          </ul>

          <p>
            Ultimately, the best travel tip is to remain flexible and open-minded. Delays and unexpected changes are
            often part of the experience, and sometimes the unplanned detours lead to the most meaningful cultural
            discoveries and stories you will share for years to come.
          </p>
        </div>
        <div class="tipsImage">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  height: 450px;
  margin-top: 40px;
}

.sliderImg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: #fff;
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.5));
}

:deep(.swiper-pagination-bullet-active) {
  background: #fff;
}
</style>