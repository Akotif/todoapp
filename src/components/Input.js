import React from 'react'

const Input = (props) => {
  return (
    <div className='InputPage'>
      <form type="submit">
      <input type="text"  onChange={(e) => props.setTodo(e.target.value)} 
      className={(props.edit)?"inputEdit":"input"} value={props.TodoValue} placeholder='Enter your to do'></input>
      <button onClick={(e)=> (props.edit===false)?props.ClickHandler(e):props.ChangeContent(e)}
      id={(props.edit)?"enterbE":"enterb"}>{(props.edit)?"edit":"enter"}</button>
      <h5>{(props.edit)?"You can edit from above":""}</h5>
      </form>
    </div>
  )
}
export default Input;