import {FormEvent, useState} from 'react';
import PokeDisplay from './pokeDisplay.tsx';
type pkmnDetails ={
  name: string;
  sprites:{
    front_default: string;
  }//have to do types like this, cant use .notation
}
export default function PkForm() {
  const [pokemon, setPokemon] = useState<string>('');
  const [data, setData] = useState<{[key:string]:string}>({})
  const fetchPokemon = async (event: FormEvent<HTMLFormElement>) => {;
    event.preventDefault()
    console.log('hi')
    const pkmn:Response = await fetch(`http://localhost:3000/?name=${pokemon}`,
      {method:'GET',
      credentials: 'include'}
    );
    const pkmnJSON = await pkmn.json();
    const pkmnJSONclean = pkmnJSON as pkmnDetails;
    
    //awaits dont return strings as i thought, or even normal objects. Response type god dammit struggled a lot
    //and therefore we dont' use json.parse we use object.json();
    // console.log(pkmnJSON)
    //react router
    //components MUST BE CAPITALIZED IT IS NOT A CONVENTION
    const picks:{[key:string]: string} = {
      sprite : pkmnJSONclean.sprites.front_default,
      name : pkmnJSONclean.name
    }
    setData(picks);
    console.log(picks)
  }

  // console.log(data);
  // fetch is working. now:
  //make state object to track an array, where pokemon goes
  //and then map that into components, each containing:
  //sprite
  return (
<div>
{ /* submit to backend */}
    <form onSubmit={fetchPokemon}>
      <input
        id="pkmn-puller"
        onChange={e => setPokemon(e.target.value)}
      />
      <button id='button' type="submit">Get Pokemon</button>
    </form>
    <PokeDisplay name= {data.name} sprite = {data.sprite}/>

  </div>
);
}

// const MarketsDisplay = props => (
//   <div className="displayBox">
//     <h4>Markets</h4>
//     <div className="allMarkets">
//       {props.marketList.map((market, idx) => marketMaker(market, idx, props))}
//     </div>
//   </div>
// );

