import axios from "axios";
import { defineStore } from "pinia";


export const useProductStore = defineStore('product',{
    state:()=>({
        products: []
    }),
    actions:{
        async getProducts(){
            const API_KEY = "b229b50521bfc8f624be2b091c0b2dc3";
            try {
                const res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc`)
                this.products =  res.data.results
                console.log(res.data);
                
            } catch(err) {
                console.error("Error",err)
            }
        }
    }
})

