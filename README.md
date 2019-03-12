# Async Pizza 🍕  JavaScript code challenge

![Logo](img/logo.gif)

## Make a pizza 🍕 with javascript 

```
git clone https://github.com/kfiku/async-pizza.git
npm i
npm run test:watch
```

Your task is to make `Async Pizzeria`. Boilerplate class is [Pizzeria.js](src/Pizzeria.js)

Pizzeria.js is class that accepts 4 arguments in constructor

| Name        | Type   | Description |
|:------------|:-------|:------------|
| name        | string | The name of pizzeria |
| cookers     | number | How many cookers are there employ in |
| ingredients | object | How many ingredients are there |
| menu        | object | pizzas menu |

### Ingredients argument

One cheese means you can do one pizza with it.<br>
In this example you can make 5 pizzas with all ingredients.

```js
const ingredients = {
  floor: 5, 
  water: 5,
  oil: 5,
  salt: 5,
  cheese: 5,
  sauce: 5,
  ham: 5,
  mushrooms: 5,
}
```

### Menu argument

Menu is an array of pizzas and ingredients list, that is needed to make it.

```js
const menu = [
  {
    name: "margarita",
    ingredients: [
      "cheese",
      "sauce"
    ]
  },
  //...
]
```

Of course, every pizza needs a dough. So to make, margarita from this example, we need 1 cheese, 1 sauce, 1 floor, 1 water, 1 oil and 1 salt.

## Details / Requirements

Making a pizza needs time:
* kneading the dough: `3000ms`
* adding ingredients on pizza: `1000ms`
* cooking pizza: `2000ms`

If ingredients is missing, we need to order them. We can order only 10 items at once. Shipping also needs time: `1500ms` per 10 items

One cooker can make one pizza at the time.

Pizzeria.order should return in callback:

```js
// if you order pizza name that is not in menu
error === "no pizza in menu"
```

```js
// if every think was ok
error === null
pizza === {
  name: 'margarita',
  orderTime: 1000 // in ms
}
```

## Play with it

Try to complete Pizzeria class (maybe split it to more classes / modules) with all requirements.

Let me know how it went

# Im open to suggestions :)

