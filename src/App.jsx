import React, { useEffect, useState } from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Title } from 'components/App.styled';

export const App = () => {
  const [contactData, setContactData] = useState({
    contacts: [],
    filter: '',
  });

  useEffect(() => {
    const contactList = JSON.parse(window.localStorage.getItem('contacts'));
    if (contactList) {
      setContactData(prev => ({ ...prev, contact: contactList }));
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      'contacts',
      JSON.stringify(contactData.contacts)
    );
  }, [contactData.contacts]);

  const handleOnInput = e => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleAddContact = ({ name, number }) => {
    const contactExists = contactData.contacts.some(
      contact => contact.number === number
    );

    if (!contactExists) {
      setContactData(prev => ({
        ...prev,
        contacts: [...prev.contacts, { id: nanoid(), name, number }],
      }));
    } else {
      alert(`${name} is already exist`);
    }
  };

  const handleDeleteContact = id => {
    setContactData(prev => ({
      ...prev,
      contacts: [...prev.contacts.filter(contact => contact.id !== id)],
    }));
  };

  const handleFilterContact = filteredContact => {
    if (contactData.filter.trim() === '') {
      return contactData.contacts;
    }
    return contactData.contacts.filter(contact =>
      contact.name.toLowerCase().includes(contactData.filter.toLowerCase())
    );
  };

  const { filter } = contactData;
  const filteredContacts = handleFilterContact();
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm onAddContact={handleAddContact} />

      <Title>Contacts</Title>
      <Filter filter={filter} onChangeInputValue={handleOnInput} />
      <ContactList
        options={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
