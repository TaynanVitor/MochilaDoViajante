

function Form(props){


  function salvarPokemon(event){
   
    event.preventDefault();
    
    if(props.nome == ""){
      alert("Preencha o nome da equipe de Pokemons");
      return;
    }
    if(props.nomePokemon == ""){
        alert("Preencha o nome do Pokemons");
        return;
    } 

    if(props.formData.conteudo == ""){
        alert("Escolha um Pokemon");
        return;
    } 

  

    if(props.formData.conteudo == "Bulbasaur" ){
        return props.formData.conteudo=("Image/pngfind.com-bulbasaur-png-157920.png");
    } 
    if(props.formData.conteudo == "Charmander" ){
        return props.formData.conteudo=("Image/pngfind.com-charmander-png-2391897.png");
    } 

    if(props.formData.conteudo == "Squirtle" ){
        return props.formData.conteudo=("Image/pngfind.com-squirtle-png-69396.png");
    } 

    if(props.formData.conteudo == "Pikachu" ){
        return props.formData.conteudo=("Image/toppng.com-pokemon-1600x1436.png");
    } 

    if(props.formData.conteudo == "Ivysaur" ){
        return props.formData.conteudo=("Image/pngfind.com-ivysaur-png-1428059.png");
    } 

    if(props.formData.conteudo == "Venusaur" ){
        return props.formData.conteudo=("Image/pngfind.com-ivysaur-png-2209227.png");
    } 

    if(props.formData.conteudo == "Charmeleon" ){
        return props.formData.conteudo=("Image/pngfind.com-charmeleon-png-1972548.png");
    } 

    if(props.formData.conteudo == "Charizard" ){
        return props.formData.conteudo=("Image/pngfind.com-charizard-png-336021.png");
    } 

    if(props.formData.conteudo == "Wartortle" ){
        return props.formData.conteudo=("Image/toppng.com-pokemon-1600x1436.png");
    } 

    if(props.formData.conteudo == "Blastoise" ){
        return props.formData.conteudo=("Image/toppng.com-pokemon-1600x1436.png");
    } 

    if(props.formData.conteudo == "Caterpie" ){
        return props.formData.conteudo=("Image/pngfind.com-ash-ketchum-png-190988.png");
    } 

    if(props.formData.conteudo == "Metapod" ){
        return props.formData.conteudo=("Image/pngwing.com.png");
    } 

    if(props.formData.conteudo == "Butterfree" ){
        return props.formData.conteudo=("Image/pngfind.com-butterfree-png-6627466 (1).png");
    } 

    if(props.formData.conteudo == "Weedle" ){
        return props.formData.conteudo=("Image/pngfind.com-link-face-png-6927017.png");
    } 

    if(props.formData.conteudo == "Kakuna" ){
        return props.formData.conteudo=("Image/pngfind.com-rotom-png-4377549.png");
    } 

    if(props.formData.conteudo == "Beedrill" ){
        return props.formData.conteudo=("Image/pngfind.com-beedrill-png-6903480.png");
    } 

    if(props.formData.conteudo == "Pidgey" ){
        return props.formData.conteudo=("Image/pngfind.com-pidgey-png-1083633.png");
    } 

    if(props.formData.conteudo == "Pidgeot" ){
        return props.formData.conteudo=("Image/pngfind.com-pidgeot-png-1359890.png");
    } 





  




    else{

      props.setpokemon([...props.pokemon, {
        nome:props.nome,
        nomePokemon:props.nomePokemon,
        formData:props.formData.conteudo
      } ])
      
    }  

   
    
   
    

  }
  


  return ( 
    <form className="form" onSubmit={salvarPokemon} >
        
        <div>
         <select value={props.formData.conteudo} onChange={(event)=> props.setFormData({...props.formData, conteudo:event.target.value})}>
            <option disabled hidden value="">
              Selecione um Pokemon
            </option>
            <option className="bulbasaur" value="">Escolha um Pokemon</option>
            <option value="Bulbasaur">Bulbasaur</option>
            <option value="Ivysaur">Ivysaur</option>
            <option value="Venusaur">Venusaur</option>
            <option value="Charmander">Charmander</option>
            <option value="Charmeleon">Charmeleon</option>
            <option value="Charizard">Charizard</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Bulbasaur">Bulbasaur</option>
            <option value="Squirtle">Squirtle</option>
            <option value="Wartortle">Wartortle</option>
            <option value="Blastoise">Blastoise</option>
            <option value="Caterpie">Caterpie</option>
            <option value="Metapod">Metapod</option>
            <option value="Butterfree">Butterfree</option>
            <option value="Pikachu">Pikachu</option>
            <option value="Weedle">Weedle</option>
            <option value="Kakuna">Kakuna</option>
            <option value="Beedrill">Beedrill</option>
            <option value="Pidgey">Pidgey</option>
            <option value="Pidgeot">Pidgeot</option>
            <input 
            // onChange={(event)=>props.setFormData(event.target.value)} 
            />
          </select>

          

            <input 
            value={props.nome} 
            onChange={(event)=>props.setnome(event.target.value)} 
            placeholder="Digite o nome da equipe"/>


            <input 
            value={props.nomePokemon} 
            onChange={(event)=>props.setnomePokemon(event.target.value)} 
            placeholder="Digite um nome para o seu Pokemon"/>
        </div>
        
        <button type="button" onClick={salvarPokemon}>Adicionar( Double Click )</button>

  </form>
  )
  
}

export default Form;