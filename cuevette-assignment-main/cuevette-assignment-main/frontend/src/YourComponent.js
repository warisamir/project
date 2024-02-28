import React, { useState,useEffect } from 'react';
import axios from 'axios';

const YourComponent = () => {
  const [groupId, setGroupId] = useState('');
  const [notes, setNotes] = useState([]);

  const handleFetchNotes = async () => {
    try {
      // Make a POST request to fetch notes for the specified group ID
      const response = await axios.post('http://localhost:3000/api/getNotes', {
        groupId: groupId
      });

      // Update the state with the fetched notes
      setNotes(response.data);
    } catch (error) {
      // Handle errors
      console.error('Error fetching notes:', error);
    }
  };

  useEffect(() => {
    // Call handleFetchNotes when the component mounts
    handleFetchNotes();
  }, []); // Empty dependency array to run the effect only once when the component mounts


  return (
    <div>
      <input
        type="text"
        value={groupId}
        onChange={(e) => setGroupId(e.target.value)}
        placeholder="Enter Group ID"
      />
      <button onClick={handleFetchNotes}>Fetch Notes</button>

      {/* Display the fetched notes */}
      <ul>
        {notes.map((note, index) => (
          <li key={index}>{note.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default YourComponent;
