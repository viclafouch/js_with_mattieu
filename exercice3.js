const openModalBtnElem = document.getElementById('open-modal-btn')
const modalElem = document.getElementById('newsletter-modal')
const emails = []

/**
Exercice : Au clic sur la modal, supprimer la classe "modal-hide" de la div .modal. Cela permettra à notre modal de s'afficher. A l'ouverture de la modal, le formulaire doit TOUJOURS etre vide. Une fois le formulaire validé, vérifier si une valeur existe bien, sinon afficher un message d'erreur. Si nous avons bien une valeur, ajouter l'email à notre tableau emails[string] et afficher un message de success (vider le formualaire aussi). Attention vider message d'erreur / success si l'on ferme la Modal.

La modal doit pouvoir se fermer, pour se faire, si l'on click en dehors du cadre blanc, cela doit rajouter la class "modal-hide" à la div .modal.

/!\ Créer une fonction permettant de faire un toggle de notre class "modal-hide"
*/
