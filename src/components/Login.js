import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const navigate = useNavigate()

  const Login = (e) => {       // login butonu ile uygulama sayfasina gecisin saglanmasi 6-16
    e.preventDefault()
    if (props.username.length > 2) {
      navigate("/TodoApp")
    }
    else {
      console.log("d")
      alert("username must be longer than 2 letters")
      navigate("/")
    }
  }

  return (
    <div className='LoginPage'>
      <div className='Login'>
        <p className='p1'>Login</p>
        <p className='p'>Welcome to your To-do app</p>
        <label className='p2'>username:</label>
        <br></br>
        <form type="submit">
        <input onChange={(e => props.setUser(e.target.value))} placeholder={"enter username"} type="text" className="input-user"></input>
        <button onClick={(e) => Login(e)} className="log-in-button">log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login;