const showVerifyBar = (
  file1,
  file2,
  clickHandler,
  clickHandler2,
  tagSubmit,
  uploadHandler,
  uploadHandler2,
  date,
  filePicker,
  filePicker2,
) => (!file1 && !file2 ? (
  <div>
    <form className="formCont" encType="multipart/form-data" onSubmit={tagSubmit} action="">
      <div className="verifyBar">
        <div className="verifyBar-2">
          <div className="verifyBar-title">
            Проверка электронной подписи
          </div>
          <div className="verifyBar-3">
            <div className="upload-files">
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
                      <input type="file" className="hidden" onChange={uploadHandler} ref={filePicker} />
                      <button type="button" onClick={clickHandler} className="button-1">
                        <img src="/Pictures/ic download.png" className="pic-for-button-1" alt="vector" />
                        <div className="button-1-name">
                          Загрузить документ
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
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
                    <input type="file" className="hidden" onChange={uploadHandler2} ref={filePicker2} />
                    <button type="button" onClick={clickHandler2} className="button-2">
                      <img src="/Pictures/ic download.png" className="pic-for-button-1" alt="vector" />
                      <div className="button-2-name">
                        Загрузить подпись
                      </div>
                    </button>
                  </div>
                </div>
              </div>
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
) : (
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
                {!file1 ? (
                  <div className="step-number-1-uploaded-off">
                    <div className="step-number-1-number-uploaded-off">
                      1
                    </div>
                    <div className="step-number-1-circle-uploaded-off" />
                  </div>
                ) : (
                  <div className="step-number-1-uploaded-on">
                    <div className="step-number-1-number-uploaded-on">
                      1
                    </div>
                    <div className="step-number-1-circle-uploaded-on" />
                  </div>
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
                  {!file1 ? (
                    <div className="upload-file-1-2-title-2">
                      <input type="file" className="hidden" accept=".pdf" onChange={uploadHandler} ref={filePicker} />
                      <button type="button" onClick={clickHandler} className="button-1">
                        <img src="/Pictures/ic download.png" className="pic-for-button-1" alt="vector" />
                        <div className="button-1-name">
                          Загрузить документ
                        </div>
                      </button>
                    </div>
                  ) : (
                    <div className="document-cell-1-uploaded">
                      <div className="document-cell-1-2-uploaded">
                        <img className="document-cell-1-2-pic-uploaded" src="/Pictures/ic document downloaded.png" alt="dogovor" />
                        <div className="document-cell-1-3-uploaded">
                          <div className="document-cell-1-3-title">
                            {file1?.name}
                          </div>
                          <div className="document-cell-1-3-name">
                            {date}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="upload-file-2-uploaded">
                {!file2 ? (
                  <div className="step-number-2-uploaded-off">
                    <div className="step-number-2-number-uploaded-off">
                      2
                    </div>
                    <div className="step-number-2-circle-uploaded-off" />
                  </div>
                ) : (
                  <div className="step-number-2-uploaded-on">
                    <div className="step-number-2-number-uploaded-on">
                      2
                    </div>
                    <div className="step-number-2-circle-uploaded-on" />
                  </div>
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
                    {!file2 ? (
                      <div className="upload-file-2-2-title-2">
                        <input type="file" className="hidden" accept=".sig,.txt" onChange={uploadHandler2} ref={filePicker2} />
                        <button type="button" onClick={clickHandler2} className="button-2">
                          <img src="/Pictures/ic download.png" className="pic-for-button-1" alt="vector" />
                          <div className="button-2-name">
                            Загрузить подпись
                          </div>
                        </button>
                      </div>
                    ) : (
                      <div className="document-cell-2-uploaded">
                        <div className="document-cell-2-2-uploaded">
                          <img className="document-cell-2-2-pic-uploaded" src="/Pictures/ic document downloaded.png" alt="dogovor" />
                          <div className="document-cell-2-3-uploaded">
                            <div className="document-cell-2-3-title">
                              {file2?.name}
                            </div>
                            <div className="document-cell-2-3-name">
                              {date}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {!file1 || !file2 ? (
          <button type="submit" className="button-check-uploaded-off">
            <div className="button-check-name-1-uploaded-off">
              <div className="button-check-name-2-uploaded-off">
                Проверить подпись
              </div>
            </div>
          </button>
        ) : (
          <button type="submit" className="button-check-uploaded-on">
            <div className="button-check-name-1-uploaded-on">
              <div className="button-check-name-2-uploaded-on">
                Проверить подпись
              </div>
            </div>
          </button>
        )}
      </div>
    </form>
  </div>
)
);

export default showVerifyBar;
