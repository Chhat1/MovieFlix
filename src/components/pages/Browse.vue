<script setup>
import { onMounted } from "vue";
import { useProductStore } from "../../Stores/product";

const productStore = useProductStore();
onMounted(() => {
  productStore.getProducts();
});
</script>

<template>
  <div class="browse-page bg-black">
    <div class="header-title  text-start lg:px-30 px-5 pt-10">
        <h1 class="text-white fontKH">រឿងទាំងអស់</h1>
    </div>
    <div class="container mx-auto lg:py-10 lg:px-0 px-5 py-10 flex flex-wrap justify-between">
      <div v-for="item in productStore.products" :key="item.id"
        class="group mb-5 relative w-45 md:w-56 shrink-0 rounded-2xl overflow-hidden cursor-pointer bg-slate-900 border border-gray-500 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-600"
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
              2K
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.fontKH {
  font-family: khmer OS battambang;
}
</style>