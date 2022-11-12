


function Card(props){
    return(
      <div className="cards">
        <h1 className="cardPokemon">{props.pokemon.nome}</h1>   
        <h2>{props.pokemon.nomePokemon}</h2> 
        
        <img src={props.pokemon.formData} width={120} height={120}/>
        <img className="pokeBall" src="Image\clipart1298390.png"/>
      </div>
    )
  }
  
  export default Card;


  // <img src={props.formData.conteudo} alt="" />
  // <img src={props.formData.conteudo} alt="" />
  // <img src={props.pokemon.formData.conteudo} width={120} height={120}/> 
  // <h2 className="imgPokemon">{props.pokemon.formData}</h2>