import React, { useContext } from 'react';
import CommonInfo from '../CommonInfo/CommonInfo';
import img from '../../../assets/img/ic download.png';
import Context from '../../../Context/context';

export default function InfoChecked() {
  const { info } = useContext(Context);

  return (
    <div className="verifyBar-1-checked">
      <div className="verifyBar-1-2-checked">
        <div className="verifyBar-1-3-checked">
          <div className="verifyBar-1-3-title-1">
            Протокол проверки электронной подписи
          </div>
          <div className="verifyBar-1-3-info">
            <div className="verifyBar-1-3-info-alert">
              <img className="info-alert-logo" src={img} alt="info-alert-logo" />
              <div className="verifyBar-1-3-title-2">
                <div className="verifyBar-1-3-title-3">
                  Подпись принадлежит документу
                </div>
              </div>
            </div>
            <div className="verifyBar-1-3-text-container-1">
              <CommonInfo />
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
  );
}
