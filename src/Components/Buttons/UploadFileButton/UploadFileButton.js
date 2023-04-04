import React, { useContext } from 'react';
import img from '../../../assets/img/ic download.png';
import Context from '../../../Context/context';

export default function UploadFileButton(props) {
  const { document } = props;
  const {
    firstUploadHandler,
    firstFilePicker,
    firstClickHandler,
    secondUploadHandler,
    secondFilePicker,
    secondClickHandler,
  } = useContext(Context);
  return (
    document ? (
      <div className="upload-file-1-2-title-2">
        <input type="file" className="hidden" accept=".pdf" onChange={firstUploadHandler} ref={firstFilePicker} />
        <button type="button" onClick={firstClickHandler} className="button-1">
          <img src={img} className="pic-for-button-1" alt="vector" />
          <div className="button-1-name">
            Загрузить документ
          </div>
        </button>
      </div>
    ) : (
      <div className="upload-file-2-2-title-2">
        <input type="file" className="hidden" accept=".sig" onChange={secondUploadHandler} ref={secondFilePicker} />
        <button type="button" onClick={secondClickHandler} className="button-2">
          <img src={img} className="pic-for-button-1" alt="vector" />
          <div className="button-2-name">
            Загрузить подпись
          </div>
        </button>
      </div>
    )
  );
}
