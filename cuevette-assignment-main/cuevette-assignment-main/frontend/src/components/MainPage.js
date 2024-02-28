// MainPage.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import DefaultPage from './DefaultPage';
import Header from './Header';
import Content from './Content';
import MessageBox from './MessageBox';

const MainPage = () => {
  const [clickedItem, setClickedItem] = useState(null);

  // Function to handle sidebar item click
  const handleSidebarItemClick = (item) => {
    setClickedItem(item);
    console.log(clickedItem);
  };


  return (
    <>
      <Sidebar onItemClick={handleSidebarItemClick} />
      {/* Render components conditionally based on whether a sidebar item has been clicked */}
      {clickedItem ? (
        <div className="main-page">
          <Header item={clickedItem} /> {/* Pass clicked item data to Header */}
            <Content item={clickedItem} />
            <MessageBox item={clickedItem}/>
          </div>
      ) : (
        <div className="main-page">
            <DefaultPage />
        </div>

      )}
    </>
  );
};

export default MainPage;
