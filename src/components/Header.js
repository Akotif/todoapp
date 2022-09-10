import React from 'react'

const Header = (props) => {

  return (
    <div id="header">
    <h2>TO DO app</h2>
    <button  id="mode" onClick={()=> props.ChangeTheme()}>switch to {(props.theme==="dark")?"light":"dark"} theme</button>

  </div>
  )
}
export default Header;