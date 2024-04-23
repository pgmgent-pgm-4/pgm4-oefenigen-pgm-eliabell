import React, {useState} from 'react'

export default function Username() {
    const [name, setName] = useState('')
  return (
    <div>
      <div>{name}</div>
    <label htmlFor='username'>username </label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
    </div>
  )
}
