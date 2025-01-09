let divContainer = document.querySelector("div");

function listPokemons() {
    const pokemonList = document.querySelectorAll(".pokemon");
    pokemonList.forEach(pokemon => {
        pokemon.addEventListener("click", () => {
            pokemon.parentElement.remove();
        });
    });
}

function createPokemon() {
    for (let i = 1; i <= 100; i++) {
        const pokemonContainer = divContainer.appendChild(document.createElement("div"));
        const pokemon = pokemonContainer.appendChild(document.createElement("img"));
        pokemon.setAttribute("src", "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + i + ".svg")
        pokemon.classList.add("pokemon");
        pokemon.classList.add("pokemon_" + i);
        let label = pokemonContainer.appendChild(document.createElement("p"));
        label.textContent = "Pokemon " + i;
    }
    listPokemons();
}

createPokemon();

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
    const pokemonList = document.querySelectorAll(".pokemon");
    pokemonList.forEach(pokemon => {
        pokemon.parentElement.remove();
    });
    createPokemon();
});