import startOrder from './modules/startOrder'

class Pizzeria {
    constructor(name, cookers, ingredients, menu) {
        this.name = name;
        this.cookers = cookers;
        this.ingredients = ingredients;
        this.menu = menu;
        this.busyPizzaMen = 0
    }

    async order(pizzaName, callback) {
        console.log(`>>> >> > start order - ${pizzaName} < << <<<`);
        const pizza = {
            name: pizzaName,
            orderTime: 0
        }

        let error = null;

        const ingredientNames = Object.keys(this.ingredients)
        const dough = ['floor', 'water', 'salt']

        const orderPizza = await startOrder(pizza, dough, ingredientNames, this.ingredients, this.menu, this.reductionIngredient);

        if (orderPizza === 'no pizza') {
            error = 'no pizza in menu'
            callback(error, pizza)
        }

        console.log(`>>> >> > end order - ${pizzaName} < << <<<`);

        return new Promise(resolve => {
            resolve(callback(error, pizza))
        })

    }

    toString() {
        return `Pizzeria ${this.name} menu: ${this.menu.map(item => item.name).join(', ')}.
Employ ${this.cookers} cookers.
ingredients: ${JSON.stringify(this.ingredients)}`;
    }

    reductionIngredient(ingredientsAfterUse) {
        Pizzeria.ingredients = ingredientsAfterUse
    }
}

export default Pizzeria
