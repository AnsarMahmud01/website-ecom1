import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Shop from './components/Shop/Shop'
import Info from './components/Info/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ height: '1000px' }}>
      {/* <Header></Header>
      <Shop></Shop>
      <Info></Info> */}
    </div>
  )
}

export default App
