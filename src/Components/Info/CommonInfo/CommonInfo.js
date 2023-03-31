import React, { useContext } from 'react';
import Context from '../../../Context/context';

export default function CommonInfo() {
  const { info } = useContext(Context);
  return (
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
  );
}
