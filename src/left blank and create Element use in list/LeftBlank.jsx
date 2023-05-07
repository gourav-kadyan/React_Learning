import React, { useState } from 'react';

function LeftBlank() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value === '') {
      setNameError('Name is mandatory');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value === '') {
      setEmailError('Email is mandatory');
    } else {
      setEmailError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '') {
      setNameError('Name is mandatory');
    }
    if (email === '') {
      setEmailError('Email is mandatory');
    }
    if (name !== '' && email !== '') {
      alert(`Name: ${name}, Email: ${email}`);
    }
  };

  return (
    <div>
      <h1>Form Validation Example</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
          {nameError && <p className="error">{nameError}</p>}
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
          {emailError && <p className="error">{emailError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LeftBlank;
