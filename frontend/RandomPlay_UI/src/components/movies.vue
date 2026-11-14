<!-- componente responsavel por mostrar lista de filmes -->
<template>
  <div id="filmes-container">
    <p id="categoria"></p>
    <div id="filmes">
      <!-- estes divs sao hardcodeds so para testes visuais -->
      <div id="filme" v-for="filme in filmes" :key="filme.id">
        <!-- TODO: falta v-for  -->
        <img :src="filme.caminho" alt="Sem Imagem" />
        <p id="titulo-filme">{{ filme.titulo }}</p>
      </div>

      <!-- <div id="filme">
        <img
          src="../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp"
          alt="Sem Imagem"
        />
        <p id="titulo-filme">nome do filme</p>
      </div>

      <div id="filme">
        <img
          src="../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp"
          alt="Sem Imagem"
        />
        <p id="titulo-filme">nome do filme</p>
      </div>

      <div id="filme">
        <img
          src="../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp"
          alt="Sem Imagem"
        />
        <p id="titulo-filme">nome do filme</p>
      </div>

      <div id="filme">
        <img
          src="../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp"
          alt="Sem Imagem"
        />
        <p id="titulo-filme">nome do filme</p>
      </div>

      <div id="filme">
        <img
          src="../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp"
          alt="Sem Imagem"
        />
        <p id="titulo-filme">nome do filme</p>
      </div>

      <div id="filme">
        <img
          src="../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp"
          alt="Sem Imagem"
        />
        <p id="titulo-filme">nome do filme</p>
      </div> -->
      <!-- fim hardcode -->
    </div>
  </div>
</template>

<script setup>
import imgSrc from '../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp';

const filmes = [
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
];

</script>
