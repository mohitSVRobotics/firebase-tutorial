import './App.css';
import {useState, useEffect} from 'react';

import firebase from 'firebase';
import 'firebase/firestore';

function ViewMemos() {
  const [memos, setMemos] = useState("")

  useEffect(() => {
    firebase.firestore().collection("memo").get()
      .then((querySnapshot) => {
        setMemos(querySnapshot);
        console.log(querySnapshot);
      });
  });

  return(
    //Use the map function to display memos
  );
}

export default ViewMemos;