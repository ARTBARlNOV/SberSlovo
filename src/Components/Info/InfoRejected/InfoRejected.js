import React from 'react';
import img2 from '../../../assets/img/ic document downloaded.png';

export default function InfoRejected(props) {
  return (
    <div className="verifyBar-1-rejected">
      <div className="verifyBar-1-2-rejected">
        <div className="verifyBar-1-3-rejected">
          <div className="verifyBar-1-3-title-rejected">
            Протокол проверки электронной подписи
          </div>
          <div className="verifyBar-1-3-info-container-rejected">
            <div className="verifyBar-1-3-info-alert-rejected">
              <img className="info-alert-rejected" src={img2} alt="rejected" />
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
  );
}
