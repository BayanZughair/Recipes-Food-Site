const express = require('express')
const axios = require('axios')
const { Recipe, Recipes } = require('./recipes.js')

const router = express.Router()
function fetch(url) {
    return axios.get(url)
        .then(response => {
            return response.data
        })
        .catch(error => {
            console.error(error)
        })
}

router.get('/recipes', function (req, res) {
    const ingredient = req.query?.filterByIngredient

    fetch(`https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/${ingredient}`).then(data => {
        const recipes = new Recipes()
        data.results.forEach(fetchedRecipe => {
            const recipe = new Recipe(fetchedRecipe.idMeal, fetchedRecipe.title, fetchedRecipe.ingredients, fetchedRecipe.thumbnail, fetchedRecipe.href)
            recipes.addRecipe(recipe)
        });

        res.send(JSON.stringify(recipes))
    })
})

module.exports = router
