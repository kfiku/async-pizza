function findingPizzaIngedients(pizzaFound, dough) {
    const pizzaIngredients = pizzaFound.ingredients.concat(dough)

    console.log('findingPizzaIngedients ===> ', pizzaIngredients);

    return new Promise(resolve => {
        resolve(pizzaIngredients)
    })
}

export default findingPizzaIngedients