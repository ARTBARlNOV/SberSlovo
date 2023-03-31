import React, { useContext } from 'react';
import FirstFileContainer from '../../FilesContainer/FirstFileContainer/FirstFileContainer';
import SecondFileContainer from '../../FilesContainer/SecondFileContainer/SecondFileContainer';
import Context from '../../../Context/context';

export default function NoSelectedFilesVerifyBar() {
  const {
    tagSubmit,
  } = useContext(Context);

  return (
    <div>
      <form className="formCont" encType="multipart/form-data" onSubmit={tagSubmit} action="">
        <div className="verifyBar">
          <div className="verifyBar-2">
            <div className="verifyBar-title">
              Проверка электронной подписи
            </div>
            <div className="verifyBar-3">
              <div className="upload-files">
                <FirstFileContainer />
                <SecondFileContainer />
              </div>
            </div>
          </div>
          <button type="submit" className="button-check">
            <div className="button-check-name-1">
              <div className="button-check-name-2">
                Проверить подпись
              </div>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
