let jokeBtn = document.getElementById("joke-btn")
jokeBtn.addEventListener("click", function () {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let jokeSetup = document.getElementById("joke-setup");
            jokeSetup.textContent = data.setup;
            let jokePunchline = document.getElementById("joke-punchline");
            jokePunchline.textContent = data.punchline;
        });
})