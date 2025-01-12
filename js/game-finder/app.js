const searchButton = document.querySelector("#searchButton");
const searchInput = document.querySelector("#search");
const results = document.querySelector("#results");

const apiUrl = "https://api.rawg.io/api/games?";
const apiKey = "key=191df4411cf14e7fb0e3003af0e10e51";
const fullUrl = `${apiUrl}${apiKey}`;

const searchGames = async (query) => {
    try {
        const response = await axios.get(`${fullUrl}&search=${query}`);
        return response.data.results;
    } catch (error) {
        console.error(error);
        return [];
    }
}

const createGameElement = (game) => {
    const gameBox = document.createElement("div");
    gameBox.classList.add("game");

    const gameImg = document.createElement("img");
    gameImg.src = game.background_image;

    const gameTitle = document.createElement("h2");
    gameTitle.textContent = game.name;

    const gameParams = document.createElement("ul");

    const gameReleased = document.createElement("li");
    gameReleased.textContent = `Released: ${game.released}`;

    const gameRating = document.createElement("li");
    gameRating.textContent = `Rating: ${game.rating}`;

    const gameMetacritic = document.createElement("li");
    gameMetacritic.textContent = `Metacritic: ${game.metacritic}`;

    gameParams.append(gameReleased, gameRating, gameMetacritic);
    gameBox.append(gameImg, gameTitle, gameParams);

    // if (game.metacritic) {
    //     const gameMetacriticLink = document.createElement("li");
    //     const metacriticLink = document.createElement("a");
    //     metacriticLink.href = `https://www.metacritic.com/game/${game.slug}`;
    //     metacriticLink.textContent = "URL";
    //     metacriticLink.target = "_blank";
    //     metacriticLink.alt = "Metacritic Link";
    //     gameMetacriticLink.appendChild(metacriticLink);
    //     gameParams.appendChild(gameMetacriticLink);
    // }

    gameBox.addEventListener("click", () => {
        window.open(`https://www.metacritic.com/game/${game.slug}`, "_blank");
    });

    return gameBox;
}

const displayGames = (games) => {
    games.sort((a, b) => new Date(a.released) - new Date(b.released));
    results.innerHTML = "";
    games.forEach((game) => {
        if (game.metacritic) {
            results.appendChild(createGameElement(game));
        }
    });
}

const handleGameSearch = async (game) => {
    const games = await searchGames(searchInput.value);
    displayGames(games);
}

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    handleGameSearch();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        handleGameSearch();
    }
});