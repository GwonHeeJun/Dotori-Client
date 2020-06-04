import React, { useRef, useEffect, useCallback } from "react";
import * as S from "./Style";
import { usePopupContext } from "../../Utils/Context/PopupContext";

interface PopupChildrenProps {
  popupId?: number;
}

interface PopupInfo {
  id?: number;
  title: string;
  message?: string;
  element?: JSX.Element;
  confirmLabel?: string;
  confirmAction?: () => void;
  closeLabel?: string;
  closeAction?: () => void;
  showOnlyBody?: boolean;
  withoutClose?: boolean;

}

interface PopupProps {
  info: PopupInfo;
}

const Popup: React.FC<PopupProps> = (props) => {
  const { info } = props;
  const { removePopup } = usePopupContext();

  const buttonRef = useRef<HTMLButtonElement>();

  const clonedElement = info.element
    ? React.cloneElement(info.element, {
        popupId: info.id,
      } as PopupChildrenProps)
    : undefined;

  const onConfirm = useCallback(() => {
    if (info.confirmAction) {
      info.confirmAction();
    }
    removePopup(info.id);
  }, [info, removePopup]);

  const onClose = useCallback(() => {
    if (info.closeAction) {
      info.closeAction();
    }
    removePopup(info.id);
  }, [info, removePopup]);

  const onModalInnerClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
  }, []);

  return (
    <S.Postioner onClick={onClose}>
      <S.ModalWrapper onClick={onModalInnerClick} width={700}>
        <S.ModalHeader>{info.title}</S.ModalHeader>
        {info.message && (
          <S.Message>
            {info.message}
          </S.Message>
        )}
        {clonedElement && <S.Message>
          {clonedElement}
        </S.Message>}
        {!info.showOnlyBody && (
          <S.ModalButtonWrapper>
            {info.withoutClose && <S.Button onClick={onClose} isClose>
              <span>{info.closeLabel || "취소"}</span>
            </S.Button>}
            <S.Button onClick={onConfirm} isClose={false}>
              <span>{info.confirmLabel || "확인"}</span>
            </S.Button>
          </S.ModalButtonWrapper>
        )}
      </S.ModalWrapper>
    </S.Postioner>
  );
};

export default Popup;
