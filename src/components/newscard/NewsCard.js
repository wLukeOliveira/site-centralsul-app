import React from 'react'
import './NewsCard.css';

function NewsCard(){
    return(
        <div className="card">
                <div className="Title">
                    <span className="TitleText">DOLAR SUBIU</span>
                </div>
                <div className="Description">
                    <p className="DescriptionText">O dólar voltou a fechar em forte alta nesta quarta-feira (6), e bateu mais um recorde de cotação nominal (sem considerar a inflação), fechando no patamar de R$ 5,70 pela primeira vez. A alta veio em dia de definição </p>
                </div>
                <div className="Clique">
                    <span className="CliqueText">CLIQUE PARA LER MAIS</span>
                </div>
                <div className="Info">
                    <span className="InfoText">Sapo Noticias</span>
                    <span className="InfoText">08/06/2020</span>
                </div>
        </div>
    )
}

export default NewsCard;