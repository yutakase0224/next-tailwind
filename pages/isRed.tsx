import React, { useState } from 'react'

const CountUp = () => { 
  const [isRed, setIsRed] = useState(false)
  return (
	<>
	   <button 
	   className={isRed? "bg-red-500": "bg-blue-500"} 
	   onClick={() => setIsRed(!isRed)}
	   > 
	     Click me 
	   </button> 
	</>
  ) 
}

export default CountUp