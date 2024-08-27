import React from 'react';
import SearchBar from './SearchBar';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';

export default function ContactList() {
  const contactList = useSelector((state) => state.contactList);

  return (
    <div>
      <SearchBar />
      {contactList?.map((contact, idx) => (
        <ContactItem key={idx} contact={contact} />
      ))}
    </div>
  );
}
