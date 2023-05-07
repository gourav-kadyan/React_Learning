import React, { useContext } from 'react'
import Mycontext from './Mycontext'

const Child2 = () => {
    const {age} = useContext(Mycontext)

  return (
    <div>{age}</div>
  )
}

export default Child2