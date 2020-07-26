import React from 'react'
import './NewsPhotos.css';
import Bart from '../../images/bart.jpg';

function NewsPhotos(props){

    return(
        <div className="PhotoGallery">
            <img className="Bart" src={props.url} alt="Bart"/>
        </div>
    )
}

export default NewsPhotos;