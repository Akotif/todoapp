import React from 'react'
const Completed = (props) => {
  return (
    <div>
        <div id="half1">
        {(props.loaded===false) ? <h3>loading...</h3> : <p></p>}
          <h3>Completed</h3>
          {props.ToDid.map((todo, index) => (
            <div id={props.style} key={index}>
              <div id="todo">
              <h6 className={props.style}>{todo.content}</h6>
              </div>
              <button id="button2" onClick={() => props.complete(todo)}>move to to-do</button>
              <button onClick={()=> props.editItem(todo)} id="button4">{(props.edit===true)?"cancel":"edit"}</button>
              <button id="button3" onClick={() => props.deleteItem(todo)} >delete</button>
            </div>
          ))}
        </div>
    </div>
  )
}
export default Completed;