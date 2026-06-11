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
  <div class="pageDetailaboutmovie relative bg-black w-full min-h-screen text-white lg:pt-20">
    <div class="lg:container  lg:mx-auto lg:flex flex-col md:flex-row gap-10 ">
      <!-- Trailer -->
      <div
        class="lg:w-full w-full overflow-hidden lg:rounded-2xl rounded-none border border-gray-700 shadow-2xl"
      >
        <video controls autoplay muted class="w-full aspect-video object-cover">
          <source :src="movie.thriller" type="video/mp4" />
        </video>
      </div>

      <!-- button back -->
      <!-- <router-link class="bg-red-500 left-0 top-0 ml-2 mt-2 lg:w-15 w-10 h-5 lg:h-10 flex items-center justify-center lg:rounded-xl rounded-md absolute text-center" to="/browse">
       <p class="lg:text-base text-[10px]">Back</p>
      </router-link> -->

      <!-- Info -->
      <div class="w-full md:w-[40%] flex flex-col gap-4 px-5 pt-5">
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
            Vote Count: <span class="text-white">{{ movie.vote_count }} Votes</span>
          </p>
        </div>

        <!-- button buy -->
        <button
          class="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
        >
          ទិញរឿង
        </button>
      </div>
    </div>

  </div>

  
     
</template>



