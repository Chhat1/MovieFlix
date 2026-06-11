<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-900 p-4">
    <div class="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 text-center border border-white/10">
      
      <!-- Icon Success -->
      <div class="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-500/20 mb-6">
        <svg class="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
        </svg>
      </div>

      <!-- Text Content -->
      <h2 class="text-2xl font-bold text-white mb-2">ការទូទាត់ជោគជ័យ!</h2>
      <p class="text-gray-400 mb-8">
        សូមអរគុណសម្រាប់ការទិញរបស់អ្នក។ ប្រតិបត្តិការរបស់អ្នកត្រូវបានបញ្ចប់ដោយសុវត្ថិភាព។
      </p>

      <!-- Action Button -->
      <router-link 
        to="/browse" 
        class="block w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition-colors"
      >
        ត្រឡប់ទៅកាន់ទំព័រដើម
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>