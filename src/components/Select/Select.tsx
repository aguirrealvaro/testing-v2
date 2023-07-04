import React, { FunctionComponent, useState } from "react";

export const Select: FunctionComponent = () => {
  const [animal, setAnimal] = useState<string | undefined>(undefined);

  const onSelectDog = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAnimal(event.target.value);
  };

  return (
    <div style={{ marginTop: "3rem" }}>
      <select onChange={onSelectDog} role="combobox">
        <option>Select option</option>
        <option value="perro">perro</option>
        <option value="gato">gato</option>
      </select>
      {animal && <span data-testid="selected-animal">{animal}</span>}
    </div>
  );
};
