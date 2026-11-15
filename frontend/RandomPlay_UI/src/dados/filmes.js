// import imgSrc from "../assets/images/Season_3_Chapter_4_Tape_Cover_Front.webp";

// export const filmes = [
//     { id: 1, titulo: "Spleepwaker's confession", caminho: imgSrc, categoria: "Action", classificacao: 9 },
//     { id: 2, titulo: "Their secret story", caminho: imgSrc, categoria: "Action", classificacao: 6 },
//     { id: 3, titulo: "Our journy to the sky", caminho: imgSrc, categoria: "Fiction", classificacao: 10 },
//     { id: 4, titulo: "Virtual revenge", caminho: imgSrc, categoria: "Fiction", classificacao: 9 },
//     { id: 5, titulo: "Hole in Mole", caminho: imgSrc, categoria: "Fiction", classificacao: 5 },
//     { id: 6, titulo: "The long Goodbye", caminho: imgSrc, categoria: "Romance", classificacao: 4 },
//     { id: 7, titulo: "Bury the tears with the past", caminho: imgSrc, categoria: "Romance", classificacao: 8 },
//     { id: 8, titulo: "New Eridan Sunset", caminho: imgSrc, categoria: "Romance", classificacao: 10 },
// ];


// data/filmes.js
// data/filmes.js
import { ref } from "vue";

export const filmes = ref([]);

export async function carregarFilmes() {
    const resposta = await fetch("https://ghibliapi.vercel.app/films");
    const dados = await resposta.json();

    // A API devolve os campos com nomes diferentes dos teus.
    // Mapeia para o formato que os componentes já esperam.
    filmes.value = dados.map((filme) => ({
        id: filme.id,
        titulo: filme.title,
        caminho: filme.image,
        categoria: filme.director,
        classificacao: parseInt(filme.rt_score) * 10,
        descricao: filme.description,
        data_lancamento: filme.release_date,
    }));
}