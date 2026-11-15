<!-- componente responsavel por mostrar lista de filmes -->
<template>
  <div id="filmes-container">
    <p id="categoria">{{ seccao }}</p>
    <div id="filmes">
      <div id="filme" v-for="filme in filmes" :key="filme.id">
        <img :src="filme.caminho" alt="Sem Imagem" />
        <p id="titulo-filme">{{ filme.titulo }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  filmes: {
    type: Array,
    required: true,
  },
  seccao: {
    type: String,
    required: true,
  },
});

// estilo especial para seccao 'Random Play'
document.querySelectorAll("p").forEach((elemento) => {
  if (elemento.textContent === "Random Play")
    elemento.classList.add("random-play");
});
</script>
