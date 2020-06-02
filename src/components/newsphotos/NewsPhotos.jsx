import React from 'react'
import './NewsPhotos.css';
import Bart from '../../images/bart.jpg';

function NewsPhotos(){
    return(
        <div className="PhotoGallery">
            <img className="Bart" src={Bart} alt="Bart"/>
        </div>
    )
}

export default NewsPhotos;