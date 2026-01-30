import React, { useState } from "react";

const Attendance = ({ name, isPresent }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => setIsSelected((prev) => !prev);

  return (
    <li
      onClick={handleClick}
      style={{ color: isSelected ? "blue" : "black", cursor: "pointer" }}
    >
      이름: {name}({isPresent ? "출석" : "결석"})
    </li>
  );
};
// 이런 기능은 팝업에 사용하곤 함
export default Attendance;