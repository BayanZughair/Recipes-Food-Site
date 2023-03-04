const dairyIngredients = new Set(["Cream", "Cheese", "Milk", "Butter", "Creme", "Ricotta", "Mozzarella", "Custard", "Cream Cheese"])
const glutenIngredients = new Set(["Flour", "Bread", "Spaghetti", "Biscuits", "Beer"])

function hasDuplicates(arr){
    return arr.length !== new Set(arr).size
}
function isDairy(ingredients){
    return !hasDuplicates([...ingredients, ...dairyIngredients])
}
function isGluten(ingredients){
    return !hasDuplicates([...ingredients, ...glutenIngredients])
}

class Recipe {
    constructor(id, title, ingredients, thumbnail, href){
        this.id = id
        this.title = title
        this.ingredients = ingredients
        this.thumbnail = thumbnail
        this.href = href
        this.isDairy = isDairy(ingredients)
        this.isGluten = isGluten(ingredients)
    }
}

class Recipes {
    constructor(){
        this._recipes = []
    }

    get recipes(){
        return this._recipes
    }

    addRecipe(recipe){
        this._recipes.push(recipe)
    }
}

module.exports = {Recipe, Recipes}
