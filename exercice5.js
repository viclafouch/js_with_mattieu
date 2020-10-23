/**
Créer une liste de posts.
Le formulaire permet de récupérer des données et dynamiquement ajouter l'article dans la liste de droite.
2 options possibles:
- Soit boucler sur un tableau de posts à chaque fois qu'un post est ajouté afin de recréer la liste en entier.
OU
- Ajouter l'article créé en fin de liste.

BONUS : Utiliser le localStorage afin de faire persister le tableau des articles (si on actualise la page, on a toujours nos articles). Attention, que de nouvelles choses dans ce bonus.
 */

console.log('exercice 5')
const formElem = document.getElementById('form-post')
const titleElem = document.getElementById('title')
const descriptionElem = document.getElementById('description')
const authorElem = document.querySelector('[type="hidden"]')
const postListElem = document.querySelector('.post-list')
// let posts = []
// if (localStorage.getItem("posts")) {
//   posts = JSON.parse(localStorage.getItem("posts"))
// }
const posts = JSON.parse(localStorage.getItem("posts") || '[]')
formElem.reset()

for (const post of posts) {
  createPost(post.title, post.description, post.author)
}

function createPost(param1, param2, param3) {
  const li = document.createElement('li')
  const h1 = document.createElement('h1')
  const pDescription = document.createElement('p')
  const pAuthor = document.createElement('p')
  li.classList.add('post-listitem')
  h1.classList.add('post-title')
  pDescription.classList.add('post-description')
  pAuthor.classList.add('post-author')
  li.appendChild(h1)
  li.appendChild(pDescription)
  li.appendChild(pAuthor)
  h1.textContent = param1
  pDescription.textContent = param2
  pAuthor.textContent = param3
  postListElem.appendChild(li)
}

function savePost(object1) {
  posts.push(object1)
  localStorage.setItem("posts", JSON.stringify(posts))
}

formElem.addEventListener('submit', function(e) {
  e.preventDefault()
  const title = titleElem.value
  const description = descriptionElem.value
  const author = authorElem.value
  createPost(title, description, author)
  formElem.reset()
  const currentPost = {
      title,
      description,
      author,
  }
  savePost(currentPost)
})

