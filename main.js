buscarFilme();

// RESOLVER O ONCLICK

async function buscarFilme() {

    try {
        const API_KEY = 'd9457dfe';
        const url = `http://www.omdbapi.com/?apikey=${API_KEY}&`;
        const titulo = document.getElementById("titulo").value.toLowerCase();
        const resposta = await fetch(`${url}t=${titulo}`);

        if (!resposta.ok) {
            throw new Error("Erro ao chamar a API: " + resposta.status);
        }

        const dados = await resposta.json();
        console.log(dados);

        const tituloPagina = document.getElementById("tituloPagina");
        tituloPagina.textContent = dados.Title;

        const poster = document.getElementsByClassName("poster");
        poster[0].src = dados.Poster;

        const title = document.getElementsByClassName("title");
        title[0].textContent = dados.Title;

        const gen = document.getElementById("genero");
        gen.textContent = dados.Genre || "N/A";

        const anoLnc = document.getElementById("anoLnc");
        anoLnc.textContent = dados.Year || "N/A";

        const tipo = document.getElementById("tipo");
        tipo.textContent = dados.Type || "N/A";

        if (dados.Type === "movie") {
            tipo.textContent = "Filme";
        } else if (dados.Type === "series") {
            tipo.textContent = "Série";
        }

        const rottenRating = document.getElementById("rottenRating");
        rottenRating.textContent = dados.Ratings[1].Value || "N/A";

        const imdbRating = document.getElementById("imdbRating");
        imdbRating.textContent = dados.imdbRating || "N/A";

        const metascoreRating = document.getElementById("metascoreRating");
        metascoreRating.textContent = dados.Metascore || "N/A";

        const rated = document.getElementById("rated");
        rated.textContent = dados.Rated || "N/A";

        const direcao = document.getElementById("direcao");
        direcao.textContent = dados.Director || "N/A";

        const elenco = document.getElementById("elenco");
        elenco.textContent = dados.Actors || "N/A";

        const premios = document.getElementById("premios");
        premios.textContent = dados.Awards || "N/A";

        const duracao = document.getElementById("duracao");
        duracao.textContent = dados.Runtime || "N/A";

        const linkImdb = document.getElementById("linkImdb");
        linkImdb.href = `https://www.imdb.com/title/${dados.imdbID}/`;
        // linkImdb.textContent = "Ver página do IMDb";

        const plot = document.getElementById("plot");
        plot.textContent = dados.Plot || "N/A";
    }
    catch (error) {
        console.error("Erro na requisição: ", error);
    }
}

titulo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        buscarFilme();
    }
}); 