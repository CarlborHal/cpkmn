import {FormEvent} from 'react'
import {useForm} from "react-hook-form"
export default function Login() {

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        // fetch()
    }
  return (
    <div>
      hello authentication
      <form onSubmit = {handleSubmit}>
        <input type='text' name="username" id="username"></input>
        <input type='text' name="password" id="password"></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
