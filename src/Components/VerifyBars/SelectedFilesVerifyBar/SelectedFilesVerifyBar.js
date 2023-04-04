import React, { useContext } from 'react';
import FirstFileUploadedOff from '../../UploadedFiles/UploadedOff/FirstFileUploadedOff/FirstFileUploadedOff';
import FirstFileUploadedOn from '../../UploadedFiles/UploadedOn/FirstFileUploadedOn/FirstFileUploadedOn';
import UploadFileButton from '../../Buttons/UploadFileButton/UploadFileButton';
import SecondFileUploadedOff from '../../UploadedFiles/UploadedOff/SecondFileUploadedOff/SecondFileUploadedOff';
import SecondFileUploadedOn from '../../UploadedFiles/UploadedOn/SecondFileUploadedOn/SecondFileUploadedOn';
import CheckSignOff from '../../CheckSign/CheckSignOff/CheckSignOff';
import CheckSignOn from '../../CheckSign/CheckSignOn/CheckSignOn';
import FirstUploadedFileContainer from '../../FilesContainer/UploadedFileContainers/FirstUploadedFileContainer/FirstUploadedFileContainer';
import SecondUploadedFileContainer from '../../FilesContainer/UploadedFileContainers/SecondUploadedFileContainer/SecondUploadedFileContainer';
import Context from '../../../Context/context';

export default function SelectedFilesVerifyBar() {
  const {
    firstSelectedFile,
    secondSelectedFile,
    tagSubmit,
  } = useContext(Context);
  return (
    <div>
      <form className="formCont" encType="multipart/form-data" onSubmit={tagSubmit} action="">
        <div className="verifyBar-uploaded">
          <div className="verifyBar-2-uploaded">
            <div className="verifyBar-title-uploaded">
              Проверка электронной подписи
            </div>
            <div className="verifyBar-3-uploaded">
              <div className="upload-files-uploaded">
                <div className="upload-file-1-uploaded">
                  {!firstSelectedFile ? (
                    <FirstFileUploadedOff />
                  ) : (
                    <FirstFileUploadedOn />
                  )}
                  <div className="upload-file-1-1-uploaded">
                    <div className="upload-file-1-2-uploaded">
                      <div className="upload-file-1-2-title-1-uploaded">
                        Загрузите подписанный документ
                      </div>
                      <div className="upload-file-1-2-title-2-uploaded">
                        Вы можете загрузить документы в формате pdf
                      </div>
                    </div>
                    {!firstSelectedFile ? (
                      <UploadFileButton document={document} />
                    ) : (
                      <FirstUploadedFileContainer />
                    )}
                  </div>
                </div>
                <div className="upload-file-2-uploaded">
                  {!secondSelectedFile ? (
                    <SecondFileUploadedOff />
                  ) : (
                    <SecondFileUploadedOn />
                  )}
                  <div className="upload-file-2-1-uploaded">
                    <div className="upload-file-2-2-uploaded">
                      <div className="upload-file-2-2-title-1-uploaded">
                        Загрузите подпись
                      </div>
                      <div className="upload-file-2-2-title-2-uploaded">
                        Файл подписи обычно имеет формат формат .sig
                      </div>
                    </div>
                    <div>
                      {!secondSelectedFile ? (
                        <UploadFileButton />
                      ) : (
                        <SecondUploadedFileContainer />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {!firstSelectedFile || !secondSelectedFile ? (
            <CheckSignOff />
          ) : (
            <CheckSignOn />
          )}
        </div>
      </form>
    </div>
  );
}
