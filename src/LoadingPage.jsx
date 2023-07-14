import React from "react"
import {ClimbingBoxLoader} from "react-spinners"

export default function loadingPage (){
    return(
        <div className="loader">
            <ClimbingBoxLoader className="loader" size={15} color="gray" speedMultiplier={1.5} />
        </div>
    );
}