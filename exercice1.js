/*
* Créer un tableau d'utilisateur contenant chacun des objets (name, age, position, gender).
* Boucler sur ce tableau pour ainsi afficher l'ensemble des utilisateurs et leurs informations sous une liste (name et age suffira).
* Créer 4 champs de formulaire (name: text, age: input de type number, position: text, gender: select).
* A la validation du formulaire, créer le nouvel object utilisateur et le pusher au tableau des users.
* Afficher le nouvel user sur la liste HTML
* 
* BONUS : Un bouton pour chaque utilisateur permettant de supprimer l'object user et ainsi le supprimer de
* la liste.
*/

const users = [
  {
    id: 1,
    name: 'Thomas',
    age: 18,
    position : "Redacteur",
    gender : "Homme"
  },
  {
    id: 2,
    name: 'Anne',
    age: 22,
    position : "Chef de projets",
    gender : "Femme",
  },
  {
    id: 3,
    name: 'Sophie',
    age: 30,
    position : "CEO",
    gender : "Femme"
  },
  {
    id: 4,
    name: 'Mattieu',
    age: 22,
    position : "Webmaster",
    gender : "Homme"
  },
]


const usersListElem = document.getElementById('utilisateurs')
const formAddUser = document.getElementById("users_form")
const errorMessage = document.getElementById("error")

function displayUser(param1) {
  const li = document.createElement('li')
  const p = document.createElement('p')
  const button = document.createElement('button')
  button.textContent = 'Remove user'
  p.textContent = "Nom : " + param1.name + ", Age = " + param1.age
  li.appendChild(p)
  li.appendChild(button)
  usersListElem.appendChild(li)

  button.addEventListener('click', function () {
    const userId = param1.id
    console.log(param1)
    const userIndex = users.findIndex(u => u.id === userId)
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/splice
    users.splice(userIndex, 1)
    li.remove()
    console.log(users)
  })
}

for (const user of users) {
  displayUser(user) 
}

formAddUser.addEventListener('submit', function (event) {
  event.preventDefault()

  const lastUser = users[users.length - 1]

  const id = users.length === 0 ? 1 : lastUser.id + 1
  const name = document.getElementById("name").value
  const age = parseInt(document.getElementById("age").value)
  const position = document.getElementById("position").value
  const gender = document.getElementById("gender").value

  const newUser = { id, name, age, position, gender }

  users.push(newUser)
  displayUser(newUser) 
})
