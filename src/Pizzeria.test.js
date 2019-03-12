import Pizzeria from './Pizzeria'

test('Pizza.toString', () => {
  const pizzeria = getTestPizzeria()

  expect(pizzeria.toString()).toEqual(`Pizzeria Async Pizza menu: margarita.
Employ 3 cookers.
ingredients: {"floor":5,"water":5,"oil":5,"salt":5,"cheese":5,"sauce":5,"ham":5,"mushrooms":5}`)
})

test('Pizza.order', (done) => {
  const pizzeria = getTestPizzeria()

  pizzeria.order('margarita', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'margarita',
      orderTime: 1000
    })
    done()
  })
})

function getTestPizzeria() {
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
  const menu = [
    {
      name: "margarita",
      ingredients: [
        "cheese",
        "sauce"
      ]
    }
  ]

  return new Pizzeria('Async Pizza', 3, ingredients, menu)
}
