<template>
  <Header />
  <SearchBar />
  <Movies
    :filmes="filmes_em_destaque"
    :seccao="secc_destaque"
    :onMostrarFilme="esseFilme"
  />
  <Movies :filmes="filmes" :seccao="secc_randomPlay" />
  <Movies :filmes="filmes" :seccao="secc_todos" />
  <Footer />
</template>

<script setup>
import Header from "./Header.vue";
import Movies from "./movies.vue";
import SearchBar from "./SearchBar.vue";
import FilmeDetalhes from "./FilmeDetalhes.vue";
import Footer from "./Footer.vue";
import imgSrc from "../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp";

// imprts do vue
import { ref } from "vue";

const secc_destaque = "Destaques"; // define a seccao de filmes recomendados
const secc_randomPlay = "Random Play"; // define a seccao especial Random Play
const secc_todos = "Todos Filmes"; // define a seccao de todos os filmes

// objecto que define o formato de dados de um filme
// const filme = {
//   id: 0,
//   titulo: "",
//   categoria: "",
//   descricao: "",
//   classificacao: 0,
//   ano: 0,
//   caminho: "",
// };

// lista que contem filmes e uso de 'ref' para
// que a actualizacao da lista seja logo visivel na pagina
const filmes = ref([
  {
    id: 1,
    titulo: "Spleepwaker's confession",
    caminho: imgSrc,
    categoria: "Action",
    classificacao: 9,
  },
  {
    id: 2,
    titulo: "Their secret story",
    caminho: imgSrc,
    categoria: "Action",
    classificacao: 6,
  },
  {
    id: 3,
    titulo: "Our journy to the sky",
    caminho: imgSrc,
    categoria: "Fiction",
    classificacao: 10,
  },
  {
    id: 4,
    titulo: "Virtual revenge",
    caminho: imgSrc,
    categoria: "Fiction",
    classificacao: 9,
  },
  {
    id: 5,
    titulo: "Hole in Mole",
    caminho: imgSrc,
    categoria: "Fiction",
    classificacao: 5,
  },
  {
    id: 6,
    titulo: "The long Goodbye",
    caminho: imgSrc,
    categoria: "Romance",
    classificacao: 4,
  },
  {
    id: 7,
    titulo: "Bury the tears with the past",
    caminho: imgSrc,
    categoria: "Romance",
    classificacao: 8,
  },
  {
    id: 8,
    titulo: "New Eridan Sunset",
    caminho: imgSrc,
    categoria: "Romance",
    classificacao: 10,
  },
]);

function esseFilme() {
  const ver_filme = document.getElementById("filme-componente");

  ver_filme.style.display = "block";
}

const filme_com_detalhe = ref(filmes.value.at(0)).value;
console.log(filme_com_detalhe);
// NOTA(pessoal): quando usamos 'ref' para poder aceder ao elemento real devemos usar o value

// lista de filmes recomendados
const filmes_em_destaque = ref(
  filmes.value.filter((filme) => filme.classificacao >= 7),
);
</script>
