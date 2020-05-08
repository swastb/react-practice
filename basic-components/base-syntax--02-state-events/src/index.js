import React,{ useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/
import registerServiceWorker from './registerServiceWorker';
import BasicClassCounter from './practice/Classes/BasicClassCounter'
import FriendStatus from './practice/hooks/FriendStatus'


   
  ReactDOM.render(
    <FriendStatus/>,
    document.getElementById('root')
  );

  

registerServiceWorker();
