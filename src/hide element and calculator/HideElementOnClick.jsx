import React, { useState } from 'react';

const HideElementOnClick = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleHideClick = () => {
    setIsVisible(false);
  };

  return (
    <div>
      {isVisible && (
        <div>
          <p>Hello, world!</p>
          <button onClick={handleHideClick}>Hide me!</button>
        </div>
      )}
    </div>
  );
};

export default HideElementOnClick;
