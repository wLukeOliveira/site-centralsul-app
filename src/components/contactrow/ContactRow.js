import React from 'react'
import './ContactRow.css';


function ContactRow(props){
    return(
        <div className="Contact"> 
            {props.icon}
            <span className="UserName">{props.user}</span>      
        </div>
    )
}

export default ContactRow;