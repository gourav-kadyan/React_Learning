import React, { useState } from "react";

const Below = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>Entered data:</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Name: {item.name} | Email: {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Below;
