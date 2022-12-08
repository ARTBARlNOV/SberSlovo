import React, { useState, useRef } from 'react';
import './VerifyBar.css';
import showVerifyBar from '../../Helpers/showVerifyBar';

export default function verifyBar({ getInfo, setGetInfo }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);

  const filePicker = useRef(null);
  const filePicker2 = useRef(null);

  const formData = new FormData();

  const url = 'https://sberslovo.ru/api/public/verify/signature';

  const date = new Date(Date.now())
    .toString().substring(8, 15)
    .split(' ')
    .join('.');

  const clickHandler = () => {
    filePicker.current.click();
  };

  const clickHandler2 = () => {
    filePicker2.current.click();
  };

  const uploadHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const uploadHandler2 = (e) => {
    setSelectedFile2(e.target.files[0]);
  };

  const tagSubmit = async (e) => {
    e.preventDefault();

    formData.append('file_1', selectedFile, selectedFile.name);
    formData.append('file_2', selectedFile2, selectedFile2.name);
    const options = {
      method: 'POST',
      body: formData,
    };

    const res = await fetch(url, options);
    const data = await res.json();
    setGetInfo(data);
  };

  return (
    <div>
      {showVerifyBar(
        selectedFile,
        selectedFile2,
        clickHandler,
        clickHandler2,
        tagSubmit,
        uploadHandler,
        uploadHandler2,
        date,
        filePicker,
        filePicker2,
      )}
    </div>
  );
}
