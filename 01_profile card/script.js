// function changeTheme() {
//     const title = document.getElementById("name-title");
//     title.textContent = "Super Coder Mumtaz"
//     title.style.color = "white"
//     const card = document.querySelector(".profile-card");
//     card.style.backgroundColor = "black"
//     const h2 = document.querySelector("h2");
//     h2.style.color = "white"
//     const ul = document.querySelector("ul");
//     ul.style.color = "white"
//     const p = document.querySelector("p");
//     p.style.color = "white"
//     const textIntro = document.querySelector(".intro-text")
//     textIntro.style.color = "white"
//     textIntro.style.fontStyle = "italic"
//     textIntro.style.fontSize = "20px"
// }

// Here we are going to rewrite the changeTheme() function
// function changeTheme() {
//     const themeToggle = document.querySelector(".profile-card")
//     const changeBtnText = document.getElementById("theme-btn")
//     if (themeToggle.classList.contains(".profile-card")) {
//         themeToggle.classList.toggle(".dark-theme")
//         changeBtnText.textContent("Light Mode")
//     }
//     else {
//         themeToggle.classList.toggle(".profile-card")
//         // changeBtnText.textContent("Light Mode")
//     }
// }

// function sayHello() {
//     alert("Hello, welcome to my website")
// }
function changeTheme() {
    // 1. Select our element
    const card = document.querySelector(".profile-card");
    const themeBtn = document.getElementById("theme-btn");

    // 2. Toggle the class
    card.classList.toggle("dark-theme");

    // 3. Check what the status is NOW, and update the button text
    if (card.classList.contains("dark-theme")) {
        themeBtn.textContent = "Light mode";
    } else {
        themeBtn.textContent = "Dark mode";
    }
}