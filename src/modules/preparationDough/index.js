import { doughTime } from '../../settings'

function preparationDough(pizza) {
    pizza.orderTime += doughTime
    console.log('time after preparationDough ===> ', pizza.orderTime);

    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, doughTime)
    })
}

export default preparationDough