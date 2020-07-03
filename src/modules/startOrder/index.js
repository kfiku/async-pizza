import checkMenu from '../checkMenu'
import findingPizzaIngedients from '../findingPizzaIngedients'
import checkingIngredients from '../checkingIngredients'
import preparationDough from '../preparationDough'
import addingIngredients from '../addingIngredients'
import cookingPizza from '../cookingPizza'

async function startOrder(pizza, dough, ingredientNames, ingredients, menu, reductionIngredient) {
    const pizzaFound = await checkMenu(menu, pizza.name)
    if (!pizzaFound) return 'no pizza'

    const pizzaIngredients = await findingPizzaIngedients(pizzaFound, dough)

    await checkingIngredients(ingredients, pizza, pizzaIngredients)

    await preparationDough(pizza)

    await addingIngredients(pizza, pizzaFound, pizzaIngredients, ingredientNames, ingredients, reductionIngredient)

    await cookingPizza(pizza)

    console.log('ingredients end ===>', ingredients)

}

export default startOrder