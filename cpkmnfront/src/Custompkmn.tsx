type pokemonObject = {
  pokemon: {[key:string]:string}
}


export default function Customize({pokemon}:pokemonObject) {

  return (
    <><div>
      <div>______________</div>
    <div><b>{pokemon.nickname ? pokemon.nickname:pokemon.name.toUpperCase() }</b></div>
    <img src = {pokemon.sprite}/>
    <div>{pokemon.move1.toUpperCase()}</div>
    <div>{pokemon.move2.toUpperCase()}</div>
    <div>{pokemon.move3.toUpperCase()}</div>
    <div>{pokemon.move4.toUpperCase()}</div>
    </div>
    </>
    
  )
}
