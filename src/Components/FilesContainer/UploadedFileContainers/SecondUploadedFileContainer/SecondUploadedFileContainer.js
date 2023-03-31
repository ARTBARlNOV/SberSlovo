import React, { useContext } from 'react';
import img2 from '../../../../assets/img/ic document downloaded.png';
import Context from '../../../../Context/context';
import { date } from '../../../../consts/consts';

export default function SecondUploadedFileContainer(props) {
  const {
    secondSelectedFile,
  } = useContext(Context);
  return (
    <div className="document-cell-2-uploaded">
      <div className="document-cell-2-2-uploaded">
        <img className="document-cell-2-2-pic-uploaded" src={img2} alt="dogovor" />
        <div className="document-cell-2-3-uploaded">
          <div className="document-cell-2-3-title">
            {`${secondSelectedFile?.name.slice(0, 16)}.sig`}
          </div>
          <div className="document-cell-2-3-name">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
