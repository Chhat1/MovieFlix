<script setup>
import { ref} from "vue";
import { movies } from "../../api/movies";
import { useMovieStore } from "../../Stores/movieStore";

const countFavorite = useMovieStore()

const isOpen = ref(false);

const openSidebar = () => {
  isOpen.value = !isOpen.value;
};


</script>

<template>
  <header class="bg-black sticky top-0 z-100 border-b border-b-gray-900">
    <nav
      class="container mx-auto navbar flex justify-between items-center py-5 lg:px-0 px-5"
    >
      <!-- logo -->
      <div
        class="logo text-xl font-bold bg-linear-to-r from-red-500 to-orange-600 bg-clip-text text-transparent"
      >
        <i class="bi bi-film"></i>
        MovieFlix
      </div>

      <!-- menu links -->
      <div class="menu lg:block hidden">
        <ul class="menu-links flex gap-5">
          <li>
            <router-link v-slot="{isActive}"
              to="/"
              >
              <span :class="[
                'pb-2 border-b-2 transition-all duration-300',
                isActive
                ? 'border-red-500 text-red-500' : 'border-transparent text-white'
              ]">

                <i class="bi bi-house"></i> ទំព័រដើម

              </span>
              
              </router-link>
          </li>

          <li>
            <router-link
              v-slot="{isActive}"
              to="/browse"
            >
              <span :class="[
              'pb-2 border-b-2 transition-all duration-300',
              isActive ? 'border-red-500 text-red-500' : 'border-transparent text-white'
              ]">
                <i class="bi bi-view-list"></i> មើលរឿង 
              </span>
              
              </router-link>
          </li>
          <li>
            <router-link
              v-slot="{isActive}"
              to="/mylist"
              >
              <span :class="[
                'pb-2 border-b-2 transition-all duration-300',
                isActive ? 'border-red-500 text-red-500' : 'border-transparent text-white'
              ]">
                <i class="bi bi-heart"></i> ចូលចិត្ត
              </span>
             
              </router-link
            >
            
          </li>
        </ul>
      </div>

      <!-- search box -->
      <div class="search relative lg:block hidden">
        <input
          class="w-full py-1 px-3 pr-10 rounded-md border border-gray-400 outline-none text-orange-600 placeholder:text-gray-500 focus:border-orange-600"
          type="search"
          placeholder="Search movies..."
        />

        <router-link
          class="absolute right-3 top-1/2 -translate-y-1/2 text-orange-600 cursor-pointer"
          to=""
        >
          <i class="bi bi-search"></i>
        </router-link>
      </div>

      <!-- menu mobile -->
      <div class="lg:hidden">
        <button v-if="isOpen" class="cursor-pointer" @click="openSidebar">
          <i class="bi text-2xl text-white bi-x-lg"></i>
        </button>
        <button v-else class="cursor-pointer" @click="openSidebar">
          <i class="bi text-2xl text-white bi-list"></i>
        </button>
      </div>
    </nav>
  </header>

 

<!-- Sidebar -->
<div
  :class="isOpen ? 'h-54' : 'h-0'"
  class="overflow-hidden transition-all ease-in-out duration-500 bg-zinc-900 border-t border-zinc-800 shadow-lg"
>
  <ul class="flex flex-col  p-4 gap-3">

    <li>
      <router-link
        to="/"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-orange-600 hover:text-white transition-all duration-300"
      >
        <i class="bi bi-house-door-fill text-lg"></i>
        <span>Home</span>
      </router-link>
    </li>

    <li>
      <router-link
        to="/browse"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-orange-600 hover:text-white transition-all duration-300"
      >
        <i class="bi bi-film text-lg"></i>
        <span>Browse</span>
      </router-link>
    </li>

    <li>
      <router-link
        to="/mylist"
        class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-orange-600 hover:text-white transition-all duration-300"
      >
        <i class="bi bi-heart-fill text-lg"></i>
        <span>My List</span>
      </router-link>
    </li>

  </ul>
</div>
  


</template>

<style scoped>
.link {
  font-family: khmer OS battambang;
}
</style>