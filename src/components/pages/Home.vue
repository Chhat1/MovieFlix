<script setup>
import {ref } from "vue";
import { movies } from "../../api/movies";

const currentSlide = ref(0);

const slides = [
  {
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba",
    title: "Deadpool & Wolverine",
  },
  {
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c",
    title: "Avatar",
  },
  {
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1",
    title: "John Wick",
  },
];

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.length) % slides.length;
};





</script>


<template>
  <div class="home bg-black h-auto">
    <!-- Banner -->
    <section class="relative w-full h-125 lg:h-162.5 overflow-hidden">
      <!-- Background Image -->
      <img
        :src="slides[currentSlide].image"
        class="absolute inset-0 w-full h-full object-cover"
      />

      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-linear-to-r from-black via-black/70 to-transparent"
      ></div>

      <!-- Content -->
      <div
        class="relative z-10 container mx-auto h-full flex items-center px-6 lg:px-12"
      >
        <div class="max-w-2xl">
          <!-- Tag -->
          <span
            class="inline-block fontKH bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-medium"
          >
            <i class="bi text-yellow-500 bi-fire"></i>កំពុងពេញនិយមឥឡូវនេះ
          </span>

          <!-- Title -->
          <h1
            class="text-white text-4xl md:text-6xl font-bold mt-4 leading-tight"
          >
            Deadpool & Wolverine
          </h1>

          <!-- Description -->
          <p
            class="text-gray-300 text-sm md:text-lg mt-4 leading-relaxed fontKH"
          >
            ទទួលបទពិសោធន៍ភាពយន្តបែប action ដ៏ថ្មីបំផុត ដែលមានទស្សនីយភាពអស្ចារ្យ
            ការប្រយុទ្ធដ៏អស្ចារ្យ និងដំណើរផ្សងព្រេងដែលមិនអាចបំភ្លេចបាន
          </p>

          <!-- Movie Info -->
          <div class="flex items-center gap-4 mt-5 text-gray-300 text-sm">
            <span><i class="bi bi-star-fill text-yellow-500"></i> 8.9/10</span>
            <span>2026</span>
            <span>Action</span>
            <span>2h 15m</span>
          </div>

          <!-- Buttons -->
          <div class="flex gap-4 mt-8">
            <router-link
              to="/browse"
              class="bg-orange-600 cursor-pointer fontKH hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              <i class="bi bi-caret-right-fill"></i> មើលឥឡូវនេះ
            </router-link>

            <router-link
              to="/details"
              class="border cursor-pointer fontKH border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-medium transition"
            >
              <i class="bi bi-info-circle"></i> លម្អិត
            </router-link>
          </div>
        </div>
      </div>

      <!-- Navigation -->
      <button
        @click="prevSlide"
        class="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition z-20"
      >
        <i class="bi bi-chevron-left"></i>
      </button>

      <button
        @click="nextSlide"
        class="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center transition z-20"
      >
        <i class="bi bi-chevron-right"></i>
      </button>
    </section>

    <!-- card-movie -->
    <div class="product-tranding container pt-5 pb-10 mx-auto">
      <!-- header -->
      <div class="header flex justify-between items-center lg:px-0 px-5 py-5">
        <div class="header-title text-white lg:text-lg text-sm">រឿង Anime</div>
        <div class="view-all">
          <router-link
            to="/browse"
            class="text-white lg:text-lg text-sm hover:text-orange-600 transition-all duration-300 ease-in-out"
          >
            <i class="bi bi-chevron-right"></i
          ></router-link>
        </div>
      </div>

      <!-- MOVIE card -->
      <div
        class="container mx-auto lg:py-5 lg:px-0 px-5  flex flex-wrap py-10 justify-between "
      >
        <div
          v-for="item in movies.slice(0,4)"
          :key="item.id"
          class="group relative lg:w-[23%] md:w-[48%] w-[48%] shrink-0  rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-gray-700 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-600 mb-5"
        >

        <!-- add movie -->
        <div class="bg-linear backdrop-blur-2xl  bg-white/30 w-10 h-10 absolute top-2 inset-e-2  rounded-full flex justify-center items-center">
          <i @click="addFavorite" class="bi   text-lg bi-heart pt-2 text-white"></i>
        </div>

        
          <!-- IMAGE -->
          <div class="relative aspect-2/3 overflow-hidden">
            <img
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              :src="item.image"
              :alt="item.title"
              loading="lazy"
            />

           

            <!-- overlay -->
            <div
              class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90"
            ></div>

            <!-- play button -->
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
            

              <router-link
                class="absolute text-white bg-red-600 px-5 py-2 rounded text-sm"
                :to="`/details/${item.id}`"
              >
                <svg
                  class="w-6 h-6 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </router-link>
            </div>
          </div>

          <!-- INFO -->
          <div class="p-4">
            <h1
              class="text-white font-bold text-sm md:text-base truncate fontKH"
            >
              {{ item.title }}
            </h1>

            <div class="flex items-center justify-between mt-2">
              <p class="text-xs text-gray-400 fontKH">
                <i class="bi bi-calendar3"></i> {{ item.release_date }}
              </p>

              <span
                class="text-[10px] bg-orange-600 text-white px-2 py-0.5 rounded-full font-medium"
              >
                {{ item.rating }}
                <i class="bi bi-star-fill text-yellow-500"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
