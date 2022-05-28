import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import './styles.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className='title'>Buscador CEP</h1>

      <div className='containerInput'>
        <input 
        type="text"
        placeholder='Digite seu CEP...'
         />
         <button className='buttonSearch'>
           <FiSearch size={25} color="#000" />
         </button>
         </div>
      <main className='main'>
        <h2>CEP: 22451062</h2>

        <span>Rua</span>
        <span>Complemento</span>
        <span>Rocinha</span>
        <span>Rio de Janeiro - RJ</span>
      </main>
    </div>
  )
}

export default App
