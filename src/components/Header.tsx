import React from 'react'
import { IconButton } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { initNotification } from '../Services/FirebaseService'

import '../App.css'

export const Header = () => {
    return (  
      <div>  
        <h2>
          Expense Tracker           
        </h2>  
        <span className="text"> To get the notification press the bell icon. </span> 
        <IconButton color="primary" aria-label="add an alarm" onClick={initNotification}>
          <NotificationsIcon /> 
        </IconButton> 
      </div>  
    )
}
