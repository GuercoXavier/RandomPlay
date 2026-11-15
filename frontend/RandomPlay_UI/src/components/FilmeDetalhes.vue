<!-- esse componente eh o cartao que mostrara os detalhes do filme selecionado -->
<template>
  <div id="cartao-filme">
    <button @click="voltar" id="pagina-anterior">voltar</button>
    <div id="imagem-filme">
      <img :src="filme.caminho" alt="Sem imagem" />
    </div>

    <!-- <img :src="filme.caminho" alt="Sem imagem" /> -->
    <div id="detalhes-filme">
      <div id="nome-filme">
        <p>{{ filme.titulo }}</p>
        <button id="assistir-filme">Assistir Agora</button>
      </div>
      <p id="descricao-filme">{{ filme.descricao }}</p>
      <div id="detalhes-extra">
        <!-- <div id="genero-filme"></div> -->
        <!-- <div id="classificacao-filme">10.0</div> -->
        <span id="genero-filme"><b>Genero </b>{{ filme.categoria }}</span>
        <span id="classificacao-filme"
          ><b>Clasificacao </b>{{ filme.classificacao / 100 }}</span
        >
        <span id="data-lancamento-filme"
          ><b>Data de Lancamento </b>{{ filme.data_lancamento }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
// import { defineProps } from "vue";

const props = defineProps({
  filme: {
    type: Object,
    required: true,
  },
});

function voltar() {
  window.location.hash = "#/";
}
// console.log(props.filme_com_detalhe);
</script>
