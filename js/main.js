const content = document.getElementById("content")

fetch("https://swapi.dev/api/films/1/")
.then(res => res.json())
.then(res => {
    const h1 = document.createElement("h1");
    h1.innerText = res.title
    content.appendChild(h1)
})