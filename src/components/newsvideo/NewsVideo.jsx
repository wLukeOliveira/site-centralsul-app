import React from 'react'
import './NewsVideo.css';
import ReactPlayer from 'react-player'
function NewsVideo(props){
    return(
        <div>
            <span className="Msg">ASSISTA AO VÍDEO ABAIXO</span>
            <div className="Video">
                <ReactPlayer url= {props.video} controls={true} />

            </div>
            
        </div>
    )
}
export default NewsVideo;