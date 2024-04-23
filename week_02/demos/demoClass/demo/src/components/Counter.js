import React from 'react'

export default function Counter() {
    const [count, setCount] = React.useState(0)
    const handleClickAdd = () => {
        setCount((prev) => prev + 1)
    }
    const handleClickDelete = () => {
        setCount((prev) => prev - 1)
    }
  return (
    <div>
      <button onClick={handleClickAdd} > + </button>
        <h1>{count}</h1>
        <button onClick={handleClickDelete} > -  </button>
    </div>
  )
}
