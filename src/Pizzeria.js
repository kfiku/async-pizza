class Pizzeria {
  constructor(name, cookers, ingredients, menu) {
    this.name = name;
    this.cookers = cookers;
    this.ingredients = ingredients;
    this.menu = menu;
  }

  order(pizzaName, callback) {
    callback("not implemented yet")
  }

  toString() {
    return `Pizzeria ${this.name} menu: ${this.menu.map(item => item.name).join(', ')}.
Employ ${this.cookers} cookers.
ingredients: ${JSON.stringify(this.ingredients)}`;
  }
}

export default Pizzeria
