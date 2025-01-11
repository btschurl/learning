// Fetch API
// const chuckNorrisRandomJoke = async () => {
//     const url = "https://api.chucknorris.io/jokes/random";
//     try {
//         const res = await fetch(url);
//         if (!res.ok) {
//             throw new Error(`Response status: ${res.status}`);
//         }
//         const data = await res.json();
//         return data.value;
//     } catch (err) {
//         console.log(err);
//     }
// }

// Axios
const chuckNorrisRandomJoke = async () => {
    const url = "https://api.chucknorris.io/jokes/random";
    try {
        const res = await axios.get(url);
        return res.data.value;
    } catch (err) {
        console.log(err);
    }
}

const jokeBox = document.querySelector(".joke");
const jokeButton = document.querySelector(".jokeRandom");
const jokeAuthor = document.querySelector(".jokeAuthor");

jokeButton.addEventListener("click", async () => {
    const joke = await chuckNorrisRandomJoke();
    jokeBox.textContent = joke;
    jokeAuthor.classList.add("visible");
});