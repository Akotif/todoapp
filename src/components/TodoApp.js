import React from 'react'
import Input from './Input';
import {useEffect, useState} from "react"
import axios from 'axios';
import Todos from './Todos';
import Completed from './Completed';

const TodoApp = (props) => {
  
  const initalState = []
  const [data, setData] = useState(initalState);
  const [todos, setTodos] = useState(initalState);
  const [todoValue, setTodo] = useState("")
  const [ToDid, setToDid] = useState(initalState)
  const [loaded, setLoaded] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editValue, setValue]=useState();
  let username =localStorage.getItem('username')
  
  useEffect(() => {                                  // veriler api dan cekilip state aktariliyor 20-26
    const url = "https://631072d3826b98071a41a57c.mockapi.io/todos"
    axios.get(url)
      .then((res) =>
        setData(res.data)).catch(console.error)
        setLoaded("true")
  }, [])

  useEffect(() => {                                  // api dan cekilen veriler completed ve todo olarak ikiye ayriliyor 28-33
    const newtodo = data.filter((c) => c.isCompleted === false)
    setTodos(newtodo)
    const did = data.filter((c) => c.isCompleted !== false)
    setToDid(did)  
  },[data])

  const ClickHandler = (e) => {                      // todo eklemek icin calisan fonksiyon 35-49
    e.preventDefault();
    if (!(todoValue.length < 3))  {
      const url = "https://631072d3826b98071a41a57c.mockapi.io/todos"
      let id = (todos.length+ToDid.length)+1
      let newTodo = { content: todoValue, isCompleted: false, id: id }
      setTodos((current) => [...current, newTodo])
      axios.post(url, { content: todoValue })
      setTodo("")
      id++
    }
    else {
      alert("it must be longer than 2 letters")
      setTodo("")
    }}
    
  const complete = (todo) => {                     // complete veya move to to-do ya tasimak icin calisan fonksiyon 51-70
    let url = "https://631072d3826b98071a41a57c.mockapi.io/todos/" + (todo.id)
    if (todo.isCompleted === false) {
      const newtodo = todos.filter((c) => c.id !== todo.id)
      setTodos(newtodo)
      let newTodo = { content: todo.content, isCompleted: true, id: todo.id }
      setToDid((current) => [...current, newTodo])
      axios.put(url, newTodo)
      setEdit(false)
      setTodo("")
    }
    else if (todo.isCompleted === true) {
      const newToDid = ToDid.filter((c) => c.id !== todo.id)
      setToDid(newToDid)
      let newTodo = { content: todo.content, isCompleted: false, id: todo.id }
      setTodos((current) => [...current, newTodo])   
      axios.put(url, newTodo)
      setEdit(false)
      setTodo("")
    }}

  const deleteItem = (todo) => {               // silme islemini gerceklestiren fonksiyon 72-87
    let url = "https://631072d3826b98071a41a57c.mockapi.io/todos/" + (todo.id)
    if (todo.isCompleted === false) {
      const newtodo = todos.filter((c) => c.id !== todo.id)
      setTodos(newtodo)
      axios.delete(url)
      setEdit(false)
      setTodo("")
    }
    else if (todo.isCompleted === true) {
      const newToDid = ToDid.filter((c) => c.id !== todo.id)
      setToDid(newToDid)
      axios.delete(url)
      setEdit(false)
      setTodo("")
    }}

  const editItem=(todo)=>{                  // duzenlemeyi aktiflestiren fonksiyon 89-100
    if(edit===false){
    setEdit(true)
    setTodo(todo.content)
    setValue(todo)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }
    else{
      setEdit(false)
      setTodo("")
    }
    }

    const ChangeContent=(e)=>{           // todo duzenleyen fonksiyon 102-126
    e.preventDefault();
    let url = "https://631072d3826b98071a41a57c.mockapi.io/todos/" + (editValue.id)
    if(todoValue.length<3){
    alert("it must be longer than 2 letters")
    }
    else if(editValue.isCompleted===false){
    const newtodo = todos.filter((c) => c.id !== editValue.id)
    setTodos(newtodo)
    let editedtodo={ content: todoValue, isCompleted: false, id:editValue.id }
    setTodos((current) => [...current, editedtodo])
    axios.put(url,editedtodo)
    setEdit(false)
    setTodo("")
    }
    else{
    const newtodo = ToDid.filter((c) => c.id !== editValue.id)
    setToDid(newtodo)
    let editedtodo={ content: todoValue, isCompleted: true, id:editValue.id }
    setToDid((current) => [...current, editedtodo])
    axios.put(url,editedtodo)
    setEdit(false)
    setTodo("")
    }
    }

  return (
    <div>
      <h4>user: {username}</h4>
      <Input ChangeContent={ChangeContent} setValue={setValue} edit={edit} setEdit={setEdit} 
      TodoValue={todoValue} setTodo={setTodo} ClickHandler={ClickHandler}></Input>
      <Todos edit={edit} editValue={editValue} setEdit={setEdit} editItem={editItem}  loaded={loaded} 
       setTodos={setTodos}todos={todos} style={props.style} complete={complete} deleteItem={deleteItem}></Todos>

      <Completed  edit={edit} editValue={editValue} setEdit={setEdit} editItem={editItem} loaded={loaded} 
      ToDid={ToDid} style={props.style} complete={complete} deleteItem={deleteItem}></Completed>
    </div>
    
  )
}
export default TodoApp;