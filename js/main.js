fetch("https://swapi.dev/api/films/1/")
.then(res => res.json())
.then(res => {
    const h1 = document.getElementById("filmTitle");
    h1.innerText = res.title; 
    var p = document.getElementById("filmDescription");
    p.innerText = res.opening_crawl;
})