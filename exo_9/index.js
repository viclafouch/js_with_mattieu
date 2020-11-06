const maVoiture = {
    // Propriété : valeur
    test_test: 1
}


// Ajouter une propriété
maVoiture.toto = 'test'
maVoiture['toto'] = 'test'

// Accéder à une propriété
maVoiture.test_test
maVoiture['test_test']


const fruit = ['banane', 'raison', 'pommes']

const t = maVoiture

t.lolo = 'papa'

function test(object) {
    object.papa = 'lol'
}

test(maVoiture)

console.log(maVoiture)


const post = {
    title: 'Mon titre',
    firstName: 'Francis',
    lastName: 'DLF',
    description: "Ma description c'est super cool",
    createdAt: new Date(),
    // METHODE
    name() {
        return this.firstName + ' ' + this.lastName
    }
}

// CREATION DE CONSTANTES A PARTIR DES CLES
// const title = post.title
// const { title, firstName } = post

// CREER SHALLOW COPY EN EXCLUANT UN CLE
// const { title, ...rest } = post

// CREATION DE SHALLOW COPY
const {...rest } = post

rest.firstName = 'lol'
console.log(rest)
console.log(post)


// const string = post.name()
// console.log(string);

// RECCUPERE LES NOMS DES CLES
for (const key in post) {
    console.log(key)
}

// RECCUPERE LES VALEURS CONTENUS DES CLES

for (const key in post) {
    console.log(post[key])
}

const y = Object.keys(post).forEach(key => {
    console.log(post[key]);
})