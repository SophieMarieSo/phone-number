import React from 'react';
import SearchBar from './SearchBar';
import ContactItem from './ContactItem';

export default function ContactList() {
  return (
    <div>
      <SearchBar />
      <ContactItem />
      <ContactItem />
      <ContactItem />
      <ContactItem />
    </div>
  );
}
