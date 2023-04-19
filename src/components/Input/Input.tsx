import React, { FunctionComponent, useState } from "react";

export const Input: FunctionComponent = () => {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    setList([...list, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <div>
        <h2>TODO List:</h2>
        {Boolean(list.length) && (
          <ul>
            {list.map((item) => {
              return <li key={item}>{item}</li>;
            })}
          </ul>
        )}
      </div>
      <div>
        <label htmlFor="todo">Add todo item:</label>
        <input type="text" id="todo" name="todo" onChange={handleInput} value={inputValue} />
        <button onClick={handleAddItem}>Add</button>
      </div>
    </div>
  );
};
