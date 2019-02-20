/**
 *
 * RightReserved
 *
 */

import React from 'react';
import { Row, Col } from 'antd';
import source from '../../images/logo-mobile.svg';

function RightReserved() {
  return (
    <div className="right-reserved">
      <Row gutter={16}>
        <Col span={24}>
          <img src={source} alt="Adopets" />
          <strong>adopets</strong> All right reserved @2018
        </Col>
      </Row>
    </div>
  );
}

RightReserved.propTypes = {};

export default RightReserved;
