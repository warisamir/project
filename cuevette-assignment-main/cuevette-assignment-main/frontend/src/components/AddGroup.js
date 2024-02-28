import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { url } from './config';

const colors = [
  { rgb: 'rgb(179,139,250)', label: 'Purple' },
  { rgb: 'rgb(255,121,242)', label: 'Pink' },
  { rgb: 'rgb(67,230,252)', label: 'Cyan' },
  { rgb: 'rgb(241,149,118)', label: 'Orange' },
  { rgb: 'rgb(0,71,255)', label: 'Blue' },
  { rgb: 'rgb(102,145,255)', label: 'Light Blue' }
];

// const stopPropagation = (e) => {
//   e.stopPropagation();
// }
const AddGroup = ({ onCreateGroup }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        // Click occurred outside of the popup, so close it
        setShowPopup(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCreateGroup = async () => {
    // Pass the new group data to the parent component
    const response = await axios.post(`${url}/api/groups/add`, {
        title: newGroupName,
        color: selectedColor
      });

    // Reset values and hide the popup
    setNewGroupName('');
    setSelectedColor('');
    setShowPopup(false);
  };

  return (
    <div>
      <div className="sticky-button" onClick={() => setShowPopup(true)}>+</div>
      {/* Conditionally render the overlay based on the showPopup state */}
      {showPopup && <div className="overlay"></div>}
      {/* Popup for adding a new group */}
      {showPopup && (
        <div className="popup" ref={popupRef}>
          <h3>Create New Group</h3>
          <div className="popup-content">
            <label>
              Group Name
            </label>
            <input
              type="text"
              placeholder="Enter group name"
              className='popup-input'
              value={newGroupName}
              onChange={e => setNewGroupName(e.target.value)}
            />
            <br />
            <label>
              Choose Color
            </label>
            <div className="color-options">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className={`color-option ${selectedColor === color.rgb ? 'selected' : ''}`}
                  style={{ background: color.rgb }}
                  onClick={() => setSelectedColor(color.rgb)}
                ></div>
              ))}
            </div>
            <button className='popup-button' onClick={handleCreateGroup}>Create</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddGroup;
