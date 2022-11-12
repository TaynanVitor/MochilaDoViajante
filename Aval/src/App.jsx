import { useState } from "react"
import Card from "./components/Card";
import Form from "./components/Form";
import "./style.css"

function App() {

  const [nome, setnome] = useState("")
  const [nomePokemon, setnomePokemon] = useState("")
  const [formData, setFormData] = useState({conteudo: ""});
  const [pokemon, setpokemon] = useState([]);




  return(

 <div>
    <h1 className="Title">Monte seu time Pokemon</h1>
    <div>
      
        <Form
          nome={nome}
          nomePokemon={nomePokemon}
          pokemon={pokemon}
          formData={formData}
          setFormData={setFormData}
          setnome={setnome}
          setnomePokemon={setnomePokemon}
          setpokemon={setpokemon}
        />
    </div>
    
      
    <div >
        {
          pokemon.map((pokemon)=>{
            return(
            <Card pokemon={pokemon}/>
            )
          })
        }
    </div>
  </div>
  )
}

export default App