import React, { useState } from 'react';
import axios from 'axios';
import imageSrc from './send.png'; // Import your image file
import { url } from './config';


const MessageBox = ({ item }) => {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = async () => {
    if (!message) return;
    try {
      // Make a POST request to add a new note to the group
      await axios.post(`${url}/api/notes/create`, {
        groupId: item._id,
        content: message
      });
      // Clear the message input after sending
      setMessage('');
      console.log('Note added successfully!');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="message-box">
      <textarea
        className='input-box'
        type="text"
        placeholder="Type your message"
        value={message}
        onChange={handleMessageChange}
      />
      <button
        className='send-button'
        onClick={handleSendMessage}
        disabled={!message} // Disable button if message is empty
      >
        <img src={imageSrc} alt="Your Image" className="send-image" />
      </button>
    </div>
  );
};

export default MessageBox;
