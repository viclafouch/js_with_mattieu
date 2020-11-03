/**
   * Énoncé :
    Ecrire un script composé des fonctions suivante :

    Une fonction qui remplit un tableau par des noms  saisis par l'utilisateur  via une boite de dialogue , (tu peux utiliser prompt())
    Une fonction qui renvoie au hasard le nom gagnant et qui sera lancée lorsque l'utilisateur clique sur le  bouton "tirage au sort" .
    Indication : Utiliser la fonction Math.random() pour tirer un numéro au hasard
 */

const addUserButton = document.getElementById('add-name')
const drawUserButton = document.getElementById('draw-name')
const resultUserText = document.getElementById('result')
const resetUsersButton = document.getElementById('reset-name')
const usersList = document.getElementById('users-list')

let users = JSON.parse(localStorage.getItem('users') || '[]')
checkValidation()
displayUsers()

addUserButton.addEventListener('click', function() {
    const user = prompt('Enter your name', '')
    users.push(user)
    saveUsers()
    checkValidation()
    displayUsers()
})

resetUsersButton.addEventListener('click', function() {
    users = []
    saveUsers()
    checkValidation()
    displayUsers()
    resultUserText.textContent = ''
})

drawUserButton.addEventListener('click', function() {
    const random = Math.floor(Math.random() * users.length)
    const randomUser = users[random]
    resultUserText.textContent = randomUser
})

function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users))
    console.log(users)
}

function checkValidation() {
    if (users.length > 2) drawUserButton.removeAttribute('disabled', '')
    else drawUserButton.setAttribute('disabled', '')
}

function displayUsers() {
    usersList.innerHTML = ''
    for (const user of users) {
        const li = document.createElement('li')
        usersList.appendChild(li)
        li.textContent = user
    }
}