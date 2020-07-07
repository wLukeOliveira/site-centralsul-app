import React, { Component } from 'react';
import './NewsRow.css';
import NewsCard from '../newscard/NewsCard';
import LogoLR from '../../images/blackzao.png';
import firebase from './../../Firebase';
import { render } from '@testing-library/react';

class NewsRow extends Component{
    
    constructor(props) {
        super(props);
        this.ref = firebase.firestore().collection('notes');
        this.unsubscribe = null;
        this.state = {
          boards: []
        };
      }
    
      onCollectionUpdate = (querySnapshot) => {
        const boards = [];
        querySnapshot.forEach((doc) => {
          const { title, description, author } = doc.data();
          boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            description,
            author,
          });
        });
        this.setState({
          boards
       });
      }
    
      componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
      }
    
    
    render(){
    return(
        
        <div className="Row">
            {this.state.boards.map(board =>
            <div className="NewsContent">
                <NewsCard title = {board.title} description = {board.description}></NewsCard>
                <img className="LogoLR" src={LogoLR} alt="Logo LR"/>
            </div>
            )}
        </div>   
    )
}
}
export default NewsRow;