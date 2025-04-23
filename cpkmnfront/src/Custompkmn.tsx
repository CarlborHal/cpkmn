type pokemonObject = {
  pokemon: {[key:string]:string}
}


export default function Customize({pokemon}:pokemonObject) {

  return (
    <>
    <div>{pokemon.nickname ? pokemon.nickname:pokemon.name.toUpperCase() }</div>
    <img src = {pokemon.sprite}/>
    <div>{pokemon.move1}</div>
    <div>{pokemon.move2}</div>
    <div>{pokemon.move3}</div>
    <div>{pokemon.move4}</div>
    </>
  )
}
