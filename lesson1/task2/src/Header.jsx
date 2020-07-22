import React, { Children } from "react";
import { useState, useEffect } from 'react';
import UserMenu from './UserMenu';
import {Context} from "./Context";

class Header extends React.Component {
    
  
  render() {
      return (
        <header className="header">
            <UserMenu />   
        </header>
      )}
}

// ThemedButton.contextType = ThemeContext;

export default Header; 