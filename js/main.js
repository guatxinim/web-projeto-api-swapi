const content = document.getElementById("content")

const createSection = () => {
    res.characters.forEach(element => {
        const section = document.createElement("section");
        fetch(element)
        .then(res => res.json())
        .then(res => {
            h2Name = document.createElement("h2");
            gender = document.createElement("p");
            birth = document.createElement("p");
            homeworld = document.createElement("p");
        })
        content.appendChild(section);
    });
}

fetch("https://swapi.dev/api/films/1/")
.then(res => res.json())
.then(res => {
    const h1 = document.getElementById("filmTitle");
    h1.innerText = res.title;
    content.appendChild(createSection(res));
})