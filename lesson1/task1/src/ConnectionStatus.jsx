import React from "react";
import { useState, useEffect } from 'react';


const ConnectionStatus = () => {

  const [status, setStatus] = useState("online")


  useEffect(() => {
        
    const handleStatusOnline = () => {
      setStatus(
        'online'
      )
    }
    const handleStatusOffline = () => {
      setStatus(
        'offline'
      );
    };

    window.addEventListener("online", handleStatusOnline);
    window.addEventListener("offline", handleStatusOffline);

    return () => {
      window.removeEventListener("online", handleStatusOnline)
      window.removeEventListener("offline", handleStatusOffline)
    }

  }, [status])


    return (

<div className={`status ${status === "offline" ? "status_offline" : ''}`}>
{status}
</div>      
    );
  
}

export default ConnectionStatus; 