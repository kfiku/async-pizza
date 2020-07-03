import chippingIngredients from '../chippingIngredients'

async function checkingIngredients(ingredients, pizza, pizzaIngredients) {
    //finding missing ingredients
    const missingIngredients = pizzaIngredients.filter(item => ingredients[item] === 0)
    console.warn(pizza.name, ': missingIngredients', missingIngredients);

    //order missing ingredients
    if (missingIngredients.length) {
        await chippingIngredients(ingredients, pizza, missingIngredients)
    }
}

export default checkingIngredients