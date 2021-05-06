import React from 'react'; // imports react
import './App.css';

import Email from './components/email';
import SMS from './components/sms';
import URL from './components/url';



const App: React.FC = () => { // creates the constant variable, App
  return (
    <div className = "Container">
      <div className="Column1">
        <Email />
        <button className="button is-info is-rounded" >Refresh</button> 
      </div>

      <div className="Column2">
        <SMS />
      </div>

      <div className="Column3">
        <URL />
      </div>

    </div>
  );
}

export default App;