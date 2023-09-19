const content = document.getElementById("content")

const createSection = (res) => {
    const charactersList = res.characters;
    charactersList.forEach(element => {
        const section = document.createElement("section");
        fetch(`${element}`)
        .then(res1 => res1.json())
        .then(res1 => {
            const h2Name = document.createElement("h2");
            const gender = document.createElement("p");
            const birth = document.createElement("p");
            const homeworld = document.createElement("p");

            h2Name.innerText = res1.name;
            gender.innerText = "Gender: " + res1.gender;
            birth.innerText = "Birth Year: " + res1.birth_year;
            //getHomeworld(res1);
            fetch(`${res1.homeworld}`)
            .then(res2 => res2.json())
            .then(res2 => {
                homeworld.innerText = "Homeworld: " + res2.name;
            })

            section.appendChild(h2Name);
            section.appendChild(gender);
            section.appendChild(birth);
            section.appendChild(homeworld);
        })

        content.appendChild(section);
    });
}

fetch("https://swapi.dev/api/films/1/")
.then(res => res.json())
.then(res => {
    const h1 = document.getElementById("filmTitle");
    h1.innerText = res.title; 
    createSection(res);
})