import './modal.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import Button from '../Button/NormalButton/Button';

interface IProps {
  stateModal: boolean;
  title: string;
  hasInput?: boolean;
  value: string;
  nameBtnPrimary: string;
  nameBtnSecondary?: string;
  onClickBtnPrimary: () => void;
  onClickBtnSecondary?: () => void;
  handleCloseModal: () => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

class Modal extends React.Component<IProps> {
  render() {
    const {
      title,
      hasInput,
      value,
      nameBtnPrimary,
      nameBtnSecondary,
      onClickBtnPrimary,
      onClickBtnSecondary,
      handleCloseModal,
      onChange,
    } = this.props;

    return (
      this.props.stateModal && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__body">
            <div className="modal__header">
              <h3 className="modal__title">{title}</h3>
              <IconButton icon={['fas', 'xmark']} onClick={handleCloseModal} />
            </div>
            <div className="d-flex d-flex--space-between">
              {hasInput && (
                <input
                  type="text"
                  className="modal__input"
                  value={value}
                  onChange={onChange}
                />
              )}
              {nameBtnPrimary && (
                <Button
                  label={nameBtnPrimary}
                  size="small"
                  onClick={onClickBtnPrimary}
                />
              )}
              {nameBtnSecondary && (
                <Button
                  label={nameBtnSecondary}
                  size="small"
                  onClick={onClickBtnSecondary}
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
