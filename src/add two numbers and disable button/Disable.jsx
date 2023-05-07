import React, { useState } from 'react';

const Disable = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
     alert("button is not disable")
  };

  const handleChange = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isDisabled}
          onChange={handleChange}
        />
        Disable the button
      </label>
      <br />
      <button disabled={isDisabled} onClick={handleClick}>
        Click me!
      </button>
    </div>
  );
};

export default Disable;
