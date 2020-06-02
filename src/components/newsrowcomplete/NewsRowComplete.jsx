import React from 'react'
import './NewsRowComplete.css';
import NewsCard from '../newscard/NewsCard.jsx';
import LogoLR from '../../images/blackzao.png';

function NewsRowComplete(){
    return(
        <div className="Row">
            <div className="NewsContent">
                <NewsCard></NewsCard>
                <img className="LogoLR" src={LogoLR} alt="Logo LR"/>
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
                <img className="LogoLR" src={LogoLR} alt="Logo LR"/>
                <NewsCard></NewsCard>
            </div>
        </div>   
    )
}

export default NewsRowComplete;