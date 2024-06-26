import React, { useContext } from 'react'
import UserContext from '../../contextApi/UserContext'

export const Masters = () => {
  const { name } = useContext(UserContext);
  
  return (
    <div>Welcome, {name}</div>
  )
}
