import { ReactNode, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Counter from './Counter'

function App() {
 

  return (
    <div >
     <Counter>{(num:number) =><>Current Count:{num}</>}</Counter>
    </div>
  )
}

export default App
