import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function ContactForm() {
  const [info, setInfo] = useState({ name: '', phoneNum: '' });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group className='mb-3' controlId='formName'>
        <Form.Label>이름</Form.Label>
        <Form.Control
          type='text'
          placeholder='이름을 입력하시오'
          onChange={(e) => {
            setInfo({ ...info, name: e.target.value });
          }}
        />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formContact'>
        <Form.Label>전화번호</Form.Label>
        <Form.Control
          type='number'
          placeholder='전화번호를 입력하시오'
          onChange={(e) => {
            setInfo({ ...info, phoneNum: e.target.value });
          }}
        />
      </Form.Group>
      <Button variant='primary' type='submit'>
        추가하기
      </Button>
    </Form>
  );
}
