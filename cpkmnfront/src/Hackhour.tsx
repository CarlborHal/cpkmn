import { useState, useReducer } from 'react';

type ansActionObject = {type :'false'} | {type:'true'}|{type: null};
export default function Hackhour() {
  const [num, setNum] = useState<number>(0);
  const [arr, setArr] = useState<string>('');
  // const [ans, setAns]= useState< string>('this bolded text will be (hopefully) replaced by true/false based on algo output')
  const [ans, dispatch]=useReducer(reducer,'this is a placeholder')
  function reducer(_state: any, action:ansActionObject){
    switch(action.type){
      case 'true':
      return 'dispatcher says true'
    
    case 'false':
      return 'dispatcher says false'
  }
}
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

//getting typing to work
//dont test recursive stuff in your browser
//form events again, and using state to track variables was very difficult
//also leads to a lot of confusion: i have to juggle multiple types and only render variables whne they are a specific type which really confsued me
    // console.log(Array.isArray(realArr))
    // const newArr= realArr.trim()
    let l= 0;
    let r = realArr.length-1;
    console.log(realArr)
    const action={type:null} as ansActionObject;
    while (l<=r){
        const m = Math.floor((l+r)/2)
        if (realArr[m]===realNum){
          action.type='true';
            { dispatch(action)
                return}
        }
        else if (realArr[m]>realNum) r=m-1//5 looking for 2, move r
        else if (realArr[m]<realNum) l=m+1
    }
    action.type='false';
    dispatch(action)
    return
  }
  return (
    <div>
      <form onChange={handleChange} onSubmit={handleSubmit}>
      <input type='text' name='number' id = 'number' placeholder='number'></input>
      <input type='text' name='array' id = 'array' placeholder ='array'></input>
      <button type='submit'>submit</button>
      </form>
      <div>FindinOrganizedSet</div>
      <b>{ans}
      </b>
    </div>
  );
}



// which extends html element

//  HTML Form element: vanilla typescript
//interface HTMLFormElement extends HTMLElement {
//   readonly elements: HTMLFormControlsCollection;
//   readonly length: number;
  
//   name: string;
//   method: string;
//   action: string;
//   enctype: string;
//   target: string;
//   noValidate: boolean;
//   autocomplete: string;
//   acceptCharset: string;

//   submit(): void;
//   reset(): void; 
//   checkValidity(): boolean;
//   reportValidity(): boolean;
// }
//    interface FormEvent<T = Element> extends SyntheticEvent<T> {}
//    interface SyntheticEvent<T = Element, E = Event> extends BaseSyntheticEvent<E, EventTarget & T, EventTarget> {}
//    interface BaseSyntheticEvent<E = object, C = any, T = any> {
//   nativeEvent: E;
//   currentTarget: C;
//   target: T;
//   bubbles: boolean;
//   cancelable: boolean;
//   defaultPrevented: boolean;
//   eventPhase: number;
//   isTrusted: boolean;
//   preventDefault(): void;
//   isDefaultPrevented(): boolean;
//   stopPropagation(): void;
//   isPropagationStopped(): boolean;
//   persist(): void;
//   timeStamp: number;
//   type: string;
// }