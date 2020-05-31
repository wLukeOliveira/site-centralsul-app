import React from 'react'
import './Header.css';
import DownloadBtn from '../downloadbtn/DownloadBtn';
import LogoCentralSul from '../../images/logoCentralSul.png';
import PagesBtn from '../pagesbtn/PagesBtn';
function Header(props) {
    return (
        <header className="header" >
            <img className="LogoCentralSul" src={LogoCentralSul} alt="Logo Central Sul"/>
            <PagesBtn nome="Notícias" link="http://localhost:3000/"/>
            <PagesBtn nome="Sobre" link="http://localhost:3000/sobre"/>
            <DownloadBtn />
        </header>
    );
}

export default Header;