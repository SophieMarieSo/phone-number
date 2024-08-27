import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

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
      <div className='total-container'>
        <div className='total'>TOTAL: {filteredList?.length}</div>
        <Button
          variant='outline-primary'
          size='sm'
          onClick={() => setFilteredList(contactList)}
        >
          모두보기
        </Button>
      </div>
      {filteredList?.map((contact, idx) => (
        <ContactItem key={idx} contact={contact} />
      ))}
    </div>
  );
}
