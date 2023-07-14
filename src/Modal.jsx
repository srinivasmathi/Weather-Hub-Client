import React from "react";
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

export default function Modal({isOpen,onClose}){
    if(!isOpen) return null;

    return ReactDOM.createPortal(
        <div>
            <div className="overlay-styles"></div>
            <div className="modal-styles">
                <button className="closeButton" onClick={onClose}><FontAwesomeIcon icon={faX} size="xl" style={{color: "#808793",}} /></button>
                <div className="modal-content">
                    <p>404 : Data not found</p>
                    <p>Check internet connectivity/Enter a valid city</p>
                </div>
            </div>
        </div>,
        document.getElementById("portal")
    );
}