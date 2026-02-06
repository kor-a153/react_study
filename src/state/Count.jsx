import React, { useState } from 'react';

const Count = () => {
<<<<<<< HEAD
  
  // 훅함수 - use...
  // useState(초기값)
  const [number, setNumber] = useState(0)

  const decrease = () => {
    setNumber(number - 1)
  }

  const increase = () => {
    setNumber(number + 1)
=======

  // 훅함수 - use....
  const [number, setNumber] = useState(0)


  const decrease = () => {
    setNumber(number - 1)
  }
  const increase = () => {
  setNumber(number + 1)
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
  }

  return (
    <div>
      <button onClick={decrease}>-1</button>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
    </div>
  );
};

<<<<<<< HEAD
=======

let number = 0;

>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
export default Count;