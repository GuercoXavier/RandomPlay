<template>
  <!-- <div id="home">
    <Header />
    <SearchBar />
    <Movies
      :filmes="filmes_em_destaque"
      :seccao="secc_destaque"
      :onMostrarFilme="esseFilme"
    />
    <Movies :filmes="filmes" :seccao="secc_randomPlay" />
    <Movies :filmes="filmes" :seccao="secc_todos" />
  </div> -->
  <a href="#/"><Home /></a> | <a href="#/detalhes"> <FilmeDetalhes /></a> |
  <component :is="pagina_actual" />
  <!-- <div id="filme-componente">
    <FilmeDetalhes :filme="filme_com_detalhe" />
  </div> -->
</template>

<script setup>
// imports locais
import Home from "./components/Home.vue";
import Header from "./components/Header.vue";
import Movies from "./components/movies.vue";
import SearchBar from "./components/SearchBar.vue";
import FilmeDetalhes from "./components/FilmeDetalhes.vue";
import imgSrc from "./assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp";

// imprts do vue
// import { ref } from "vue";
import { ref, computed } from "vue";

const rotas = {
  "/": Home,
  "/detalhes": FilmeDetalhes,
};

const caminhoa_actual = ref(window.location.hash);

window.addEventListener("hashchange", () => {
  caminhoa_actual.value = window.location.hash;
});

const pagina_actual = computed(() => {
  return rotas[caminhoa_actual.value.slice(1) || "/"];
});

// const filme_com_detalhe = ref(filmes.value.at(0)).value;
// console.log(filme_com_detalhe);
// NOTA(pessoal): quando usamos 'ref' para poder aceder ao elemento real devemos usar o value
</script>
