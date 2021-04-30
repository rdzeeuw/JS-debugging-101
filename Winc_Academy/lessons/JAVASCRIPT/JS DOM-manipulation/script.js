

const lionBtn = document.querySelectorAll('.big-five-button')[0];
const leopardBtn = document.querySelectorAll('.big-five-button')[1];
const elephantBtn = document.querySelectorAll('.big-five-button')[2];
const rhinoBtn = document.querySelectorAll('.big-five-button')[3];
const buffaloBtn = document.querySelectorAll('.big-five-button')[4];

const addLion = function() {
    const newAnimal = document.createElement("li");
    const spottedAnimalsList = document.querySelector('#spotted-animals-list');
    
    spottedAnimalsList.appendChild(newAnimal);
    newAnimal.innerHTML = "Lion";
}

const addLeopard = function() {
    const newAnimal = document.createElement("li");
    const spottedAnimalsList = document.querySelector('#spotted-animals-list');
    
    spottedAnimalsList.appendChild(newAnimal);
    newAnimal.innerHTML = "Leopard";
}

const addElephant = function() {
    const newAnimal = document.createElement("li");
    const spottedAnimalsList = document.querySelector('#spotted-animals-list');
    
    spottedAnimalsList.appendChild(newAnimal);
    newAnimal.innerHTML = "Elephant";
}

const addRhino = function() {
    const newAnimal = document.createElement("li");
    const spottedAnimalsList = document.querySelector('#spotted-animals-list');
    
    spottedAnimalsList.appendChild(newAnimal);
    newAnimal.innerHTML = "Rhino";
}

const addBuffalo = function() {
    const newAnimal = document.createElement("li");
    const spottedAnimalsList = document.querySelector('#spotted-animals-list');
    
    spottedAnimalsList.appendChild(newAnimal);
    newAnimal.innerHTML = "Buffalo";
}

lionBtn.addEventListener("click", addLion);
leopardBtn.addEventListener("click", addLeopard);
elephantBtn.addEventListener("click", addElephant);
rhinoBtn.addEventListener("click", addRhino);
buffaloBtn.addEventListener("click", addBuffalo);

//remove first from list  

const removeFirstButton = document.querySelector('#remove-first-item-button');

removeFirstButton.addEventListener('click', () => {
    const parent = document.querySelector('#spotted-animals-list');
    const child = parent.getElementsByTagName('li')[0];

    const removeFirstItem = parent.removeChild(child);

})

//remove all from list

const removeAllButton = document.querySelector('#remove-all-button');

removeAllButton.addEventListener('click', () => {
    const parent = document.querySelector('#spotted-animals-list');
    
    while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
}

})

