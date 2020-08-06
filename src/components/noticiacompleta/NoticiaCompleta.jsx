import React, {Component} from 'react'
import './NoticiaCompleta.css';
import NewsPhotos from '../newsphotos/NewsPhotos.jsx';
import './NoticiaCompleta.css';
import NewsVideo from '../newsvideo/NewsVideo.jsx';
import NewsRowComplete from '../newsrowcomplete/NewsRowComplete.jsx';
import AppAds from '../appads/AppAds.jsx';
import firebase from './../../Firebase';

class NoticiaCompleta extends Component{
    constructor(props) {
        super(props);
        this.state = {
          board: {},
          key: '',
          url: [],
          time: {},
          video: []

        };
      }

      componentDidMount() {
        const ref = firebase.firestore().collection('notes').doc(this.props.match.params.id);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.setState({
              board: doc.data(),
              key: doc.id,
              url: doc.data().url,
              time: doc.data().time,
              video: doc.data().video,
              isLoading: false
            });
          } else {
            console.log("No such document!");
          }
        });
      }


    render(){
    return (
        <div className="Body">
            <AppAds />
            <hr className="Divider"></hr>
            <span className="Titul">{this.state.board.title}</span>
            <div className="Inf">
                <div className="InfContent">
                    <span className="InfText">{this.state.board.autor}</span>
                    <span className="InfText">{new Date(this.state.time.seconds * 1000).toLocaleDateString("en-GB")}</span>
            </div>
            </div>
            
            <hr className="Divider2"></hr>
            <div className="NewContent">
                <p className="ContentText">
                    {this.state.board.description}
                    </p>
            </div>
            {this.state.url.map(boa =><NewsPhotos url = {boa}></NewsPhotos>)}
            
            {this.state.video.map(url => <NewsVideo video = {url}></NewsVideo>)}
            
            <hr className="Divider2"></hr>
            <span className="Msg">VEJA TAMBÉM</span>
            <NewsRowComplete id_key = {this.props.match.params.id} />
        </div>
    )
}
}
export default NoticiaCompleta;