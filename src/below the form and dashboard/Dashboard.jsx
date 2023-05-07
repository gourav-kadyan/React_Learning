import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
       axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <table style={{border : '4px solid black'}} >
        <thead >
          <tr style={{border : '4px solid black'}}>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={{border : '4px solid black'}}>{user.name}</td>
              <td style={{border : '4px solid black'}}>{user.email}</td>
              <td style={{border : '4px solid black'}}>{user.phone}</td>
              <td style={{border : '4px solid black'}}>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
