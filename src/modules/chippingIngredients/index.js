import { chippingTime } from '../../settings'

function chippingIngredients(ingredients, pizza, missingIngredients) {
    console.log('ingredients before shipping ===>', ingredients)
    missingIngredients.forEach(el => {
        ingredients[el] += 10
        pizza.orderTime += chippingTime
        console.log('time chippingIngredients ===> ', el, chippingTime, pizza.orderTime);
    })
    console.log('ingredients after shipping ===>', ingredients)

    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, (missingIngredients.length * chippingTime))
    })
}

export default chippingIngredients