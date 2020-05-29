import { timeToAddOneIngredient } from '../../settings'

function addingIngredients(pizza, pizzaFound, pizzaIngredients, ingredientNames, ingredients, callback) {
    let newIngredients = ingredients

    pizzaFound.ingredients.forEach(() => {
        pizza.orderTime += timeToAddOneIngredient
    })
    
    //reducing the number of ingredients needed
    pizzaIngredients.forEach(item => {
        ingredientNames.find(el => el === item) && newIngredients[item]--
    })

    console.log('time after addingIngredientsTime ===> ', pizza.orderTime);

    callback(newIngredients)

    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, timeToAddOneIngredient * pizzaFound.ingredients.length)
    })
}

export default addingIngredients