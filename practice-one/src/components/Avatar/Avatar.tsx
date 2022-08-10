import './avatar.scss';

import clsx from 'clsx';
import React from 'react';

export interface AvatarProps {
  url: string | null;
  username: string;
  circle?: boolean;
  size?: 'small' | 'medium' | 'large';
}

class Avatar extends React.Component<Partial<AvatarProps>> {
  render() {
    const { circle, username, url, size } = this.props;

    let userName = username ? username.charAt(0).toUpperCase() : '';

    let styles: React.CSSProperties | undefined;
    if (url) {
      styles = { backgroundImage: `url(${url})` };
      userName = '';
    }

    return (
      <div
        className={clsx('avatar', `avatar--${size}`, { 'avatar--border-radius': circle })}
        style={styles}
      >
        {userName}
      </div>
    );
  }
}

export default Avatar;
