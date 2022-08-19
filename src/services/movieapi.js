import env from '@/env.js'
// import { useRoute } from "vue-router";
export function movieapi(params){
    console.log('hello')
    return fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${params.value}`)
}
export function getdata(id){
    console.log('hello')
    return fetch(

        `http://www.omdbapi.com/?apikey=${env.apikey}&i=${id}&plot=full`
      )
}