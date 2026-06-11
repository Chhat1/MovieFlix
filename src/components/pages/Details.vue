<script setup>
import { useRoute, useRouter } from "vue-router";
import { movies } from "../../api/movies";
import { useProductStore } from "../../Stores/product";
import { onMounted, ref } from "vue";

const route = useRoute();
const router = useRouter();
const movieId = parseInt(route.params.id);
const movie = movies.find((m) => m.id === movieId);

console.log(movie);

const productStore = useProductStore();
onMounted(() => {
  productStore.getProducts();
});

const isLoading = ref(false)

const handlePay = () =>{

  isLoading.value = true;

  setTimeout(()=>{
    isLoading.value = false;
    router.push('/success')
  },2000)
}

</script>


<template>
  <div
    class="pageDetailaboutmovie relative bg-black w-full min-h-screen text-white lg:pt-20"
  >
    <div class="lg:container lg:mx-auto lg:flex flex-col md:flex-row gap-10">
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
            Vote Count:
            <span class="text-white">{{ movie.vote_count }} Votes</span>
          </p>
        </div>

        <!-- button buy -->
        <button
          command="show-modal"
          commandfor="dialog"
          class="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 cursor-pointer"
        >
          ទិញរឿង
        </button>
      </div>
    </div>
  </div>
  <!-- Modal payment -->
  <el-dialog>
    <dialog
      id="dialog"
      aria-labelledby="dialog-title"
      class="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
    >
      <el-dialog-backdrop
        class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      ></el-dialog-backdrop>

      <div
        tabindex="0"
        class="flex min-h-full items-center justify-center p-4 text-center focus:outline-none"
      >
        <el-dialog-panel
          class="relative transform overflow-hidden rounded-2xl bg-gray-800 text-left shadow-2xl outline-1 outline-white/10 transition-all sm:w-full sm:max-w-sm"
        >
          <div class="px-6 pt-6 pb-2 text-center">
            <p class="text-red-400 text-xs uppercase tracking-wider font-bold">
              Price
            </p>
            <h3 id="dialog-title" class="text-3xl font-bold text-white mt-1">
              ៤,០០០៛
            </h3>
          </div>

          <div class="px-6 py-4 flex justify-center">
            <div class="w-48 h-48 bg-white p-2 rounded-lg shadow-inner">
              <img
                class="w-full h-full object-contain"
                src="/images/qr.png"
                alt="Payment QR Code"
              />
            </div>
          </div>

          <div class="px-6 pb-6">
            <div
              class="bg-red-950/30 border border-red-500/20 rounded-lg p-3 text-center"
            >
              <p class="text-xs text-red-200 leading-relaxed">
                <strong>បញ្ជាក់៖</strong> ការទូទាត់រួចរាល់ មិនអាចដកលុយវិញបានទេ
              </p>
            </div>

            <div class="mt-6 flex flex-col gap-3">
              <div>
                <button @click="handlePay"
                  class="w-full flex gap-2 justify-center rounded-lg bg-red-500 px-4 py-3 text-sm font-semibold text-white hover:bg-red-600 transition-colors cursor-pointer"
                >
                  {{ isLoading ? 'Loading ' : 'បង់ប្រាក់ឥឡូវនេះ' }}
                  <img v-if="isLoading" class="w-5 h-5" src="/images/isLoading.gif" alt="">
                </button>
                
                

              </div>

              <button
                type="button"
                command="close"
                commandfor="dialog"
                class="w-full justify-center rounded-lg bg-white/5 px-4 py-3 text-sm font-semibold text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"
              >
                បោះបង់
              </button>
            </div>
          </div>
        </el-dialog-panel>
      </div>
    </dialog>
  </el-dialog>
</template>



