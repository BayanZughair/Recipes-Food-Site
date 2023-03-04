
let allRecipes = []

const filterchoice = {
    dairyClicked: false,
    glutenClicked: false
}

const renderer = new Renderer()
$(".search-btn").click(function () {
    let ingredient = $(this).closest("div").find("input").val()
    $.getJSON(`/recipes?filterByIngredient=${ingredient}`)
        .then(data => {
            return data._recipes
        }).then(fetchedRecipes => {
            allRecipes = fetchedRecipes
            renderer.renderRecipes(allRecipes)
        })
})

function filteredRecipes() {
    const filteredRecipes = allRecipes.filter(recipe => {

        if (filterchoice.dairyClicked && recipe.isDairy) {
            return false
        }

        if (filterchoice.glutenClicked && recipe.isGluten) {
            return false
        }
        return true
    })
    renderer.renderRecipes(filteredRecipes)
}

function filterDairy(event) {
    const isChecked = event.target.checked
    isChecked ? filterchoice.dairyClicked = true : filterchoice.dairyClicked = false
    filteredRecipes()
}

function filterGluten(event) {
    const isChecked = event.target.checked
    isChecked ? filterchoice.glutenClicked = true : filterchoice.glutenClicked = false
    filteredRecipes()
}

$('.recipes').on("click", ".recipe img", function () {
    const firstIngredient = $(this).closest('div').siblings('.ingredients').find('li:first-child')
    alert(firstIngredient.text())
})
