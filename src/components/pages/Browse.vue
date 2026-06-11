<script setup>
import { computed, ref } from "vue";
import { movies } from "../../api/movies";


// selected category
const selectedCategory = ref("All");

// categories (auto generate)
const categories = computed(() => [
  "All",
  ...new Set(movies.map((m) => m.category)),
]);

// filtered movies
const filterMovie = computed(() => {
  if (selectedCategory.value === "All") {
    return movies;
  }
  return movies.filter(
    (movie) => movie.category === selectedCategory.value
  );
});




</script>

<template>
  <div class="browse-page bg-black min-h-screen">

    <!-- TITLE -->
    <div class="header-title text-start lg:px-35 lg:py-5 px-5 pt-10">
      <h1 class="text-white fontKH text-sm lg:text-md">រឿងទាំងអស់</h1>
    </div>


  
      
    <!-- FILTER SECTION -->
    <div class="filter-category container mx-auto pt-6 px-5  overflow-scroll scrollbar-none lg:py-0 py-5">
      <div class="lg:flex lg:gap-2 lg:flex-wrap flex w-max gap-4 ">
        <button
        class="cursor-pointer"
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-4 py-2 border rounded transition',
            selectedCategory === cat
              ? 'bg-orange-600 text-white border-orange-600'
              : 'text-white border-gray-500 hover:border-orange-500'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </div>

      


    

    <!-- MOVIE GRID -->
    <div
      class="container mx-auto lg:py-10 px-5 flex flex-wrap py-10 justify-between"
    >
      <div
        v-for="item in filterMovie"
        :key="item.id"
        class="group relative lg:w-[23%] md:w-[48%] w-[48%]   shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-gray-700 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-600 mb-5"
      >
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
            <!-- <router-link :to="`/details/${item.id}`"
              class="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center shadow-lg"
            >
              <svg
                class="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </router-link> -->


            <router-link class="absolute  text-white bg-red-600 px-5 py-2 rounded text-sm" :to="`/details/${item.id}`">
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
          <h1 class="text-white font-bold text-sm md:text-base truncate fontKH">
            {{ item.title }}
          </h1>

          <div class="flex items-center justify-between mt-2">
            <p class="text-xs text-gray-400 fontKH">
              <i class="bi bi-calendar3"></i> {{ item.release_date }}
            </p>

            <span
              class="text-[10px] bg-orange-600 text-white px-2 py-0.5 rounded-full font-medium"
            >
              {{ item.rating }} <i class="bi bi-star-fill text-yellow-500"></i>
            </span>
            
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>