import './header.scss';

import React from 'react';

interface IHeaderProps {
  children?: React.ReactNode;
}

class Header extends React.Component<IHeaderProps> {
  render() {
    return (
      <header className="header">
        <h1 className="header__branch">{this.props.children}</h1>
      </header>
    );
  }
}

export default Header;
