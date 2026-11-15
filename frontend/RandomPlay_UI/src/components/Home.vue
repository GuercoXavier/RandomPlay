<template>
  <Header />
  <SearchBar />
  <Movies
    :filmes="filmes_em_destaque"
    :seccao="secc_destaque"
    :onMostrarFilme="esseFilme"
  />
  <Movies
    :filmes="filmes_random"
    :seccao="secc_randomPlay"
    :onMostrarFilme="esseFilme"
  />
  <Movies :filmes="filmes" :seccao="secc_todos" :onMostrarFilme="esseFilme" />
  <Footer />
</template>

<script setup>
import Header from "./Header.vue";
import Movies from "./movies.vue";
import SearchBar from "./SearchBar.vue";
import FilmeDetalhes from "./FilmeDetalhes.vue";
import Footer from "./Footer.vue";
import imgSrc from "../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp";
import { filmes } from "../dados/filmes.js";
// imprts do vue
import { ref, computed, watch } from "vue";

const secc_destaque = "Destaques"; // define a seccao de filmes recomendados
const secc_randomPlay = "Random Play"; // define a seccao especial Random Play
const secc_todos = "Todos Filmes"; // define a seccao de todos os filmes

function esseFilme(id) {
  window.location.hash = `#/detalhes/${id}`;
}
// lista de filmes recomendados
// dividimos por 100 porque a classificacao da API eh na escala de 0-100
const filmes_em_destaque = computed(() =>
  filmes.value.filter((f) => f.classificacao >= 8),
);

function escolherAleatorios(lista, quantidade, minCategorias) {
  if (lista.length <= quantidade) {
    return baralhar(lista.slice());
  }

  const grupos = {};

  for (let i = 0; i < lista.length; i++) {
    const filme = lista[i];
    const categoria = filme.categoria;

    if (grupos[categoria] === undefined) {
      grupos[categoria] = [];
    }
    grupos[categoria].push(filme);
  }

  const categorias = Object.keys(grupos);

  if (categorias.length < minCategorias) {
    return baralhar(lista.slice()).slice(0, quantidade);
  }

  const categoriasBaralhadas = baralhar(categorias.slice());
  const categoriasEscolhidas = categoriasBaralhadas.slice(0, minCategorias);

  const escolhidos = [];

  for (let i = 0; i < categoriasEscolhidas.length; i++) {
    const categoria = categoriasEscolhidas[i];
    const filmesDessa = grupos[categoria];
    const indice = Math.floor(Math.random() * filmesDessa.length);

    escolhidos.push(filmesDessa[indice]);
  }

  const idsUsados = {};

  for (let i = 0; i < escolhidos.length; i++) {
    idsUsados[escolhidos[i].id] = true;
  }

  const restantes = [];

  for (let i = 0; i < lista.length; i++) {
    const filme = lista[i];
    if (idsUsados[filme.id] !== true) {
      restantes.push(filme);
    }
  }

  const restantesBaralhados = baralhar(restantes);

  let posicao = 0;
  while (
    escolhidos.length < quantidade &&
    posicao < restantesBaralhados.length
  ) {
    escolhidos.push(restantesBaralhados[posicao]);
    posicao = posicao + 1;
  }

  return baralhar(escolhidos);
}

function baralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // escolhe um indice qualquer entre 0 e i
    const j = Math.floor(Math.random() * (i + 1));

    // troca os elementos nas posições i e j
    const temporario = array[i];
    array[i] = array[j];
    array[j] = temporario;
  }
  return array;
}

const filmes_random = ref([]);

watch(
  filmes,
  function (lista) {
    filmes_random.value = escolherAleatorios(lista, 6, 3);
  },
  { immediate: true },
);
</script>
