import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function SearchBar() {
  return (
    <Row>
      <Col lg={9} sm={9}>
        <Form.Control type='text' placeholder='이름을 입력하시오' />
      </Col>
      <Col lg={3} sm={3}>
        <Button>찾기</Button>
      </Col>
    </Row>
  );
}
