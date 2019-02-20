/**
 *
 * FooterLinks
 *
 */

import React from 'react';
import { Row, Col } from 'antd';

function FooterLinks() {
  return <Row gutter={16}>
    <Col className="gutter-row" xs={24} sm={24} md={6} lg={6} xl={6}>
      <h5 className="list-heading">Discover</h5>
      <ul className="list-items">
        <li><a href="">About us </a></li>
        <li><a href="">Contact us</a></li>
        <li><a href="">How it works</a></li>
        <li><a href="">Blog</a></li>
        <li><a href="">FAQ</a></li>
      </ul>
    </Col>
    <Col className="gutter-row" xs={24} sm={24} md={6} lg={6} xl={6}>
      <h5 className="list-heading">Services</h5>
      <ul className="list-items">
        <li><a href="">For Organizations</a></li>
        <li><a href="">For Adopets</a></li>
      </ul>
    </Col>
    <Col className="gutter-row" xs={24} sm={24} md={6} lg={6} xl={6}>
      <h5 className="list-heading">Full supported cities</h5>
      <ul className="list-items">
        <li><a href="">Oregan</a></li>
        <li><a href="">Maine</a></li>
        <li><a href="">Boston <span style={{ color: '#FFA046' }}>(coming soon)</span></a></li>
      </ul>
    </Col>
    <Col className="gutter-row" xs={24} sm={24} md={6} lg={6} xl={6}>
      <h5 className="list-heading">Terms and Policies</h5>
      <ul className="list-items">
        <li><a href="">Terms of use</a></li>
        <li><a href="">Terms of Payment</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Security Policy</a></li>
      </ul>
    </Col>
  </Row>;
}

FooterLinks.propTypes = {};

export default FooterLinks;
