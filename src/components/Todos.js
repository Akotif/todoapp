const Todos=(props)=>{

return (
    <div>
      <div id="half">
          {(props.loaded===false) ? <h3>loading...</h3> : <p></p>}
          <h3>To do</h3>      
          {props.todos.map((todo, index) => (
            <div id={props.style} key={index}>
              <div id="todo">            
              <h6 className={props.style}>{todo.content}</h6>       
              </div>
              <button id="button1" onClick={() => props.complete(todo)}>complete</button>   
              <button onClick={()=> props.editItem(todo)} id="button4">{(props.edit===true)?"cancel":"edit"}</button>
              <button id="button3" onClick={() => props.deleteItem(todo)}>delete</button>             
            </div>
            
          ))}
        </div>
        </div>
  )
}
export default Todos;
