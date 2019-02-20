/**
 *
 * SignupOurNewsletter
 *
 */

import React from 'react';
import { Row, Col, Input, Button, Form, Icon } from 'antd';

/* eslint-disable react/prefer-stateless-function */
class SignupOurNewsletter extends React.PureComponent {

  handleSubmit = () => () => {
    alert('submit')
  }

  render() {
    return (
      <div className="newsletter">
        <Row>
          <Col xs={0} sm={0} md={24} lg={24}>
            <Form layout="inline" onSubmit={this.handleSubmit()}>
              <Form.Item>
                <span className="text-simple">Signup our newsletter</span>
              </Form.Item>
              <Form.Item>
                <Input placeholder="Your name" />
              </Form.Item>
              <Form.Item>
                <Input type="email" placeholder="E-mail" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit">
                  Sign In
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={24} sm={24} md={0} lg={0}>
            <Button type="primary" htmlType="submit">
              Signup our nesletter
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

SignupOurNewsletter.propTypes = {};

export default SignupOurNewsletter;
