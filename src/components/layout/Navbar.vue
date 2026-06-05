<script setup>
import { ref } from "vue";

const isOpen = ref(false);

const openSidebar = () => {
  isOpen.value = !isOpen.value;
};
</script>

<template>
  <header class="bg-black sticky top-0 z-50 border-b border-b-gray-900">
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
            <router-link
              class="link text-gray-300 text-sm transition-all duration-300 hover:text-orange-600 cursor-pointer"
              to="/"
              ><i class="bi bi-house"></i> ទំព័រដើម</router-link
            >
          </li>
          <li>
            <router-link
              class="link text-gray-300 text-sm transition-all duration-300 hover:text-orange-600 cursor-pointer"
              to="/browse"
            >
              <i class="bi bi-view-list"></i> មើលរឿង</router-link
            >
          </li>
          <li>
            <router-link
              class="link text-gray-300 text-sm transition-all duration-300 hover:text-orange-600 cursor-pointer"
              to="/mylist"
              ><i class="bi bi-heart"></i> ចូលចិត្ត</router-link
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
        <button class="cursor-pointer" @click="openSidebar">
          <i class="bi text-2xl text-white bi-list"></i>
        </button>
      </div>
    </nav>
  </header>

  <!-- sidebar -->
  <div v-if="isOpen" class="h-45 border-b border-b-slate-900 transition-all ease-in-out bg-black px-2 py-3">
    <!-- search box -->
    <div class="search relative lg:hidden mb-4">
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
    <div class="menu flex justify-end">
      <ul class="menu-links flex-column  gap-5">
        <li class="mb-3">
          <router-link
            class="link text-gray-300 text-sm transition-all duration-300 hover:text-orange-600 cursor-pointer"
            to="/"
            ><i class="bi bi-house"></i> ទំព័រដើម</router-link
          >
        </li>
        <li class="mb-3">
          <router-link
            class="link text-gray-300 text-sm transition-all duration-300 hover:text-orange-600 cursor-pointer"
            to="/browse"
          >
            <i class="bi bi-view-list"></i> មើលរឿង</router-link
          >
        </li>
        <li>
          <router-link
            class="link text-gray-300 text-sm transition-all duration-300 hover:text-orange-600 cursor-pointer"
            to="/mylist"
            ><i class="bi bi-heart"></i> ចូលចិត្ត</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.link {
  font-family: khmer OS battambang;
}
</style>