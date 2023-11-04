import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { nanoid } from 'nanoid';
import { Title } from 'components/App.styled';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('contacts'));
    console.log(contacts);
    if (contacts.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      window.localStorage.setItem(
        'contacts',
        JSON.stringify(this.state.contacts)
      );
    }
  }

  handleAddContact = contact => {
    const contactExists = this.state.contacts.some(
      oldName => oldName.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (contactExists) {
      alert(`${contact.name} is already exist`);
      return;
    }

    const id = nanoid();
    const newContact = {
      ...contact,
      id,
    };

    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleDeleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilterContact = filteredContact => {
    this.setState({ filter: filteredContact });
  };

  getfilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  render() {
    const filteredContacts = this.getfilteredContacts();
    const { filter } = this.state;
    return (
      <div>
        <Title>Phonebook</Title>
        <ContactForm onAddContact={this.handleAddContact} />

        <Title>Contacts</Title>
        <Filter filter={filter} onChangeInputValue={this.handleFilterContact} />
        <ContactList
          options={filteredContacts}
          onDeleteContact={this.handleDeleteContact}
        />
      </div>
    );
  }
}
