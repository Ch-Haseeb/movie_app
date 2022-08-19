<template>
  <div class="movie-detail">
    <!-- {{movie}} -->
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <p> {{ movie.Country}}</p>
    <p>{{ movie.Actors}}</p>
    <img :src="movie.Poster"  />
    <p>{{ movie.Plot }}</p>
  </div>
</template>
<script>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { getdata } from "../services/movieapi";
// import env from "@/env.js";
export default {
  setup() {
    const movie = ref({});
    const route = useRoute();
    onBeforeMount(() => {
        getdata(route.params.id)
    //   fetch(
    //     `http://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`
    //   )
        .then((response) => response.json())
        .then((data) => {
          movie.value = data;

        });
    });
    return {
      movie,
    };
  },
};
</script>