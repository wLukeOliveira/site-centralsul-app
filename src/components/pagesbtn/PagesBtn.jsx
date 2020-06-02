import React from 'react'
import './PagesBtn.css';
import { Link } from 'react-router-dom'

function PagesBtn(props) {
    return (
        <div className="BtnBlock">
            <Link className="Btn" to={props.link}>{props.nome}</Link>
            <div class="progress">
                <div class="progress-bar"></div>
            </div>
        </div>
    );
}

export default PagesBtn;