import React, { useRef, useState } from "react";

const CheckBoxRef = () => {
  const languages = ["C", "Java", "JS"];
  const [hobbies, setHobbies] = useState("");
  const inputRef = useRef([]);

  const handleButtonOnClick = () => {
    const hobby = inputRef.current
      .filter(Boolean)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value)
      .join(", ");

    setHobbies(hobby);
  };

  return (
    <>
      <ul>
        {languages.map((language, i) => (
          <li key={language}>
            <label>
              <input
                type="checkbox"
                value={language}
                ref={(el) => {
                  inputRef.current[i] = el;
                }}
              />
              <span>{language}</span>
            </label>
          </li>
        ))}
      </ul>

      <div>
        <button onClick={handleButtonOnClick}>취미 확인하기!😎</button>
        <h1>결과</h1>
        {hobbies}
      </div>
    </>
  );
};

export default CheckBoxRef;
