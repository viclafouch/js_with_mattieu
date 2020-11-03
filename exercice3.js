/**
Exercice : Au clic sur la modal, supprimer la classe "modal-hide" de la div .modal. Cela permettra à notre modal de s'afficher. 
A l'ouverture de la modal, le formulaire doit TOUJOURS etre vide. 
Une fois le formulaire validé, vérifier si une valeur existe bien, sinon afficher un message d'erreur. 
Si nous avons bien une valeur, ajouter l'email à notre tableau emails[string] et afficher un message de success (vider le formualaire aussi). Attention vider message d'erreur / success si l'on ferme la Modal.

La modal doit pouvoir se fermer, pour se faire, si l'on click en dehors du cadre blanc,
 cela doit rajouter la class "modal-hide" à la div .modal.

/!\ Créer une fonction permettant de faire un toggle de notre class "modal-hide"
*/

const openModalElem = document.getElementById('open-modal-btn')
const modalElem = document.getElementById('newsletter-modal')
const modalBody = document.querySelector('.modal-body')
const overlayELem = document.querySelector('.modal-overlay')
const userForm = document.getElementById('newsletter-form')
const inputElem = document.getElementById('newsletter-email')
const messageSuccess = document.createElement('p')
messageSuccess.classList.add('success')
const emailsArray = []


openModalElem.addEventListener('click', function() {
    toggleHideModal()
})
overlayELem.addEventListener('click', function() {
    toggleHideModal()

})

userForm.addEventListener('submit', function(e) {

    e.preventDefault()
    const email = inputElem.value
    modalBody.appendChild(messageSuccess)
    if (email) {
        emailsArray.push(email)
        messageSuccess.textContent = "votre email a bien été ajouté"
        inputElem.value = ''
    } else {
        messageSuccess.textContent = "veuillez entrer une adresse mail"
    }
    console.log(emailsArray)
})

function toggleHideModal() {
    modalElem.classList.toggle('modal-hide')
    messageSuccess.remove()
}