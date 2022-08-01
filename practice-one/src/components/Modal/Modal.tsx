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
    return (
      this.state.isOpened && (
        <div className="modal">
          <div className="modal__overlay"></div>
          <div className="modal__body">
            <div className="modal__header">
              <h3 className="modal__title">{this.props.title}</h3>
              <IconButton icon={['fas', 'xmark']} onClick={this.handleClose} />
            </div>
            <div className="d-flex d-flex--space-between">
              {this.props.hasInput && <input type="text" />}
              {this.props.nameBtn1 && (
                <Button
                  label={this.props.nameBtn1}
                  size="small"
                  onClick={this.props.onClickBtn1}
                />
              )}
              {this.props.nameBtn2 && (
                <Button
                  label={this.props.nameBtn2}
                  size="small"
                  onClick={this.props.onClickBtn2}
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
