/* eslint-disable quote-props */
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import VerifyBar from './Components/VerifyBar/VerifyBar';
import showInfo from './Helpers/showInfo';

function App() {
  const [getInfo, setGetInfo] = useState(null);

  return (
    <div className="App">
      <Navbar />

      {!getInfo && (<VerifyBar getInfo={getInfo} setGetInfo={setGetInfo} />)}

      {getInfo && showInfo(getInfo)}
    </div>
  );
}

export default App;
