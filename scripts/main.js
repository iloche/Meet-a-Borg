// const robotsBox = document.querySelector(".robots-box")

// fetch("scripts/robots.json")
//     .then(response => response.json())
//     .then(datas => {
//         console.log(datas)
//         datas.robots.forEach(function(singleRobot){
//             let robotImg = `
//             <div class="robots ${singleRobot.gender}" title="${singleRobot.first_name} ${singleRobot.last_name}">
//             <h2>${singleRobot.first_name} ${singleRobot.last_name}</h2>
//             <div class="imgBox"><img class="robotImg" src="${singleRobot.portrait}"></div>
//             <p class="description">${singleRobot.description}</p>
//             </div>
//             `
//             robotsBox.innerHTML += robotImg

//             // let count = 
//             // `
//             // Il y a ${singleRobot.gender}
//             // `
//             // document.querySelector(".count").innerHTML += count
//         })
//     })
//     .catch(error => {
//         console.log("Erreur lors de la récup des données :", error)
//     })

const robotsBox = document.querySelector(".robots-box")
const boutons = document.querySelector('.button-box')
let count = document.querySelector(".count")

// On passe un argument "genre" à la fonction displayRobots qui sera utile quand on l'appellera plus tard
// Notons que si on n'envoie pas d'argument à une fonction, la valeur de l'argument sera "null" (ça a son importance ici :) )
function displayRobots(genre) {
    fetch(`scripts/robots.json`)
    .then(response => response.json())
    .then(data => {
      // console.log(data);
      // On boucle sur les robots avec un forEach .. rien de compliqué ici :)
      data.robots.forEach(function(singleRobot) {
        // Je catch dans une variable sexe le sexe du robot en cours
        const sexe = singleRobot.gender
        // Si le genre (l'argument de la fonction) est égal à null (si on a pas passé d'argument à la fonction) OU si le genre est égal à "all" ou à la valeur de sexe (soit Male ou Female) alors on affiche le bloc html pour créer une galerie de robots 
        if (genre == null || genre == "all" || genre == sexe) {
          robotsBox.innerHTML += `
          <div class="single-robot">
            <h1 class="${sexe}">${singleRobot.first_name} ${singleRobot.last_name}</h1>
            <div class="imgBox"><img src="${singleRobot.portrait}" alt="${singleRobot.first_name} ${singleRobot.last_name}" title="${singleRobot.first_name} ${singleRobot.last_name}"></div>
            <p class="description">${singleRobot.description}</p>
          </div>
          `
        }
      })

        // Mise à jour du compteur
        let countFemale = document.querySelectorAll('.Female');
        let countMale = document.querySelectorAll('.Male');
        count.innerHTML = `Il y a ${countFemale.length} femmes et ${countMale.length} hommes`;
    })
    .catch(error => {console.log("Erreur lors de la récup des données :", error);
 })
}

// On lance la fonction une fois en dehors de tout événement et on la lance .. sans argument du coup .. l'argument "gender" de la fonction vaudra null ici :)
displayRobots()

// Délégation d'événément d'amouuuuuuuuuur ♥ (sur le parent qui contient tous les boutons)
boutons.addEventListener('click', function(event){
    // On check qu'il s'agit bien d'un bouton (en regardant s'il a un data-gender) (on est pas obligé de vérifier ça avec un classList hein ^^) et si c'est bien le cas ...
    if(event.target.hasAttribute('data-gender')){
      // On vide le conteneur d'abord pour le remplacer par soit ...
      robotsBox.innerHTML = ''
      // ... tous les robots ("all")
      if(event.target.getAttribute == "all") {
        displayRobots()
      // ... la valeur du data-gender du bouton sur lequel on a cliquay :)
      } else {
        displayRobots(event.target.getAttribute('data-gender'))
      }
    }
  })

