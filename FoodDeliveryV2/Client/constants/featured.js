const pizza = require("../assets/images/categories/pizza.png");
const pizzaDish = require("../assets/images/dishes/pizzaDish.jpeg");

export const featured = {
  id: 1,
  title: "Hot and Spicy",
  description: "soft and tender fried chicken",
  restaurants: [
    {
      id: 1,
      name: "Papa Johns1",
      image: pizza,
      description: "Hot and spicy pizzas",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Fast Food",
      dishes: [
        {
          id: 1,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: pizzaDish,
        },
        {
          id: 2,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: pizzaDish,
        },
        {
          id: 3,
          name: "pizza",
          description: "cheezy garlic pizza",
          price: 10,
          image: pizzaDish,
        },
      ],
    },
    {
      id: 2,
      name: "Papa Johns2",
      image: pizza,
      description: "Hot and spicy pizzas",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Pizza",
    },
    {
      id: 3,
      name: "Papa Johns3",
      image: pizza,
      description: "Hot and spicy pizzas",
      lng: 38.2145602,
      lat: -85.5324269,
      address: "434 second street",
      stars: 4,
      reviews: "4.4k",
      category: "Pizza",
    },
  ],
};
