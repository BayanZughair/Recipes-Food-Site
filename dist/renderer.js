class Renderer {
    constructor() {
        this.recipeTemplate = Handlebars.compile($('#recipes-template').html());
    }

    renderRecipes(recipes) {
        $('.recipes').empty().append(this.recipeTemplate({recipes}));
    }
}
