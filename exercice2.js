/*
Créer une div faisant toute la hauteur ET toute la largeur de l'écran.
Au milieu de l'écran, afficher un input de type text. 
Au changement de cet input, donner comme background-color à la div précedemment créée la couleur écrite dans l'input. 
Cela doit marcher avec "red" par exemple, ou "#15c" par exemple.
*/

const color_input = document.getElementById('color_input')
const background = document.querySelector('.background')

color_input.addEventListener('input', function () {
  const colorValue = color_input.value
  background.style.backgroundColor = colorValue
})