import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={60}
          text="Javascript"
        />
        <ProgressBar
          percent={70}
          text="ReactJS"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={50}
          text="Gatsby"
        />
        <ProgressBar
          percent={40}
          text="NodeJS"
        />
        {/* <ProgressBar
          percent={70}
          text="Python"
        /> */}
        {/* <ProgressBar
          percent={90}
          text="Mysql"
        />
        <ProgressBar
          percent={78}
          text="MongoDB"
        />
        <ProgressBar
          percent={80}
          text="Wordpress"
        /> */}
      </Col>
    </Row>
  </div>
);

// eslint-disable-next-line eol-last
export default SkillsProgress;