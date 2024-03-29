import searchMovies from './search.js';

document.addEventListener('DOMContentLoaded', () => {
    const movieTable = document.getElementById('movie-table');
    const movieList = document.getElementById('movie-list');

    // Função para obter os dados dos filmes
    const getMovies = async () => {
        try {
            const response = await fetch('http://localhost:3000/list');
            const movies = await response.json();
            displayMovies(movies);
        } catch (error) {
            console.error('Erro ao obter dados dos filmes:', error);
        }
    };

    // Função para exibir os filmes na tabela
    const displayMovies = (movies) => {
        movies.forEach((movie) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${movie.title}</td>
                <td>${movie.description}</td>
                <td>${movie.trailer}</td>
                <td>${movie.gender}</td>
            `;
            movieList.appendChild(row);
        });
    };

    // Chame a função para obter os filmes ao carregar a página
    getMovies();

    // Adicione o evento de envio do formulário de pesquisa
    document.getElementById("search-form").addEventListener("submit", async function (event) {
        event.preventDefault();

        const searchTerm = document.getElementById("search-input").value.trim();

        try {
            const response = await fetch('http://localhost:3000/list');
            const movies = await response.json();

            const filteredMovies = searchMovies(movies, searchTerm);
            // Limpe a tabela antes de exibir os resultados filtrados
            movieList.innerHTML = '';
            displayMovies(filteredMovies);
        } catch (error) {
            console.error('Erro ao obter dados dos filmes:', error);
        }
    });
});
