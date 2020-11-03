/**
   * Énoncé :
    Récupérer les posts via le point d'API en utilisant fetch (check doc)
    Afficher la liste des posts dans le html (title / description suffit).
    Un champs doit permettre de filtrer le titre (en utilisant display none/block) en direct. J'écris et la liste doit n'afficher que ce que je recherche.

    BONUS : La recherche est persistante (via localStorage)

 */

const API_POSTS = 'https://jsonplaceholder.typicode.com/posts'

// const addition = (number1, number2) => number1 + number2
// const t = addition(1, 2)
// const y = addition(1, 3) + addition(8, 9)

const wait = (amount = 1000) => new Promise(resolve => setTimeout(() => resolve(), amount))
const postsListElem = document.querySelector('.posts-list')
const postsCountElem = document.getElementById('posts-length')
const searchElem = document.getElementById('search-posts')

// function wait_(amount = 500) {
//     const promise = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve()
//         }, amount)
//     })
//     return promise
// }

// wait().then(() => {
//     console.log('go');
// })

fetch(API_POSTS)
    .then(function(response) {
        return response.json()
    })
    .then(function(posts) {
        start(posts)
            //console.log(posts)
    })
    .catch(function(erreur) {
        //console.warn(erreur);
    })

function start(posts) {

    const postsCount = posts.length
    postsCountElem.textContent = postsCount

    for (const post of posts) {
        const li = document.createElement('li')
        const article = document.createElement('article')
        const h4 = document.createElement('h4')
        const p = document.createElement('p')
        article.classList.add('post')
        h4.classList.add('post-title')
        p.classList.add('post-description')

        postsListElem.appendChild(li)
        li.appendChild(article)
        article.appendChild(h4)
        article.appendChild(p)

        li.setAttribute("data-id", post.id)
        h4.textContent = post.title
        p.textContent = post.body
    }




    searchElem.addEventListener('input', function() {

        // RECUPPERE LA VALUE DE L'INPUT
        const searchValue = searchElem.value
        let postsMatched = 0

        // BOUCLE SUR LES POSTS
        for (const post of posts) {

            console.log(post);

            const postID = post.id
            const titlePost = post.title

            //BOOLEAN SI CONTIENT LA VALEUR 
            const isMatched = titlePost.includes(searchValue)

            //INCREMENTE LE NOMBRE DE POSTS QUI MATCHENT
            if (isMatched) {
                postsMatched++
            }

            console.log({ isMatched });

            // const t = '[data-id=' + postID + ']'
            // const y = `[data-id="${postID}"]` // template string

            // RECCUPPERE L'ELEM DOM DU POST
            const li = document.querySelector(`[data-id="${postID}"]`)

            // AFFICHE OU CACHE 
            li.style.display = isMatched ? 'block' : 'none'
        }

        // MET A JOUR LE COMPTEUR EN FONCTION DES POSTS QUI MATCHENT
        postsCountElem.textContent = postsMatched

    })
}