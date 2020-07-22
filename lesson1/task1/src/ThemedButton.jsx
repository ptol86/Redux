import React, { Children } from "react";
import { useState, useEffect } from 'react';
import {ThemeContext} from "./ThemeContext";

class ThemedButton extends React.Component {
    
  
  render() {
      return (
        <button {...this.props} style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor
        }} className="btn"/>
      )}
}

ThemedButton.contextType = ThemeContext;

export default ThemedButton; 