import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { Button, Col, Row } from 'react-bootstrap';

export default function ContactList() {
  const { contactList, search } = useSelector((state) => state);
  const [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (search !== '') {
      const list = contactList.filter((item) => item.name.includes(search));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [search, contactList]);

  return (
    <div>
      <SearchBar />
      <Row className='total-container'>
        <Col lg={9} sm={9} className='total'>
          TOTAL: {filteredList?.length}
        </Col>
        <Col lg={3} sm={3}>
          <Button
            variant='outline-primary'
            size='sm'
            onClick={() => setFilteredList(contactList)}
          >
            모두보기
          </Button>
        </Col>
      </Row>
      {filteredList?.map((contact, idx) => (
        <ContactItem key={idx} contact={contact} />
      ))}
    </div>
  );
}
