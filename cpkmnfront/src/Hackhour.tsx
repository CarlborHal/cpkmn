import { useState } from 'react';

export default function Hackhour() {
  const [num, setNum] = useState<number>(0);
  const [arr, setArr] = useState<string>('');
  const [ans, setAns]= useState<boolean | null| string>('placeholder')

  function handleChange(event:React.FormEvent<HTMLFormElement>) {
    const target = event.target as HTMLInputElement;
    if (target.id === 'number') {
        setNum(Number(target.value))


    } else if (target.id === 'array') {

        setArr(target.value)

    }

  }
  function handleSubmit(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();

    const realNum = Number(num) as number;
    const realArr:number[]=JSON.parse(arr as string)



    // console.log(Array.isArray(realArr))
    // const newArr= realArr.trim()
    let l= 0;
    let r = realArr.length-1;
    console.log(realArr)
    while (l<=r){
        const m = Math.floor((l+r)/2)
        if (realArr[m]===realNum)
            { setAns(true)
                return}
        else if (realArr[m]>realNum) r=m-1//5 looking for 2, move r
        else if (realArr[m]<realNum) l=m+1
    }
    setAns(false)
    return
  }
  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
      <input type='text' name='number' id = 'number' placeholder='number'></input>
      <input type='text' name='array' id = 'array' placeholder ='array'></input>
      <button type='submit'>submit</button>
      </form>
      {String(ans)}

    </div>
  );
}
