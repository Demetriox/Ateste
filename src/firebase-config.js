import * as firebase from 'firebase';

// var firebaseConfig = {
//     apiKey: "AIzaSyAza2cqUH6mwCvcZwF-dZAcdtqcVTUsvVs",
//     authDomain: "vetatallersite.firebaseapp.com",
//     databaseURL: "https://vetatallersite.firebaseio.com",
//     projectId: "vetatallersite",
//     storageBucket: "vetatallersite.appspot.com",
//     messagingSenderId: "865814344689",
//     appId: "1:865814344689:web:5eede8b5d212926c67ca50",
//     measurementId: "G-WZGXJ72MFZ"
//   };


var firebaseConfig = {
  apiKey: "AIzaSyBSI3wnmJuopIvV3ZMALz6CWTXkRAoCbeU",
  authDomain: "atrevetesite.firebaseapp.com",
  projectId: "atrevetesite",
  storageBucket: "atrevetesite.appspot.com",
  messagingSenderId: "747552891109",
  appId: "1:747552891109:web:f2e0260e32b22be801740c",
  measurementId: "G-KD3K4V7ZT3"
};

var fireDb = firebase.initializeApp(firebaseConfig);




export default fireDb;
