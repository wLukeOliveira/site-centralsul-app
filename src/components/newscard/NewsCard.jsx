import React from 'react'
import './NewsCard.css';
import { Link } from 'react-router-dom';

function NewsCard(props){
    return(
        <Link className="card" to={`/noticia/${props.chave}`}>
                <div className="Title">
                    <span className="TitleText">{props.title}</span>
                </div>
                <div className="Description">
                    <p className="DescriptionText">{props.description}</p>
                </div>
                <div className="Clique">
                    <span className="CliqueText">CLIQUE PARA LER MAIS</span>
                </div>
                <div className="Info">
                    <span className="InfoText">{props.autor}</span>
                    <span className="InfoText">08/06/2020</span>
                </div>
        </Link>
    )
}

export default NewsCard;
