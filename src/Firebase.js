import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyAAoalT4d0iStydqqAEzXUKEojP8wYQXsw",
    authDomain: "central-sul.firebaseapp.com",
    databaseURL: "https://central-sul.firebaseio.com",
    projectId: "central-sul",
    storageBucket: "central-sul.appspot.com",
    messagingSenderId: "879485991227",
    appId: "1:879485991227:web:cfcd6a010540c0f553df1e",
    measurementId: "G-27RY0YFS6F"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
