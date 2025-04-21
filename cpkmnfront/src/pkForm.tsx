import {useState} from 'react';
export default function pkForm() {
  const [name, setName] = useState("");
  const fetchPokemon = async (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}`)
    await fetch(`/?name=${name}`);
  }
  // await fetch() (build backend here). then, when fetch done, give it 4 moves

  return (
<div>
{ /* submit to backend */}
    <form onSubmit={fetchPokemon}>
      <input
        id="pkmn-puller"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button id='button' type="submit">Get Pokemon</button>
    </form>
  </div>
);
}

