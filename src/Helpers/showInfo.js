const showInfo = (info) => (info.success ? (
  <div className="verifyBar-1-checked">
    <div className="verifyBar-1-2-checked">
      <div className="verifyBar-1-3-checked">
        <div className="verifyBar-1-3-title-1">
          Протокол проверки электронной подписи
        </div>
        <div className="verifyBar-1-3-info">
          <div className="verifyBar-1-3-info-alert">
            <img className="info-alert-logo" src="/Pictures/circle.png" alt="info-alert-logo" />
            <div className="verifyBar-1-3-title-2">
              <div className="verifyBar-1-3-title-3">
                Подпись принадлежит документу
              </div>
            </div>
          </div>
          <div className="verifyBar-1-3-text-container-1">
            <div className="verifyBar-1-3-text-container-1-2">
              <div className="verifyBar-1-3-text-container-1-2-title">
                Основная информация
              </div>
              <div className="verifyBar-1-3-text-container-1-2-body">
                <div className="verifyBar-1-3-text-container-1-2-body-1">
                  <div className="verifyBar-1-3-text-container-1-2-body-title-1">ID ключа</div>
                  <div className="verifyBar-1-3-text-container-1-2-body-body-1">{info?.key_guid}</div>
                </div>
                <div>
                  <div className="verifyBar-1-3-text-container-1-2-body-1">
                    <div className="verifyBar-1-3-text-container-1-2-body-title-1">ФИО подписанта</div>
                    <div className="verifyBar-1-3-text-container-1-2-body-body-1">{info?.signer_full_name}</div>
                  </div>
                </div>
                <div>
                  <div className="verifyBar-1-3-text-container-1-2-body-1">
                    <div className="verifyBar-1-3-text-container-1-2-body-title-1">ИНН подписанта</div>
                    <div className="verifyBar-1-3-text-container-1-2-body-body-1">{info?.signer_inn}</div>
                  </div>
                </div>
                <div>
                  <div className="verifyBar-1-3-text-container-1-2-body-1">
                    <div className="verifyBar-1-3-text-container-1-2-body-title-1">Дата подписания</div>
                    <div className="verifyBar-1-3-text-container-1-2-body-body-1">{info?.signature_time_msk}</div>
                  </div>
                </div>
                <div>
                  <div className="verifyBar-1-3-text-container-1-2-body-1">
                    <div className="verifyBar-1-3-text-container-1-2-body-title-1">ID Подписи</div>
                    <div className="verifyBar-1-3-text-container-1-2-body-body-1">{info?.signature_guid}</div>
                  </div>
                </div>
                <div>
                  <div className="verifyBar-1-3-text-container-1-2-body-1">
                    <div className="verifyBar-1-3-text-container-1-2-body-title-1">ID Документа</div>
                    <div className="verifyBar-1-3-text-container-1-2-body-body-1">{info?.document_origin_guid}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="verifyBar-1-3-text-container-2-1">
              <div className="verifyBar-1-3-text-container-2-1-title">
                Владелец подписи
              </div>
              <div className="verifyBar-1-3-text-container-2-1-body">
                {info?.signer_full_name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
) : (
  <div className="verifyBar-1-rejected">
    <div className="verifyBar-1-2-rejected">
      <div className="verifyBar-1-3-rejected">
        <div className="verifyBar-1-3-title-rejected">
          Протокол проверки электронной подписи
        </div>
        <div className="verifyBar-1-3-info-container-rejected">
          <div className="verifyBar-1-3-info-alert-rejected">
            <img className="info-alert-rejected" src="/Pictures/ic cross in circle.png" alt="rejected" />
            <div className="verifyBar-1-3-body-rejected">
              <div className="verifyBar-1-3-body-title-rejected">
                Подпись не принадлежит документу
              </div>
            </div>
          </div>
          <div className="verifyBar-1-4-info-container-rejected">
            <div className="verifyBar-1-5-info-container-rejected">
              <div className="verifyBar-1-5-info-container-title-rejected">
                Возможные причины ошибки:
              </div>
              <div className="verifyBar-1-5-info-container-body-rejected">
                <div className="verifyBar-1-5-info-container-text-rejected">
                  <div>1. Документ был изменен;</div>
                  <div> 2. Электронная подпись была создана для другого документа;</div>
                  <div> 3. Электронная подпись изменена;</div>
                  <div> 4. Электронная подпись была создана в другом сервисе.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
));

export default showInfo;
