const express = require('express')
const app= express()
const cors= require('cors')
app.use(cors())
const PORT= 8000

app.get('/', (request,response )=> {
    response.sendFile(__dirname+ '/index.html')
})

let niveaux = {
    'cp': {
        'chapitres': 'Apprentissage de la lecture, premiers nombres, formes géométriques simples',
        'age': 6
    },

    'ce1': {
        'chapitres': 'Additions et soustractions, multiplications simples, lecture courante',
        'age': 7
    },

    'ce2': {
        'chapitres': 'Multiplications, divisions, fractions simples, grammaire',
        'age': 8
    },

    'cm1': {
        'chapitres': 'Nombres décimaux, grandes multiplications, initiation à la géométrie',
        'age': 9
    },

    'cm2': {
        'chapitres': 'Fractions, proportionnalité, pourcentages, solides géométriques',
        'age': 10
    },

    'sixieme': {
        'chapitres': 'Fractions, symétrie, aire et périmètre, initiation à l’algèbre',
        'age': 11
    },

    'cinquieme': {
        'chapitres': 'Proportionnalité, volumes, relatifs, théorème de Pythagore',
        'age': 12
    },

    'quatrieme': {
        'chapitres': 'Équations, fonctions linéaires, théorème de Thalès, statistiques',
        'age': 13
    },

    'troisieme': {
        'chapitres': 'Équations, trigonométrie, fonctions affines, probabilités',
        'age': 14
    },

    'seconde': {
        'chapitres': 'Ensembles de nombres, équations, fonctions, géométrie analytique',
        'age': 15
    },

    'premiere': {
        'chapitres': 'Produit scalaire, second degré, dérivées, statistiques avancées',
        'age': 16
    },

    'terminale': {
        'chapitres': 'Suites et récurrence, limites de fonctions, intégrales, probabilités',
        'age': 17
    },

    'bts': {
        'chapitres': 'Analyse appliquée, algèbre linéaire, statistiques, optimisation',
        'age': 18
    },

    'licence1': {
        'chapitres': 'Algèbre linéaire, analyse réelle, probabilité, programmation',
        'age': 19
    },

    'licence2': {
        'chapitres': 'Analyse complexe, topologie, équations différentielles, calcul matriciel',
        'age': 20
    },

    'licence3': {
        'chapitres': 'Espaces vectoriels normés, intégration de Lebesgue, algèbre avancée',
        'age': 21
    },

    'master1': {
        'chapitres': 'Équations aux dérivées partielles, probabilité avancée, optimisation numérique',
        'age': 22
    },

    'master2': {
        'chapitres': 'Théorie de la mesure, analyse fonctionnelle, statistiques inférentielles',
        'age': 23
    },

    'doctorat': {
        'chapitres': 'Recherche en mathématiques, modélisation avancée, rédaction scientifique',
        'age': 24
    }
}

app.get('/niveaux/:nomNiveau', (request,response )=> {

    const nomNiveau = request.params.nomNiveau.toLowerCase()
    response.json(niveaux[nomNiveau])
})

app.listen(PORT, ()=> {
    console.log(`server running on ${PORT}`)
})

