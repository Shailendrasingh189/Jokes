
const jokeContainer = document.querySelector(".joke");

const btn = document.querySelector(".btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";


getJokes = async () => {
    let res = await fetch(url);
    let data = await res.json();
    return data.joke;
};

btn.addEventListener("click", async () => {
    jokeContainer.classList.remove("time");

    let getJoke = await getJokes();
    console.log(getJoke);
    jokeContainer.classList.add("time");
    jokeContainer.innerText = getJoke;

    
});

