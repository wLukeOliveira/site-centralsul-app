import React from 'react'
import './NoticiaCompleta.css';
import NewsPhotos from '../newsphotos/NewsPhotos.jsx';
import './NoticiaCompleta.css';
import NewsVideo from '../newsvideo/NewsVideo.jsx';
import NewsRowComplete from '../newsrowcomplete/NewsRowComplete.jsx';
import AppAds from '../appads/AppAds.jsx';
function NoticiaCompleta() {
    return (
        <div className="Body">
            <AppAds />
            <hr className="Divider"></hr>
            <span className="Titul">DOLAR SUBIU MUITO TIOPO MUITO</span>
            <div className="Inf">
                <div className="InfContent">
                        <span className="InfText">Sapo Noticias</span>
                        <span className="InfText">08/06/2020</span>
            </div>
            </div>
            
            <hr className="Divider2"></hr>
            <div className="NewContent">
                <p className="ContentText">
                    O dólar voltou a fechar em forte alta nesta quarta-feira (6), e bateu mais um recorde de cotação nominal (sem considerar a inflação), fechando no patamar de R$ 5,70 pela primeira vez. A alta veio em dia de definição da nova taxa básica de juros do país, atualmente em 3,75%, e após a agência de classificação de risco Fitch revisou a perspectiva da nota de crédito do Brasil para negativa.
                    A moeda encerrou o dia em alta de 1,96%, vendida a R$ 5,7030. Na máxima ao longo do dia, chegou a R$ 5,7065. Veja mais cotações.
                    A cotação de fechamento mais alta até esta quarta havia sido registrada na semana passada, quando a moeda encerrou o dia a R$ 5,65. Na parcial da semana e do mês, a alta acumulada é de 4,84%. No ano, o avanço é de 42,23%.
                </p>
            </div>
            <NewsPhotos></NewsPhotos>
            <NewsVideo></NewsVideo>
            <hr className="Divider2"></hr>
            <span className="Msg">VEJA TAMBÉM</span>
            <NewsRowComplete />
        </div>
    )
}

export default NoticiaCompleta;