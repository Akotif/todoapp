import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './components/Login'
import TodoApp from './components/TodoApp'
import Header from './components/Header';
import { useEffect, useState } from 'react';

function App() {

  const [style,setStyle ] = useState("Did");
  const [username, setUser] = useState("");
  const [theme, setTheme] = useState()
  
  useEffect(()=>{                                   // localstorage da temanin saklanmasi 14-25
    if(localStorage.getItem('theme')==="dark"){
      setTheme("dark")
      setStyle("Did")
      document.body.style.backgroundColor= "rgb(51, 0, 90)"
    }
    else{
      setStyle("DidL")
      setTheme("light")
      document.body.style.backgroundColor="white"
    }
  },[])

  const changeTheme = () => {                     // tema degistirme islevini gerceklestiren fonksiyon 27-44
    if(theme==="dark"){
      localStorage.setItem('theme', "light")
      setStyle("DidL")
      setTheme("light")
      document.body.style.backgroundColor="white"
    }
    else{
      localStorage.setItem('theme', "dark")
      setTheme("dark")
      setStyle("Did")
      document.body.style.backgroundColor= "rgb(51, 0, 90)"
    }}

    const setUsername=(username)=>{               // kullanici adinin alinmasi ve saklanmasi  41-44
      setUser(username)
      localStorage.setItem('username',username )
    }

  return (
    <div className="App">
      <Header ChangeTheme={changeTheme} theme={theme} ></Header>
      <Routes>
        <Route path="/" element={<Login setUser={setUsername} username={username}></Login>}/>
        <Route path="/TodoApp" element={<TodoApp style={style}></TodoApp>}/>  
      </Routes>
    </div>
  );
}

export default App;
