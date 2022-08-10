import './modal.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import Button from '../Button/NormalButton/Button';

interface IModal {
  stateModal: boolean;
  title: string;
  hasInput?: boolean;
  value: string;
  nameBtnPrimary: string;
  nameBtnSecondary?: string;
  onClickBtnPrimary: () => void;
  onClickBtnSecondary?: () => void;
  onhandleCloseModal: () => void;
  onHandleChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

class Modal extends React.Component<IModal> {
  render() {
    const {
      title,
      hasInput,
      value,
      nameBtnPrimary,
      nameBtnSecondary,
      onClickBtnPrimary,
      onClickBtnSecondary,
      onhandleCloseModal,
      onHandleChange,
    } = this.props;

    return (
      this.props.stateModal && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__body">
            <div className="modal__header">
              <h3 className="modal__title">{title}</h3>
              <IconButton icon={['fas', 'xmark']} onHandleClick={onhandleCloseModal} />
            </div>
            <div className="d-flex d-flex--space-between">
              {hasInput && (
                <input
                  type="text"
                  className="modal__input"
                  value={value}
                  onChange={onHandleChange}
                />
              )}
              {nameBtnPrimary && (
                <Button
                  label={nameBtnPrimary}
                  size="small"
                  onHandleClick={onClickBtnPrimary}
                />
              )}
              {nameBtnSecondary && (
                <Button
                  label={nameBtnSecondary}
                  size="small"
                  onHandleClick={onClickBtnSecondary}
                />
              )}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Modal;
