import './avatar.scss';

import React from 'react';

export interface AvatarProps {
  url: string | null | undefined;
  username: string;
  circle?: boolean;
  size?: 'small' | 'medium' | 'large';
}

class Avatar extends React.Component<Partial<AvatarProps>> {
  render() {
    const mode = this.props.circle ? 'avatar--border-radius' : '';
    let userName = this.props.username ? this.props.username.charAt(0).toUpperCase() : '';
    let styles: React.CSSProperties | undefined;
    if (this.props.url) {
      styles = {
        backgroundImage: `url(${this.props.url})`,
      };
      userName = '';
    }
    return (
      <div
        className={['avatar', `avatar--${this.props.size}`, mode].join(' ')}
        style={styles}
      >
        {userName}
      </div>
    );
  }
}

export default Avatar;
