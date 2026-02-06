<<<<<<< HEAD
import React, { useState } from 'react';

const Attendance = ({name, isPresent}) => {
  const [isSelected, setIsSelected] = useState(false);
  const handleSelecedOnClick = () => {
    setIsSelected(!isSelected)
  }

  return (
    <li style={{color: isSelected ? "blue" : ""}} onClick={handleSelecedOnClick}>
=======
import React, { useState } from "react";

const Attendance = ({ name, isPresent }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => setIsSelected((prev) => !prev);

  return (
    <li
      onClick={handleClick}
      style={{ color: isSelected ? "blue" : "black", cursor: "pointer" }}
    >
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
      이름: {name}({isPresent ? "출석" : "결석"})
    </li>
  );
};
<<<<<<< HEAD

=======
// 이런 기능은 팝업에 사용하곤 함
>>>>>>> 9335dc045838e56ed5ce81a55c38fc2cdda94b17
export default Attendance;