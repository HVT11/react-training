import './switch-button.scss';

import React from 'react';

interface ISwitchButtonProps {
  checked: boolean;
}

type State = {
  checked: boolean;
};

class SwitchButton extends React.Component<ISwitchButtonProps, State> {
  state = { checked: this.props.checked };

  static getDerivedStateFromProps(props: ISwitchButtonProps, state: State) {
    if (props.checked !== state.checked) {
      return {
        checked: props.checked,
      };
    } else return null;
  }

  handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ checked: event.target.checked });
  };

  render() {
    return (
      <label className="switch" style={{ margin: '0 20px' }}>
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleSwitch}
        />
        <span className="slider round"></span>
      </label>
    );
  }
}

export default SwitchButton;
