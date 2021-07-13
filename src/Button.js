import React from "react"
import "./style.css"


const Button=({buttonText})=>{                                    
    return(
        <button className="button"> {buttonText} </button>
    )
}

export default Button