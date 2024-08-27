import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function SearchBar() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();

  return (
    <Row>
      <Col lg={9} sm={9}>
        <Form.Control
          type='text'
          placeholder='이름을 입력하시오'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Col>
      <Col lg={3} sm={3}>
        <Button
          onClick={() => {
            dispatch({ type: 'FILTER_CONTACT', payload: { search } });
            setSearch('');
          }}
        >
          찾기
        </Button>
      </Col>
    </Row>
  );
}
