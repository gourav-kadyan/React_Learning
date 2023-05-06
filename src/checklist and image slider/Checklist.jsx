import React, { useState } from 'react'

const Checklist = () => {

    const [options, setOptions] = useState([
        {'id':1, 'name':'Opt1', selected : false},
        {'id':2, 'name':'Opt2', selected : false},
        {'id':3, 'name':'Opt3', selected : false},
        {'id':4, 'name':'Opt4', selected : false},
        {'id':5, 'name':'Opt5', selected : false},
        {'id':6, 'name':'Opt6', selected : false},
        {'id':7, 'name':'Opt7', selected : false},
    ])

    const onchangehandler = (id) => {
        const newOptions = options.map((option) => {
            if(option.id === id){
                return {...option, selected : !option.selected}
            }
            else{
                return option
            }
        })
        setOptions(newOptions)
    }

  return (
    <>
        <h1>Checklist</h1>
        {options.map((option) => (
            <div key={option.id} >
                <label>
                    <input type="checkbox" checked={option.selected} onChange={() => onchangehandler(option.id) } />
                    {option.name}
                </label>
            </div>
        ))}

        <h2>Selected Options</h2>
        {options.filter(option => option.selected).map((option) => (
            <ul key={option.id} >{option.name}</ul>
        ))}
    </>
  )
}

export default Checklist