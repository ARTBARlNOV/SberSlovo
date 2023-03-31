import React, { useContext } from 'react';
import img from '../../../assets/img/ic download.png';
import Context from '../../../Context/context';

function FirstFileContainer() {
  const {
    firstUploadHandler,
    firstFilePicker,
    firstClickHandler,
  } = useContext(Context);

  return (
    <div className="upload-file-1">
      <div className="step-number-1">
        <div className="step-number-1-number">
          1
        </div>
        <div className="step-number-1-circle" />
      </div>
      <div className="upload-file-1-1">
        <div className="upload-file-1-2">
          <div className="upload-file-1-2-title-1">
            Загрузите документ
          </div>
          <div className="upload-file-1-2-title-2">
            Загрузите документ без штампа в формате .pdf
            <input type="file" className="hidden" onChange={firstUploadHandler} ref={firstFilePicker} />
          </div>
          <button type="button" onClick={firstClickHandler} className="button-1">
            <img src={img} className="pic-for-button-1" alt="vector" />
            <div className="button-1-name">
              Загрузить документ
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstFileContainer;
