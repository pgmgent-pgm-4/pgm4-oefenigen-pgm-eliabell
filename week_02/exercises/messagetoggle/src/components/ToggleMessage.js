import React, {useState}from 'react'

export default function ToggleMessage({message}) {
    const [showMessage, setShowMessage] = useState(true)	
    const handleClickShow = () => {
        setShowMessage(!showMessage)
    }
  return (
    <div>
        <button onClick={handleClickShow} > Toggle Message </button>
        {showMessage && <h1>{message}</h1>}
    </div>
  )
}
