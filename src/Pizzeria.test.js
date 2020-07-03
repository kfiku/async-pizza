import Pizzeria from './Pizzeria'

function getTestPizzeria() {
  const ingredients = {
    floor: 5,
    water: 5,
    salt: 5,
    cheese: 5,
    sauce: 5,
    ham: 5,
    mushrooms: 5,
    oregano: 5,
    pepper: 5,
    chicken: 5,
  }
  const menu = [
    {
      name: 'margarita',
      ingredients: ['cheese','sauce']
    },
    {
      name: 'polo',
      ingredients: ['cheese', 'sauce', 'ham', 'mushrooms', 'oregano']
    },
    {
      name: 'funghi',
      ingredients: ['cheese', 'sauce', 'mushrooms', 'oregano']
    },
    {
      name: 'ham',
      ingredients: ['cheese', 'sauce', 'ham']
    },
    {
      name: 'wegetariana',
      ingredients: ['cheese','sauce','pepper','mushrooms', 'oregano']
    },
    {
      name: 'chicken',
      ingredients: ['cheese','sauce','chicken','pepper']
    },
    {
      name: 'maxi',
      ingredients: ['cheese','sauce','ham','mushrooms', 'chicken', 'oregano', 'pepper']
    }
  ]

  return new Pizzeria('Async Pizza', 3, ingredients, menu)
}

test('Pizza.toString', () => {
  const pizzeria = getTestPizzeria()

  expect(pizzeria.toString()).toEqual(`Pizzeria Async Pizza menu: margarita, polo, funghi, ham, wegetariana, chicken, maxi.
Employ 3 cookers.
ingredients: {"floor":5,"water":5,"salt":5,"cheese":5,"sauce":5,"ham":5,"mushrooms":5,"oregano":5,"pepper":5,"chicken":5}`)
})

test('No pizza in menu', (done) => {
  const pizzeria = getTestPizzeria()

  pizzeria.order('texas', (error, pizza) => {
    expect(error).toBe('no pizza in menu')
    expect(pizza).toEqual({
      name: 'texas',
      orderTime: 0
    })
    done()
  })
})

test('Pizza - only one pizza', async (done) => {
  const pizzeria = getTestPizzeria()

  await pizzeria.order('margarita', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'margarita',
      orderTime: 7000
    })
    done()
  })
}, 20000)

test('Pizza - order all pizzas', async (done) => {
  const pizzeria = getTestPizzeria()

  await pizzeria.order('margarita', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'margarita',
      orderTime: 7000
    })
  })

  await pizzeria.order('polo', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'polo',
      orderTime: 10000
    })
  })

  await pizzeria.order('funghi', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'funghi',
      orderTime: 9000
    })
  })

  await pizzeria.order('polo', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'polo',
      orderTime: 10000
    })
  })

  await pizzeria.order('maxi', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'maxi',
      orderTime: 12000
    })
  })

  await pizzeria.order('margarita', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'margarita',
      orderTime: 14500
    })
  })

  await pizzeria.order('ham', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'ham',
      orderTime: 8000
    })
  })

  await pizzeria.order('maxi', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'maxi',
      orderTime: 12000
    })
  })

  await pizzeria.order('superior', (error, pizza) => {
    expect(error).toBe('no pizza in menu')
    expect(pizza).toEqual({
      name: 'superior',
      orderTime: 0
    })
  })

  await pizzeria.order('wegetariana', (error, pizza) => {
    expect(error).toBe(null)
    expect(pizza).toEqual({
      name: 'wegetariana',
      orderTime: 13000
    })
    done()
  })
}, 100000)



