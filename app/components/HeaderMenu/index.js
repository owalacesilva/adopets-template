/**
 *
 * HeaderMenu
 *
 */

import React from 'react';
import { Row, List, Icon } from 'antd';

function HeaderMenu() {
  return <List grid={{ gutter: 16, column: 3 }}>
    <List.Item key="1">
      <Row type="flex" justify="center" align="middle">
        <Icon type="laptop" />
        <span style={{ marginLeft: 5 }}>Applications</span>
      </Row>
    </List.Item>
    <List.Item key="2">
      <Row type="flex" justify="center" align="middle">
        <Icon type="heart" />
        <span style={{ marginLeft: 5 }}>Saved</span>
      </Row>
    </List.Item>
    <List.Item key="3">
      <Row type="flex" justify="center" align="middle">
        <Icon type="like" />
        <span style={{ marginLeft: 5 }}>Social vote</span>
      </Row>
    </List.Item>
  </List>;
}

HeaderMenu.propTypes = {};

export default HeaderMenu;
