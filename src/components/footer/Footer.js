import React from 'react'
import './Footer.css';
import LawerLogo from '../../images/lawerLogo.png';
import LogoCS from '../../images/logoCS.png';
import ContactTable from '../contacttable/ContactTable';

function Footer() {
    return (
        <footer className="Footer" >
            <img className="LSLogo" src={LogoCS} alt="CSLogo"/>
            <div className="vl"></div>
            <img className="LawerLogo" src={LawerLogo} alt="LawerLogo"/>
            <div className="FooterText">
                <span className="Slogan">NÓS FAZEMOS A TECNOLOGIA QUE VOCÊ PRECISAR</span>
                <p>&copy; 2020-2020 Central Sul</p>
            </div>
            <div className="FooterContact">
                <ContactTable></ContactTable>
            </div>
        </footer>
    );
}

export default Footer;