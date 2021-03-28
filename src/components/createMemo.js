import firebase from '../Firebase';
import {useState, useEffect} from 'react';


function CreateMemo() {
  const [inputValue, setInputValue] = useState("");
  const [titleValue, setTitleValue] = useState("");

  /*
  useEffect(() => {
    firebase.firestore().collection("memo").doc("test").get().then(doc => {
      console.log(doc.data().text);
      setInputValue(doc.data().text);
    })
  }, [])
  */

  let saveNoteToDB = () => {
    firebase.firestore().collection("memo").doc(titleValue).set({
      note: {inputValue}
    });
    console.log("Firebase data stored");
  };

  let logDocs = () => {
    firebase.firestore().collection("memo").get()
      .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit = {(e) => {
          //Puts data on firebase
          e.preventDefault();
          /*firebase.firestore().collection("memo").doc("test").set({
            text: inputValue
          })*/
        }}>
          <input value={titleValue} onChange={(e)=>{setTitleValue(e.target.value)}}></input><br></br>
          <textarea value={inputValue} style={{width: "300px", height: "200px"}}
          onChange={(e)=>{setInputValue(e.target.value);}}
          ></textarea>
          <br></br>
          <button onClick={() => saveNoteToDB()}>Save Note</button>
          <button onClick={() => {setInputValue("");}}>Clear Textbox</button>
        </form>
        <button onClick={() => logDocs()}>Log Docs</button>
      </header>
    </div>
  );
}

export default CreateMemo;