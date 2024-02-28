// components/Content.js

import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { formatDate,formatDateToAMPM } from './utils';
import { url } from './config';


const Content = ({item }) => {
    const [notes, setNotes] = useState([]);
    
    const handleFetchNotes = async () => {
        try {
          // Make a POST request to fetch notes for the specified group ID
          const response = await axios.post(`${url}/api/getNotes`, {
            groupId: item._id
          });
    
          // Update the state with the fetched notes
          setNotes(response.data);
          console.log(response.data);
          console.log('hello');
        } catch (error) {
          // Handle errors
          console.error('Error fetching notes:', error);
        }
      };

      useEffect(() => {
        // Call handleFetchNotes when the component mounts
        handleFetchNotes();
      }, [item]); // Empty dependency 

  return (
    <div className="content">
      {/* Add your content here */}
      <ul>
        {notes.map((note, index) => (
          <div key={index} className="note-item">
            <div className='note-content'>{note.content}</div>
            <br></br>
            <br></br>
            <div className='note-date'>{formatDate(note.createdAt)}</div>
            <div className='note-time'> {formatDateToAMPM(note.createdAt)}</div>
          </div>
            ))}
      </ul>
    </div>
  );
}

export default Content;
