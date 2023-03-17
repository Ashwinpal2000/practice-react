import React, { useState } from 'react'

const IncreamentDecreament = () => {
  const [number, setNumber] = useState(0);

  const handleIncreament = () => {
    if (number < 100) {

      setNumber(prev => prev + 10);
    }
  }
  const handleDecreament = () => {
    if (number > 0) {

      setNumber(prev => prev - 10);
    }
  }

  return (
    <div>
      <h1>2. Increament-Decreament</h1><br />
      <h2>{number}</h2>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
    </div>
  )
}

export default IncreamentDecreament;