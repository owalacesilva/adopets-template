/**
 *
 * Header
 *
 */

import React from 'react';
import { Layout, Row, Col, Input, Button, List, Form, Icon } from 'antd';
import ImageLogo from './../ImageLogo';
import HeaderMenu from './../HeaderMenu';

const { Header: AntHeader } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Header extends React.PureComponent {

  handleSubmit = () => () => {
    alert('submit')
  }

  render() {
    return (
      <AntHeader>
        <Row type="flex" gutter={16} align="middle">
          <Col className="gutter-row" xs={24} sm={24} md={10} lg={10} xl={10}>
            <Row type="flex" justify="start" align="middle" gutter={16}>
              <Col xs={0} sm={0} md={6} lg={6} xl={6}>
                <ImageLogo />
              </Col>
              <Col xs={24} sm={24} md={18} lg={18} xl={18}>
                <Row type="flex" justify="start" align="middle" gutter={16}>
                  <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <Input 
                      suffix={<Icon type="arrow-right" style={{ color: '#B42051' }} />} 
                      placeholder="Search from an address here..." />
                  </Col>
                  <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                    <Button htmlType="submit">
                      find my pet
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row" xs={0} sm={0} md={14} lg={14} xl={14}>
            <Row type="flex" justify="around" align="middle" gutter={16}>
              <Col xs={0} sm={0} md={24} lg={24} xl={14}>
                <HeaderMenu />
              </Col>
              <Col className="col-border-left" xs={0} sm={0} md={0} lg={0} xl={10}>
                <List grid={{ gutter: 16, column: 2 }}>
                  <List.Item>
                    <Button type="primary" shape="round" icon="search" style={{ marginTop: '5px' }}>
                      Help me
                    </Button>
                    {/*<Button type="primary" shape="circle" icon="search"></Button>*/}
                  </List.Item>
                  <List.Item>
                    <a className="nav-menu">
                      <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="Image Profile" />
                      <span>Hi, <strong>Fred!</strong></span>
                    </a>
                  </List.Item>
                </List>
              </Col>
            </Row>
          </Col>
        </Row>
      </AntHeader>
    );
  }
}

Header.propTypes = {};

export default Header;
