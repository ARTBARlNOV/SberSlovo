/* eslint-disable quote-props */
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import VerifyBar from './Components/VerifyBar/VerifyBar';

function App() {
  const [getInfo, setGetInfo] = useState(null);

  return (
    <div className="App">
      <Navbar />

      {!getInfo && (<VerifyBar getInfo={getInfo} setGetInfo={setGetInfo} />)}
    </div>
  );
}

export default App;
