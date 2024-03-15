const petsData = [
    {
        name: "Purrsloud",
        species: "Cat",
        favFoods: ["wet food", "dry food", "<strong>any</strong> food"],
        birthYear: 2024,
        photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
        name: "Barksalot",
        species: "Dog",
        birthYear: 2023,
        photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
        name: "Meowsalot",
        species: "Cat",
        favFoods: ["tuna", "catnip", "celery"],
        birthYear: 2019,
        photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
];

function age(birthYear){
    let calAge = new Date().getFullYear() - birthYear;

    if(calAge == 0){
        return "baby";
    }
    else if(calAge == 1){
        return "1 year old";
    }
    else{
        return calAge + "years old";
    }

}

function food(f){
    return `
    <h4> Favourite Foods</h4>
    <ul class="foods-list">
  ${f.map((item)=> `<li>${item}</li>`).join('')}
    </ul>
    `
}
function petTemplate(pet) {
    return `<div class="animal">
    <img class="pet-photo" src = "${pet.photo}">
    <h2 class="pet-name">${pet.name} <span class="species">(${pet.species})</span></h2>
    <p><strong>Age:</strong>${age(pet.birthYear)}</p>
    ${pet.favFoods ? food(pet.favFoods) :"" }
</div>`
}

document.getElementById('app').innerHTML = `
 <h1 class="app-title">Pets (${petsData.length} result)</h1>

${petsData.map(petTemplate).join("")}

 <p class ="footer"> These ${petsData.length} pets were added recently. Check back son for updates/<p>
`;