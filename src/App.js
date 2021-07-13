import React from "react"
import "./style.css"
import Button from "./Button"

function Myapp(){
  return(
    <div>
     <h1 style={{textAlign:"center"}}>Hello</h1>             {/*inline css*/}     
     <h3>Welcome to React</h3>
     <Button buttonText="React"/>
     <Button buttonText="React again"/>
     <Button buttonText="Reacting"/>
     <Button buttonText="Reacted"/>
     </div>
  )
  } 
export default Myapp