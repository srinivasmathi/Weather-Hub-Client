import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Form({onInput,cityChangeHandler,input}){
    return(
        <div class="form">
            <input className="blur-background" type="text" name="searchBox" onChange={onInput} placeholder="Enter any city.." value={input}></input>
            <button className="blur-background" type="button" name="submitButton" onClick={cityChangeHandler}><FontAwesomeIcon icon={faMagnifyingGlass} size="xl" /></button>
        </div>
    );
}