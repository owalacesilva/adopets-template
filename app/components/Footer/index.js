/**
 *
 * Footer
 *
 */

import React from 'react';
import { Layout, Row, Col } from 'antd';

import ImageLogo from '../ImageLogo';
import SocialMedias from '../SocialMedias';
import FooterLinks from '../FooterLinks';
import RightReserved from '../RightReserved';

const { Footer: AntFooter } = Layout;

/* eslint-disable react/prefer-stateless-function */
class Footer extends React.PureComponent {
  render() {
    return (
      <AntFooter className="container">
        <div className="container">
          <Row gutter={16}>
            <Col className="gutter-row" xs={24} sm={24} md={8} lg={8} xl={8}>
              <ImageLogo />
              <p className="about-us">We built adopets to help organizations place more pets and connect those pets to their new people faster.</p>
              <SocialMedias />              
            </Col>
            <Col className="gutter-row" xs={0} sm={0} md={16} lg={16} xl={16}>
              <FooterLinks />
            </Col>
          </Row>
          <RightReserved />
        </div>
      </AntFooter>
    );
  }
}

Footer.propTypes = {};

export default Footer;
