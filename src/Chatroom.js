import { useEffect, useState } from 'react';
import firebase from 'react-firebase';




function ChatRoom() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    useEffect(() => {
      // Set up Firebase listener to fetch messages
      const unsubscribe = firestore.collection('messages')
        .orderBy('timestamp')
        .onSnapshot(snapshot => {
          const messagesData = snapshot.docs.map(doc => doc.data());
          setMessages(messagesData);
        });
  
      return () => {
        // Clean up listener
        unsubscribe();
      };
    }, []);
  
    const handleSendMessage = () => {
      firestore.collection('messages').add({
        text: newMessage,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
        .then(() => {
          setNewMessage('');
        })
        .catch(error => {
          console.error('Error sending message:', error);
        });
    };
  
    return (
      <div>
        {messages.map(message => (
          <p key={message.timestamp}>{message.text}</p>
        ))}
        <input
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    );
  }
  
  export default ChatRoom;
  