function checkMenu(menu, orderedPizza) {

    //finding the name of the pizza
    const pizzaFound = menu.find(pizza => pizza.name === orderedPizza)
    console.log('Found pizza', pizzaFound);

    if (!pizzaFound) return false

    return new Promise(resolve => {
        resolve(pizzaFound)
    })
}

export default checkMenu