import React from 'react'
import './NewsRowComplete.css';
import NewsCard from '../newscard/NewsCard.jsx';
import LogoLR from '../../images/blackzao.png';
import { Component } from 'react';
import firebase from './../../Firebase';

class NewsRowComplete extends Component{
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
          const { title, description, autor,time} = doc.data();
          if(doc.id != this.props.id_key){
          boards.push({
            key: doc.id,
            doc, // DocumentSnapshot
            title,
            description,
            autor,
            time,
          });
        }
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
            
            <div className="NewsContent">
            {this.state.boards.map(board =>
                <NewsCard chave = {board.key} title = {board.title} description = {board.description} autor = {board.autor} time = {board.time}></NewsCard>
            )}
        
            </div>
           
           
        </div>   
    )
}
}

export default NewsRowComplete;