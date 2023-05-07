import React, { useEffect, useState } from 'react'

const FetchApi = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(user => (
            setUsers(user)
        ))
    },[])
  return (
    <>
        {
            users.length > 0 && (
                users.map((user) => (
                    <ul key={user.id} >
                        <li>{user.name}</li>
                    </ul>
                ))
            )
        }
    </>
  )
}

export default FetchApi