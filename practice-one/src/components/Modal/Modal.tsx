import './modal.scss';

import React from 'react';

import IconButton from '../Button/IconButton/IconButton';
import Button from '../Button/NormalButton/Button';

interface IModal {
  title: string;
  nameBtn1: string;
  onClickBtn1: () => void;
  nameBtn2?: string;
  onClickBtn2?: () => void;
  hasInput?: boolean;
}

type State = {
  isOpened: boolean;
};

class Modal extends React.Component<IModal, State> {
  state = {
    isOpened: true,
  };

  handleClose = () => {
    this.setState({ isOpened: false });
  };

  render() {
    const { title, hasInput, nameBtn1, nameBtn2, onClickBtn1, onClickBtn2 } = this.props;
    return (
      this.state.isOpened && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__body">
            <div className="modal__header">
              <h3 className="modal__title">{title}</h3>
              <IconButton icon={['fas', 'xmark']} onClick={this.handleClose} />
            </div>
            <div className="d-flex d-flex--space-between">
              {hasInput && <input type="text" />}
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
