import { defineStore } from "pinia";
import { movies } from "../api/movies";


export const useMovieStore = defineStore('movie',{
    state:()=>({
        moviesStore: [],
        favorites : []
    }),
    actions:{
        getMovie(){
            this.moviesStore = movies
        },
        toggleFavorite(movie){
            const i = this.favorites.findIndex(item=> item.id === movie.id)


            if (i === -1){
                this.favorites.push(movie)
            }else{
                this.favorites.splice(i, 1)
            }
        },
        isFavorite(id){
            return this.favorites.some(
                movie => movie.id === id
            );
        }

    }
})