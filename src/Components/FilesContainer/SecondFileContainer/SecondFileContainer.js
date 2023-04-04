import React, { useContext } from 'react';
import img from '../../../assets/img/ic download.png';
import Context from '../../../Context/context';

function SecondFileContainer() {
  const {
    secondUploadHandler,
    secondfilePicker,
    secondClickHandler,
  } = useContext(Context);

  return (
    <div className="upload-file-2">
      <div className="step-number-2">
        <div className="step-number-2-number">
          2
        </div>
        <div className="step-number-2-circle" />
      </div>
      <div className="upload-file-2-1">
        <div className="upload-file-2-2">
          <div className="upload-file-2-2-title-1">
            Загрузите подпись
          </div>
          <div className="upload-file-2-2-title-2">
            Файл подписи обычно имеет формат формат .sig
          </div>
          <input type="file" className="hidden" onChange={secondUploadHandler} ref={secondfilePicker} />
          <button type="button" onClick={secondClickHandler} className="button-2">
            <img src={img} className="pic-for-button-1" alt="vector" />
            <div className="button-2-name">
              Загрузить подпись
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SecondFileContainer;
