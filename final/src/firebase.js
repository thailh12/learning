import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDa5qvWKRaKb6qMUqskOi5P_tOugqcMAfQ",
    authDomain: "thaiha-2b7fa.firebaseapp.com",
    databaseURL: "https://thaiha-2b7fa.firebaseio.com",
    projectId: "thaiha-2b7fa",
    storageBucket: "thaiha-2b7fa.appspot.com",
    messagingSenderId: "899006335041"
  };

  export const firebaseApp= firebase.initializeApp(config);
  export const goalRef = firebase.database().ref('goal');
export const completeGoalRef = firebase.database().ref('completeGoal');
