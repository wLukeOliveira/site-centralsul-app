import React from 'react'
import './NewsVideo.css';
import ReactPlayer from 'react-player'
function NewsVideo(){
    return(
        <div>
            <span className="Msg">ASSISTA AO VÍDEO ABAIXO</span>
            <div className="Video">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' controls={true} />

            </div>
            
        </div>
    )
}

export default NewsVideo;