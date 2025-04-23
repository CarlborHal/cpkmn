export default function Login() {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget);
        const formObject = Object.fromEntries(formData.entries())
        console.log(formObject)
        await fetch('http://localhost:3000/login',{
          method: 'POST',
          credentials: 'include',
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formObject)
        })

    }
  return (
    <div>
      hello login
      <form onSubmit = {handleSubmit}>
        <input type='text' name="username" id="username"></input>
        <input type='text' name="password" id="password"></input>
        <button type='submit'>submit</button>
      </form>
    </div>
  )
}
