<script setup>
import { useRoute } from "vue-router";
import { movies } from "../../api/movies";
import { useProductStore } from "../../Stores/product";
import { onMounted } from "vue";

const route = useRoute();
const movieId = parseInt(route.params.id);
const movie = movies.find((m) => m.id === movieId);

console.log(movie);

const productStore = useProductStore();
onMounted(() => {
  productStore.getProducts();
});
</script>


<template>
  <div class="pageDetailaboutmovie relative bg-black min-h-screen text-white p-8">
    <div class="container mx-auto flex flex-col md:flex-row gap-10 ">
      <!-- Trailer -->
      <div
        class="w-full md:w-[60%] overflow-hidden rounded-2xl border border-gray-700 shadow-2xl"
      >
        <video controls autoplay muted class="w-full aspect-video object-cover">
          <source :src="movie.thriller" type="video/mp4" />
        </video>
      </div>

      <!-- button back -->
      <router-link class="bg-red-500 left-0 top-0 ml-2 mt-2 w-15 h-10 flex items-center justify-center rounded-xl absolute text-center" to="/browse">
       <i class="bi text-white  bi-chevron-left"></i>
      </router-link>

      <!-- Info -->
      <div class="w-full md:w-[40%] flex flex-col gap-4">
        <h1 class="text-4xl font-bold text-red-600">{{ movie.title }}</h1>

        <div class="flex gap-4 items-center text-sm text-gray-400">
          <span class="bg-gray-800 text-sm px-3 py-1 rounded-full">{{
            movie.category
          }}</span>
          <span
            ><i class="bi bi-star-fill text-yellow-500"></i>
            {{ movie.rating }}</span
          >
          <span><i class="bi bi-calendar3"></i> {{ movie.release_date }}</span>
        </div>

        <p class="text-gray-300 leading-relaxed text-lg">
          {{ movie.description }}
        </p>

        <div class="mt-4 border-t border-gray-800 pt-4">
          <p class="text-gray-400">
            Vote Count: <span class="text-white">{{ movie.vote_count }}</span>
          </p>
        </div>

        <button
          class="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
        >
          Play Now
        </button>
      </div>
    </div>
  </div>
  <div class="product-tranding container bg-black pt-5 pb-10 mx-auto">
      <!-- header -->
      <div class="header flex justify-between items-center lg:px-0 px-5 py-5">
        <div class="header-title fontKH text-white lg:text-md text-sm">
          អ្នកអាចនិងចូលចិត្ត
        </div>
        <div class="view-all fontKH">
          <router-link
            to="/browse"
            class="text-white text-sm hover:text-orange-600 transition-all duration-300 ease-in-out"
            >មើលទាំងអស់ <i class="bi bi-chevron-right"></i
          ></router-link>
        </div>
      </div>

      <!-- LIST CARD -->
      <div class="overflow-x-auto scrollbar-none w-full">
        <div class="main-product lg:mt-5 mt-1 px-5 lg:px-0 flex w-max gap-5">
          <div
            v-for="item in productStore.products"
            :key="item.id"
            class="group relative w-40 md:w-56 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-gray-500 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-600"
          >
            <div class="relative aspect-2/3 overflow-hidden">
              <img
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                :src="`https://image.tmdb.org/t/p/w500${item.poster_path}`"
                :alt="item.title"
                loading="lazy"
              />

              <div
                class="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-90"
              ></div>

              <div
                class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-lg backdrop-blur-sm"
                >
                  <svg
                    class="w-6 h-6 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>

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
                  2K
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
</template>



