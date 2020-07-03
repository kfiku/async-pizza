import { cookingTime } from '../../settings'

function cookingPizza(pizza) {
    pizza.orderTime += cookingTime

    console.log('time after cookingPizza ===> ', pizza.orderTime);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, cookingTime)
    })
}

export default cookingPizza