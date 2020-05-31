import React from 'react'
import './AppAds.css';
import Ads from '../../images/ads1.png'


function AppAds(){
    return(
        <div className="AdsBlock">
            <div className="AdsContent">
            <img className="Ads1" src={Ads} alt="Ads"/>
            </div>
        </div>
    )
}

export default AppAds;