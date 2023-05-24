import Login from './Login';
import ChatRoom from "./Chatroom";
import './App.css';
import { useState, useEffect } from "react"
import { auth } from './firebase';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Set up Firebase listener to check user authentication state
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return () => {
      // Clean up listener
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <h1>Chat App</h1>
      {user ? <ChatRoom /> : <Login />}
    </div>
  );
}

export default App;
