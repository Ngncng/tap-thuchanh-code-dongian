import { useRef } from 'react'
import './App.css'
import { Fireworks } from '@fireworks-js/react'

function App() {
  const fireworksRef = useRef(null)

  return (
    <>
      <div className="container">
          <div className="fireworks-area">
            < Fireworks 
              ref={fireworksRef}
              options={{
                opacity: 0.9,
                particles: 400,
                explosion: 10,
                intensity: 100
              }}  
            />
          </div>
      </div>
    </>
  )
}

export default App
