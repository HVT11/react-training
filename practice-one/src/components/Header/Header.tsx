import './header.scss';

import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

class Header extends React.Component<IProps> {
  render() {
    const { children } = this.props;

    return (
      <header className="header">
        <h1 className="header__branch">{children}</h1>
      </header>
    );
  }
}

export default Header;
