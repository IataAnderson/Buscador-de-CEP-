import { useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import Api from './services/Api.jsx';
import './styles.css';
import {FaReact} from 'react-icons/fa'

function App() {
  /*Dentro da const ta o nome do nosso estado = input, depois setInput é a função que a gente tem
  para trocar o valor do estado*/
  /* input chama o valor do estado, setInput passa um valor novo para o estado*/
  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});

  async function handleSearch() {
    //22451041/json/
    
    if(input === ''){
      alert("Preencha algum cep!")
      return;
    }
    try{
      const response = await Api.get(`${input}/json`);
      setCep(response.data)
      setInput("")

    }catch{
      alert("Ops erro ao buscar...")
      setInput("")
      

    }

  }

  return (
    <div className="container">
      <h1 className='title'>Buscador de CEP
      {/*---- Inserindo icone com a lib "react-icons"---------------*/}
       <FaReact className='iconeReact' size={80} color="#000" />
       </h1>
       
{/*-------------Criando DIV do input--------------*/}
      <div className='containerInput'>
        <input 
        type="text"
        placeholder='Digite seu CEP...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
         />
         {/*------------------Criando botão---------------*/}
         <button className='buttonSearch' onClick={handleSearch}>
           <FiSearch size={25} color="#000" />
         </button>
         </div>
         {/* Acessando a useStates e verificando se tem alguma propriedade dentro do objeto*/}
         {/*length é o tamanho do objeto, se o objeto for maior que 0 é pq tem algo e o main aparece*/}
        {Object.keys(cep).length > 0 && (
          <main className='main'>
          <h2>CEP: {cep.cep}</h2>  
          <span>Logradouro:{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>Bairro:{cep.bairro}</span>
          <span>Cidade:{cep.localidade} - {cep.uf}</span>
        </main>

        )} 
      
    </div>
  )
}

export default App
