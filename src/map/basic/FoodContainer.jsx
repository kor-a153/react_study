import React from 'react';
<<<<<<< HEAD
import Food from './Food';
=======
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17

const FoodContainer = () => {
  
  const foods = [
    {
<<<<<<< HEAD
      id: 1,
      name: "치킨공식"
    },
    {
      id: 2,
      name: "종로김밥"
    },
    {
      id: 3,
      name: "버거킹"
    },
    {
      id: 4,
      name: "KFC"
    },
    {
      id: 5,
      name: "명동칼국수"
    },
  ]

  const foodList = foods.map(({name}, i) => (
    <Food key={i} name={name} />
  ))

  return (
    <div>
      <ul id="result">
        {foodList}
=======
      id:1,
      name : "치킨공식",

      id:2,
      name : "종로김밥",

      id:3,
      name : "버거킹",

      id:4,
      name : "KFC",
      
      id:5,
      name : "명동칼국수"

    }
  ]

  const foodList = foods.map((food, i) => (
    <li key={i}>{food.name}</li>
  ))
  return (
    <div>
      <ul id='result'>
      {foodList}
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
      </ul>
    </div>
  );
};

<<<<<<< HEAD
export default FoodContainer;
=======
export default FoodContainer;
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
