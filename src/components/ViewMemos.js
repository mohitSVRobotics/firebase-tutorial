import {useState, useEffect} from 'react';

import firebase from '../Firebase';

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
    <div>
    This is where we will see Memos.
    </div>
  );
}

export default ViewMemos;