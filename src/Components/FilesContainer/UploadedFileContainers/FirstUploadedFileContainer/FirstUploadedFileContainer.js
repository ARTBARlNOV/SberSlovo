import React, { useContext } from 'react';
import img2 from '../../../../assets/img/ic document downloaded.png';
import Context from '../../../../Context/context';
import { date } from '../../../../consts/consts';

export default function FirstUploadedFileContainer() {
  const {
    firstSelectedFile,
  } = useContext(Context);
  return (
    <div className="document-cell-1-uploaded">
      <div className="document-cell-1-2-uploaded">
        <img className="document-cell-1-2-pic-uploaded" src={img2} alt="dogovor" />
        <div className="document-cell-1-3-uploaded">
          <div className="document-cell-1-3-title">
            {`${firstSelectedFile?.name.slice(0, 16)}.pdf`}
          </div>
          <div className="document-cell-1-3-name">
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}
