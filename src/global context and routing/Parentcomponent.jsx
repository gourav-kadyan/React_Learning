import React from 'react'
import Mycontext from './Mycontext'
import { RouterProvider } from 'react-router-dom'
import Child1 from './Child1'
import Child2 from './Child2'

const Parentcomponent = () => {

    const value = {
        'name' : 'Gourav Kadyan',
        'age' : 21,
    }

  return (
        <Mycontext.Provider value={value}>
            <Child1/>
            <Child2/>
        </Mycontext.Provider>
  )
}

export default Parentcomponent