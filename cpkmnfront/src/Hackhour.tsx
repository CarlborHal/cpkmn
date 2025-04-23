import { useState } from 'react';

export default function Hackhour() {
  const [num, setNum] = useState<number>(0);
  const [arr, setArr] = useState<number[]|string>([]);

  function handleChange(event:React.FormEvent<HTMLFormElement>) {
    if (event.target.id === 'number') {
        setNum(event.target.value)
        console.log(num)
    } else if (event.target.id === 'array') {

        setArr(event.target.value)
        console.log(arr)
    }
  }
  function handleSubmit(event){
    console.log(event)
    console.log(num)
    console.log(arr)
  }
  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
      <input type='text' name='number' id = 'number'></input>
      <input type='text' name='array' id = 'array'></input>
      <button type='submit'>submit</button>
      </form>
    </div>
  );
}
