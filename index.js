const joke = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const prev = document.querySelector("#prev");
let i = 0;
let currentJoke = "";
let previousJoke = "";

const jokeGenerator = () => {

    const setHeader = {
        headers: {
            Accept: "application/json"
        }
    }

    fetch("https://icanhazdadjoke.com/", setHeader)
    .then((res) => res.json()
        .then((data) => {
            previousJoke = currentJoke;
            i++;
            if(i == 2) {
                prev.style.display = "inline";
            }
            currentJoke = data.joke;
            joke.innerHTML = currentJoke;
        })
    ).catch((error) => console.log(error))
}

const prevJoke = () => {
    joke.innerHTML = previousJoke;
}

btn.addEventListener("click", jokeGenerator);
prev.addEventListener("click", prevJoke);