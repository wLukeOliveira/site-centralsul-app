import React from 'react'
import './NewsRow.css';
import NewsCard from '../newscard/NewsCard';
import LogoLR from '../../images/blackzao.png';

function NewsRow(){
    return(
        <div className="Row">
            <div className="NewsContent">
                <NewsCard></NewsCard>
                <img className="LogoLR" src={LogoLR} alt="Logo LR"/>
                <NewsCard></NewsCard>
                <NewsCard></NewsCard>
                <img className="LogoLR" src={LogoLR} alt="Logo LR"/>
                <NewsCard></NewsCard>
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

export default NewsRow;