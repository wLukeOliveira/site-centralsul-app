import React from 'react'
import './ContactTable.css';
import ContactRow from '../contactrow/ContactRow.jsx';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faFacebookSquare,faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons"

const iconeFacebook = <FontAwesomeIcon icon={faFacebookSquare} size = '2x'  />
const iconeInstagram = <FontAwesomeIcon icon={faInstagram} size = '2x'  />
const iconeWhatsapp = <FontAwesomeIcon icon={faWhatsapp} size = '2x'  />
function ContactTable(){
    return(
        <div className="Table">
            <ContactRow icon={iconeFacebook} user="lawerrossofficial"></ContactRow>
            <ContactRow icon={iconeInstagram} user="lawerrossofficial"></ContactRow>
            <ContactRow icon={iconeWhatsapp} user="(53) 999557623"></ContactRow>
        </div>
    )
}

export default ContactTable;