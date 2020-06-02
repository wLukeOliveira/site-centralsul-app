import React from 'react'
import './Noticias.css';
import NewsRow from '../newsrow/NewsRow.jsx';
import AppAds from '../appads/AppAds.jsx';
function Noticias(){
    return(
        <body> 
            <div>
                <AppAds></AppAds>
                <hr className="Divider"></hr>
                <span className="LastNews">ÚLTIMAS NOTÍCIAS</span>
                <NewsRow></NewsRow>
            </div>
        </body>
    )
}

export default Noticias;