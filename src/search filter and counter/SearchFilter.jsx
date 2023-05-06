import React, { useEffect, useState } from "react";

const SearchFilter = () => {

    const [data , setData] = useState([
        { id: 1, name: "Gourav" },
        { id: 2, name: "Sam" },
        { id: 3, name: "Ravi" },
        { id: 4, name: "Bipul" },
    ])

    const [record, setRecord] = useState([]);

    useEffect(() =>{
        setRecord(data);
    },[])

   

  const filter = (event) => {
     
    const value = event.target.value.toLowerCase()
    const filtered = data.filter((val) => val.name.toLowerCase().includes(value))
    
    setRecord(filtered)
  }

  return (
    <div className="p-5 bg-white ">
        <input type="text" placeholder="search here..." onChange={filter} />
      <div className="bg-light shadow border">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {record.map((val, id) => (
              <tr key={id}>
                <td>{val.id}</td>
                <td>{val.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchFilter;
