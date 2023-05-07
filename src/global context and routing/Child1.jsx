import React, { useContext } from 'react'
import Mycontext from './Mycontext'

const Child1 = () => {
    const { name } = useContext(Mycontext)
  return (
    <div>{name}</div>
  )
}

export default Child1