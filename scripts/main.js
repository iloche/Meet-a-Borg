const robotsBox = document.querySelector(".robots-box")

fetch("scripts/robots.json")
    .then(response => response.json())
    .then(datas => {
        console.log(datas)
        datas.robots.forEach(function(singleRobot){
            let robotImg = `
            <div class="robots ${singleRobot.gender}">
            <h2>${singleRobot.first_name} ${singleRobot.last_name}</h2>
            <img class="robotImg" src="${singleRobot.portrait}">
            </div>
            `
            robotsBox.innerHTML += robotImg

            // let count = 
            // `
            // Il y a ${singleRobot.gender}
            // `
            // document.querySelector(".count").innerHTML += count
        })
    })
    .catch(error => {
        console.log("Erreur lors de la récup des données :", error)
    })