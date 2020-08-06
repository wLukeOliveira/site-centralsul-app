import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyCQiu0gk61Mq8ElpAei7Ruq1cUsCZdhk8I",
    authDomain: "teste-68e4b.firebaseapp.com",
    databaseURL: "https://teste-68e4b.firebaseio.com",
    projectId: "teste-68e4b",
    storageBucket: "teste-68e4b.appspot.com",
    messagingSenderId: "972583100027",
    appId: "1:972583100027:web:74bb403f1dfeafca2b8cde",
    measurementId: "G-YRKH9XG5RQ"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
