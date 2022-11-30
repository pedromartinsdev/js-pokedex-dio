function loadPokemon(){
  let url = 'https://pokeapi.co/api/v2/pokemon/1/';
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {

      })
      .catch((error) => {
        console.log("Erro: " + error)
      })
}

document.getElementById('load-more').onclick = loadPokemon