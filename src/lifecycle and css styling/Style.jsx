import React from 'react';
import './style.css'

function Style() {
  const styles = {
    color: 'yellow',
    backgroundColor: 'black',
    padding: '10px',
    border: '2px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  };

  const classNames = {
    button: 'btn',
    primaryButton: 'btn-primary',
  };

  const buttonStyles = {
    padding: '10px',
    backgroundColor: 'green',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
  };

  return (
    <div style={styles}>
      <h1>CSS Styling Example</h1>
      <p>This text has yellow color and black background</p>
      <button className={classNames.button} style={buttonStyles}>Button</button>
      <button className={`${classNames.button} ${classNames.primaryButton}`}>Primary Button</button>
      <p style={{ fontStyle: 'italic' }}>This text is italic</p>
      <p className="special-text">This text has a special class name</p>
    </div>
  );
}

export default Style;
