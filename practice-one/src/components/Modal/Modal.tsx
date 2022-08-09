import './modal.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import Button from '../Button/NormalButton/Button';

interface IModal {
  stateModal: boolean;
  title: string;
  nameBtn1: string;
  onClickBtn1: () => void;
  value: string;
  nameBtn2?: string;
  onClickBtn2?: () => void;
  hasInput?: boolean;
  // eslint-disable-next-line no-unused-vars
  onHandleChange: (event: React.FormEvent<HTMLInputElement>) => void;
  handleCloseModal: () => void;
}

class Modal extends React.Component<IModal> {
  render() {
    const { title, hasInput, nameBtn1, nameBtn2, onClickBtn1, onClickBtn2 } = this.props;
    return (
      this.props.stateModal && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__body">
            <div className="modal__header">
              <h3 className="modal__title">{title}</h3>
              <IconButton icon={['fas', 'xmark']} onClick={this.props.handleCloseModal} />
            </div>
            <div className="d-flex d-flex--space-between">
              {hasInput && (
                <input
                  type="text"
                  value={this.props.value}
                  onChange={this.props.onHandleChange}
                />
              )}
              {nameBtn1 && <Button label={nameBtn1} size="small" onClick={onClickBtn1} />}
              {nameBtn2 && <Button label={nameBtn2} size="small" onClick={onClickBtn2} />}
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Modal;
