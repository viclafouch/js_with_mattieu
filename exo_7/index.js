/**
   * Énoncé :
    Ecrire un script composé des fonctions suivante :

    Une fonction qui remplit un tableau par des noms  saisis par l'utilisateur  via une boite de dialogue , (tu peux utiliser prompt())
    Une fonction qui renvoie au hasard le nom gagnant et qui sera lancée lorsque l'utilisateur clique sur le  bouton "tirage au sort" .
    Indication : Utiliser la fonction Math.random() pour tirer un numéro au hasard
 */

const addNameButton = document.getElementById('add-name')
const drawNameButton = document.getElementById('draw-name')
const resetNameButton = document.getElementById('reset-name')
const resultNameELem = document.getElementById('result')
const usersList = document.getElementById('users-list')

// Parse ?
let users = JSON.parse(localStorage.getItem('users') || '[]')
checkValidation()
displayUsers()

addNameButton.addEventListener('click', function() {
    const userName = prompt("Ajoutez votre nom")
    if (userName) {
        users.push(userName)
        saveUsers()
    }
})

drawNameButton.addEventListener('click', function() {
    checkValidation()
    if (users) {
        const random = Math.floor(Math.random() * users.length)
        const randomUser = users[random]
        resultNameELem.textContent = randomUser
        console.log(randomUser)
    } else {
        resultNameELem.textContent = "il faut au moins un participant"
    }

})

resetNameButton.addEventListener('click', function() {
    users = []
    saveUsers()
    checkValidation()
    displayUsers()
    resultNameELem.textContent = ''

})

function saveUsers() {
    // Stringify ?
    localStorage.setItem('users', JSON.stringify(users))
    displayUsers()
    checkValidation()
    console.log(users)
}

function displayUsers() {

    usersList.innerHTML = ''

    for (const user of users) {

        const li = document.createElement('li')
        usersList.appendChild(li)
        li.textContent = user

    }

}

function checkValidation() {
    if (users.length > 2) drawNameButton.removeAttribute('disabled', '')
    else drawNameButton.setAttribute('disabled', '')
}