let searchBtn = document.getElementById("search-btn");
let movieInput = document.getElementById("movie-input");

searchBtn.addEventListener("click", function () {
    fetch("https://www.omdbapi.com/?apikey=fc1fef96&s=" + movieInput.value)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let grid = document.getElementById("movie-grid");
            grid.innerHTML = "";
            data.Search.forEach(function (movie) {
                let movieCard = document.createElement("div");
                movieCard.classList.add("movie-card");
                let posterImage = document.createElement("img");
                posterImage.src = movie.Poster;
                let titleElement = document.createElement("h3");
                titleElement.textContent = movie.Title;
                let yearElement = document.createElement("p");
                yearElement.textContent = movie.Tear;
                movieCard.appendChild(posterImage);
                movieCard.appendChild(titleElement);
                movieCard.appendChild(yearElement);
                grid.appendChild(movieCard);
            });
        });
});