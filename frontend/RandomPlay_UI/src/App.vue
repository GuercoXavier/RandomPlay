<template>
  <Header />
  <SearchBar />
  <Movies :filmes="filmes"/>
  <Movies />
</template>

<script setup>
import Header from "./components/Header.vue";
import Movies from "./components/movies.vue";
import SearchBar from "./components/SearchBar.vue";

import imgSrc from './assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp';

import { ref } from "vue";

const filmes = ref([
  {
    id: 1,
    titulo:"Spleepwaker's confession",
    caminho: imgSrc,
    categoria: "Action",
    classificacao: 9,
  },
  {
    id: 2,
    titulo:"Their secret story",
    caminho: imgSrc,
    categoria: "Action",
    classificacao: 6,
  },
  {
    id: 3,
    titulo:"Our journy to the sky",
    caminho: imgSrc,
    categoria: "Fiction",
    classificacao: 10,
  },
  {
    id: 4,
    titulo:"Virtual revenge",
    caminho: imgSrc,
    categoria: "Fiction",
    classificacao: 9,
  },
  {
    id: 5,
    titulo:"Hole in Mole",
    caminho: imgSrc,
    categoria: "Fiction",
    classificacao: 5,
  },
  {
    id: 6,
    titulo:"The long Goodbye",
    caminho: imgSrc,
    categoria: "Romance",
    classificacao: 4,
  },
  {
    id: 7,
    titulo:"Bury the tears with the past",
    caminho: imgSrc,
    categoria: "Romance",
    classificacao: 8,
  },
  {
    id: 8,
    titulo:"New Eridan Sunset",
    caminho: imgSrc,
    categoria: "Romance",
    classificacao: 10,
  },
]);

</script>
