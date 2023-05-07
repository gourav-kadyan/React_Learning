import React, { useState } from 'react';

const Calculator = () => {
  const [inputOne, setInputOne] = useState('');
  const [inputTwo, setInputTwo] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'inputOne') {
      setInputOne(value);
    } else if (name === 'inputTwo') {
      setInputTwo(value);
    }
  };

  const handleOperatorChange = (event) => {
    const target = event.target;
    const value = target.value;

    setOperator(value);
  };

  const handleCalculate = () => {
    let output;

    if (operator === '+') {
      output = parseInt(inputOne) + parseInt(inputTwo);
    } else if (operator === '-') {
      output = parseInt(inputOne) - parseInt(inputTwo);
    } else if (operator === '*') {
      output = parseInt(inputOne) * parseInt(inputTwo);
    } else if (operator === '/') {
      output = parseInt(inputOne) / parseInt(inputTwo);
    }

    setResult(output);
  };

  return (
    <div>
      <h1>Calculator</h1>
      <div>
        <label htmlFor="inputOne">Input 1:</label>
        <input
          type="text"
          id="inputOne"
          name="inputOne"
          value={inputOne}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="inputTwo">Input 2:</label>
        <input
          type="text"
          id="inputTwo"
          name="inputTwo"
          value={inputTwo}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="operator">Operator:</label>
        <select id="operator" name="operator" onChange={handleOperatorChange}>
          <option value=""></option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
      </div>
      <div>
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      {result && (
        <div>
          <p>Result: {result}</p>
        </div>
      )}
    </div>
  );
};

export default Calculator;
