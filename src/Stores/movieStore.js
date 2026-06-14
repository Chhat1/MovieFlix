import { defineStore } from "pinia";
import { movies } from "../api/movies";


export const useMovieStore = defineStore('movie',{
    state:()=>({
        moviesStore: []
    }),
    actions:{
        getMovie(){
            this.moviesStore = movies
        }
    }
})