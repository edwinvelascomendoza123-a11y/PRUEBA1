import './App.css'
import { useState } from 'react';

const Contador = () => {
  const [count, setCount] = useState(0)
  return (
   <div>
        <button
          type="button"
          /* className="counter" */
          onClick={() => setCount((count) => count + 1)}    >
          Count is {count}
        </button>
      
    </div>
  )
}

export default Contador

