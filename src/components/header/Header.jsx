import React from 'react'
import './Header.css';
import DownloadBtn from '../downloadbtn/DownloadBtn.jsx';
import LogoCentralSul from '../../images/logoCentralSul.png';
import LogoCS from '../../images/logoCS.png';
import PagesBtn from '../pagesbtn/PagesBtn.jsx';
function Header(props) {
    return (
        <header className="header" >
            
            <img className="LogoCentralSul" src={LogoCentralSul} alt="Logo Central Sul"/>
            <img className="LSLog" src={LogoCS} alt="CSLogo"/>
            <PagesBtn nome="Notícias" link="/"/>
            <PagesBtn nome="Sobre" link="/sobre"/>
            <DownloadBtn />
        </header>
    );
}

export default Header;