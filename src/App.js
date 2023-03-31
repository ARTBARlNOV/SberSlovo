/* eslint-disable quote-props */
import { useRef, useState } from 'react';
import './App.css';
import MainPage from './pages/MainPage';
import Context from './Context/context';
import { formData, url } from './consts/consts';

function App() {
  const [info, setInfo] = useState(null);
  const [firstSelectedFile, setFirstSelectedFile] = useState(null);
  const [secondSelectedFile, setSecondSelectedFile] = useState(null);

  const firstFilePicker = useRef(null);
  const secondFilePicker = useRef(null);

  const firstClickHandler = () => {
    firstFilePicker.current.click();
  };

  const secondClickHandler = () => {
    secondFilePicker.current.click();
  };

  const firstUploadHandler = (e) => {
    setFirstSelectedFile(e.target.files[0]);
  };

  const secondUploadHandler = (e) => {
    setSecondSelectedFile(e.target.files[0]);
  };

  const tagSubmit = async (e) => {
    e.preventDefault();

    formData.append('file_1', firstSelectedFile, firstSelectedFile.name);
    formData.append('file_2', secondSelectedFile, secondSelectedFile.name);
    const options = {
      method: 'POST',
      body: formData,
    };

    const res = await fetch(url, options);
    const data = await res.json();
    setInfo(data);
  };

  return (
    <Context.Provider value={{
      info,
      setInfo,
      firstFilePicker,
      secondFilePicker,
      firstSelectedFile,
      secondSelectedFile,
      firstClickHandler,
      secondClickHandler,
      firstUploadHandler,
      secondUploadHandler,
      tagSubmit,
    }}
    >
      <div className="App">
        <MainPage />
      </div>
    </Context.Provider>
  );
}

export default App;
