import React, { useState } from 'react'

const AddNumbers = () => {

    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [ans , setAns] = useState('');

    const ADDthem = () => {
        setAns(num1+num2)
    }

  return (
    <div>
        <label htmlFor="num1">
            first No. 
            <input type="number"
            value={num1}
            onChange={(e)=>setNum1(+e.target.value)}
            required
            />
        </label>
        <label htmlFor="num1">
            first No. 
            <input type="number" 
            value={num2}
            onChange={(e)=>setNum2(+e.target.value)}
            required
            />
        </label>
        <button onClick={ADDthem} >Add the numbers</button>
        <p>Ans is : {ans}</p>
    </div>
  )
}

export default AddNumbers