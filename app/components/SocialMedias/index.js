/**
 *
 * SocialMedias
 *
 */

import React from 'react';
import { Icon } from 'antd';

function SocialMedias() {
  return <ul className="social-medias">
    <li>
      <a href="">
        <Icon type="facebook" style={{ fontSize: '22px' }} />
      </a>
    </li>
    <li>
      <a href="">
        <Icon type="twitter" style={{ fontSize: '22px' }} />
      </a>
    </li>
    <li>
      <a href="">
        <Icon type="instagram" style={{ fontSize: '22px' }} />
      </a>
    </li>
  </ul>;
}

SocialMedias.propTypes = {};

export default SocialMedias;
