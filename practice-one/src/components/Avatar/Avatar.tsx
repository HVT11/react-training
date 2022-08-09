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
    const { circle, username, url, size } = this.props;
    const mode = circle ? 'avatar--border-radius' : '';
    let userName = username ? username.charAt(0).toUpperCase() : '';
    let styles: React.CSSProperties | undefined;
    if (url) {
      styles = {
        backgroundImage: `url(${url})`,
      };
      userName = '';
    }
    return (
      <div className={['avatar', `avatar--${size}`, mode].join(' ')} style={styles}>
        {userName}
      </div>
    );
  }
}

export default Avatar;
