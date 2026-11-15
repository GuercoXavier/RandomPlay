<template>
  <!-- <a href="#/"><Home /></a> | <a href="#/detalhes"> <FilmeDetalhes /></a> |
  <component :is="pagina_actual" /> -->
  <component v-if="pagina_actual" :is="pagina_actual" v-bind="pagina_props" />
  <component v-else :is="pagina_actual" v-bind="props_pagina" />
</template>

<script setup>
// imports locais
import Home from "./components/Home.vue";
import FilmeDetalhes from "./components/FilmeDetalhes.vue";
import { filmes, carregarFilmes } from "./dados/filmes.js";

// imprts do vue
import { ref, computed } from "vue";
import { onMounted } from "vue";

const caminho_actual = ref(window.location.hash || "#/");

window.addEventListener("hashchange", () => {
  caminho_actual.value = window.location.hash || "#/";
});

// remove "#" e fica com algo tipo "/detalhes/3"
const caminho_limpo = computed(
  () => caminho_actual.value.replace(/^#/, "") || "/",
);

const pagina_actual = computed(() => {
  if (caminho_limpo.value.startsWith("/detalhes")) return FilmeDetalhes;
  return Home;
});

// para atributos com 'ref' para poder aceder ao elemento real devemos usar o value
const pagina_props = computed(() => {
  if (caminho_limpo.value.startsWith("/detalhes")) {
    const id = caminho_limpo.value.split("/")[2];
    const filme = filmes.value.find((f) => f.id === id) || filmes[0];
    return { filme };
  }
  return {};
});

onMounted(() => {
  carregarFilmes();
});
</script>
