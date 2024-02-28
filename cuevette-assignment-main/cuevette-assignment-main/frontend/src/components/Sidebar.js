import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getInitials } from './utils'; // Import getInitials function
import { url } from './config';

const Sidebar = ({ onItemClick }) => {
  const [groups, setGroups] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null); // State to track the ID of the selected item

  useEffect(() => {
    // Fetch groups data when component mounts
    axios.get(`${url}/api/groups`)
      .then(response => {
        // Set the fetched groups data to state
        setGroups(response.data);
      })
      .catch(error => {
        console.error('Error fetching groups:', error);
      });
  }, []); // Empty dependency array to fetch data only once when component mounts

  const handleItemClick = (group) => {
    // Set the selected item ID
    setSelectedItemId(group._id);
    // Call the onItemClick function passed as prop
    onItemClick(group);
  };

  return (
    <aside>
      <div className="sidebar">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Pocket Notes</h2>
        </div>
        <ul className="sidebar-list">
          {groups.map((group, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(group)}
              className={`sidebar-item ${selectedItemId === group._id ? 'selected' : ''}`}
            >
              {/* Render group data */}
              <div className="icon" style={{ background: group.color }}>{getInitials(group.title)}</div>
              <span>{group.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="sticky-button">+</div>
    </aside>
  );
};

export default Sidebar;
