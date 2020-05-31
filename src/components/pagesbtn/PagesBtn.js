import React from 'react'
import './PagesBtn.css';

function PagesBtn(props) {
    return (
        <div className="BtnBlock">
            <a className="Btn" href={props.link}>{props.nome}</a>
            <div class="progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    );
}

export default PagesBtn;