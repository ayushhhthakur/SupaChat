import React from 'react';
import './App.css';

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useCollectioData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBXXMjHwKaabR0Ra9K0T1DYNfdJj7nnq74",
  authDomain: "supachat-21238.firebaseapp.com",
  projectId: "supachat-21238",
  storageBucket: "supachat-21238.appspot.com",
  messagingSenderId: "932505705730",
  appId: "1:932505705730:web:6cbd965fc46db9b227f61b",
  measurementId: "G-CPYCMWS41D"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section>
        {user ? <ChatRoom/> : <SignIn /> }
      </section>

    </div>
  );
}

function SignIn(){

  const SignInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.SignInWithPopup(provider);
  }

  return (
    <button onClick={SignInWithGoogle}>Sign In With Google</button>
    
  )

function SignIn(){
  return auth.currentUser && (
    <button onClick={() => auth.signout()}>Sign Out</button>
  )
}

}

function ChatRom(){

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectioData(query, {idFeild: 'id'});

  return (
    <>
    <div>
      {messages && messages.map(msg => <ChatMessage key={msg.id} message = {msg} />)}
    </div>
    </>
  )
}

export default App;
