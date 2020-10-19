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

const ol = document.querySelector("ol")
const formUsers = document.getElementById("users_form")


function displayUser(param1) {

  const li = document.createElement('li')
  const p = document.createElement('p')
  const button = document.createElement('button')
  button.textContent = "supprimer"
  li.appendChild(p)
  li.appendChild(button)
  p.textContent = "name = " + param1.name + ", age = " + param1.age
  ol.appendChild(li)

  button.addEventListener('click', function(){

    const userId = param1.id
    const userIndex = users.findIndex(u => u.id === userId)
    console.log(userIndex)

    users.splice(userIndex, 1 );
    console.log(users)
    li.remove()

  })

}

for (user of users) {

  displayUser(user)

}

formUsers.addEventListener('submit',function(event){

  event.preventDefault()
  const name = document.getElementById('name').value
  const age = parseInt(document.getElementById('age').value)
  const position = document.getElementById('position').value
  const gender = document.getElementById('gender').value
  const lastUser = users[users.length - 1]
  const id = lastUser === 0 ? 1 : lastUser.id + 1
  const newUser = {id, name, age, position, gender}

  users.push(newUser)
  displayUser(newUser)

})



