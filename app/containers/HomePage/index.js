/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Layout, Row, Col, Input, Form, Button, Icon } from 'antd';

import HeaderAdopets from '../../components/Header';
import SignupOurNewsletter from '../../components/SignupOurNewsletter';
import FooterAdopets from '../../components/Footer';

import source from '../../images/happy_dog.svg';

const { Content } = Layout;

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <Layout className="layout">
        {/* Header adopets */}
        <HeaderAdopets />

        {/* Home page content */}
        <Content className="container-home-page">
          <Row type="flex" justify="center" align="middle" gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={12} lg={18} xl={18}>
              <h2 className="heading">My saved pets</h2>
              <Row type="flex" justify="end" align="middle" gutter={16}>
                <Col
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <img src={source} width="314.98px" height="322.03px" />
                </Col>
                <Col
                  className="gutter-row"
                  xs={24}
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                >
                  <h2 className="sub-heading">
                    You didn't save any pets yet...
                  </h2>
                  <p style={{ marginBottom: '40px' }}>
                    Like some pet or do you want to make a list with several
                    options
                  </p>
                  <Row type="flex" justify="start" align="middle" gutter={16}>
                    <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                      <Input
                        suffix={
                          <Icon
                            type="arrow-right"
                            style={{ color: '#B42051' }}
                          />
                        }
                        placeholder="Search from an address here..."
                      />
                    </Col>
                    <Col xs={0} sm={0} md={8} lg={8} xl={8}>
                      <Button htmlType="submit">find my pet</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>

        {/* Newsletters */}
        <SignupOurNewsletter />

        {/* Footer adopets */}
        <FooterAdopets />
      </Layout>
    );
  }
}
