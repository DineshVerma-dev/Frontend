import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import First from './Components/First'
import Second from './Components/Second'
import Third from './Components/Third'
import Four from './Components/Four'
import Five from './Components/Five'
import Six from "./Components/Six"
import Seven from './Components/Seven'
import Eight from './Components/Eight'
import Nine from './Components/Nine'


function App() {
  const [input, setInput] = useState("dinesh")
  const items = ['item1', 'item2', 'item3', 'anotheritems1', 'anotheritem2']

  return (
    <>
      {/* <h1> This is React Learning project</h1>
      <input
        value={input}
        type='text'
        onChange={(e) => { setInput(e.target.value) }}
        placeholder='text'
      />
      The text is : {input} */}
      {/* 
      <First />
      <Second />
      <Third />
      <Four />
      <Five />
      <Six /> */}
      {/* <Seven/> */}
      {/* <Nine /> */}
      <Ten items={items}/>
    </>
  )
}

export default App
