<script setup>
</script>

<template>
  <footer class="footer bg-slate-900 border-t border-t-slate-700 border-b border-b-slate-700">
    <div class="container mx-auto lg:px-0 lg:py-10 px-5 py-10 flex justify-between">
      <div>
        <!-- logo -->
        <div
          class="logo lg:text-xl text-sm font-bold bg-linear-to-r from-red-500 to-orange-600 bg-clip-text text-transparent mb-4"
        >
          <i class="bi bi-film"></i>
          MovieFlix
        </div>
        <!-- text -->
        <p class="text-gray-400 text-base lg:block hidden">Your ultimate destination for streaming the best movies and shows.</p>
      </div>
      <div class="Navigation">
        <h1 class="text-white font-bold lg:mb-4 mb-1 lg:text-base text-[10px]">Navigation</h1>
        <ul class="text-gray-400">
            <li class="lg:text-sm text-[10px]">Home</li>
            <li class="lg:text-sm text-[10px]">Browse</li>
            <li class="lg:text-sm text-[10px]">My List</li>
        </ul>
      </div>
      <div class="Categories">
        <h1 class="text-white font-bold lg:mb-4 mb-1 lg:text-base text-[10px]">Categories</h1>
        <ul class="text-gray-400">
            <li class="lg:text-sm text-[10px]">Action</li>
            <li class="lg:text-sm text-[10px]">Sci-Fi</li>
            <li class="lg:text-sm text-[10px]">Drama</li>
            <li class="lg:text-sm text-[10px]">Comedy</li>
        </ul>
      </div>
      <div class="Follow-Us">
        <h1 class="text-white font-bold lg:mb-4 mb-1 lg:text-base text-[10px]">Follow Us</h1>
        <div class="icons-media flex lg:gap-5 gap-1">
            <i class="bi text-sm text-red-600 bi-instagram"></i>
            <i class="bi text-sm text-blue-500 bi-facebook "></i>
            <i class="bi text-sm text-blue-300 bi-telegram"></i>
        </div>
      </div>
    </div>
    <div class="flex justify-center py-5 border-t border-t-slate-700">
        <h1 class="text-gray-400 text-sm">© 2026 MovieFlix. All rights reserved.</h1>
    </div>
  </footer>
</template>
