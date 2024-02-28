// components/Header.js

import React from 'react';
import { getInitials } from './utils';

const Header = ({ item }) => {
  return (
    <div className="header">
      <div className="main-icon" style={{background:item.color}} >{getInitials(item.title)}</div>
      <h2 className="header-title">{item.title}</h2>
    </div>
  );
}

export default Header;
