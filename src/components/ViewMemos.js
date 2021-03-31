import {useState, useEffect} from 'react';

import firebase from '../Firebase';

function ViewMemos() {
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("memo").get()
      .then((querySnapshot) => {
        let newList = []
        querySnapshot.forEach((memo) => {
          console.log(memo.data());
          newList = newList.concat(memo.data().note.inputValue);
        });
        setMemos(newList);
      });
  }, []);

  console.log(memos);

  return(
    //Use the map function to display memos
    <div>
      <ul>
        {(memos || []).map((memo) => (
          <li>{memo}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewMemos;