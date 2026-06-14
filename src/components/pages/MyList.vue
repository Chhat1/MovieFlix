<script setup>
import { useMovieStore } from "../../Stores/movieStore";

const favoriteStore = useMovieStore();
</script>


<template>
  <div class="pageListMoive bg-black h-auto">
    <div class="container mx-auto lg:px-0 px-5">
      <div v-if="favoriteStore.favorites.length !== 0" class="header-title pt-15">
        <h1 class="text-white lg:text-md text-sm">រឿងដែលចូលចិត្ត</h1>
      </div>

      <div>
        <!-- Empty Message -->
        <div
          v-if="favoriteStore.favorites.length === 0"
          class="flex justify-center items-center h-100"
        >
          <div
            class="text-white bg-slate-800 border border-slate-600 rounded-xl px-10 py-8"
          >
            មិនមានរឿងដែលបានចូលចិត្ត
          </div>
        </div>

        <!-- MOVIE card -->
        <div v-else class="flex mt-5 justify-between flex-wrap">
          <div
            v-for="item in favoriteStore.favorites"
            :key="item.id"
            class="group relative lg:w-[23%] md:w-[48%] w-[48%] shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-gray-700 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-600 mb-5"
          >
            <!-- add movie -->
            <button
              @click="favoriteStore.toggleFavorite(item)"
              class="bg-linear backdrop-blur-2xl bg-white/20 w-10 h-10 absolute top-2 inset-e-2 z-50 rounded-full cursor-pointer flex justify-center items-center"
            >
              <i
                :class="
                  favoriteStore.isFavorite(item.id)
                    ? 'bi-heart-fill text-red-500'
                    : 'bi-heart text-white'
                "
                class="bim text-lg bi-heart-fill pt-2"
              ></i>
            </button>

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
  </div>
</template>



