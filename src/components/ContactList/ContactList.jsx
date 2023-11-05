import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { ContactItem, Contacts, DeleteButton } from './ContactList.styled';

export const ContactList = ({ options, onDeleteContact }) => {
  return (
    <Contacts>
      {options.map(({ id, name, number }) => (
        <ContactItem key={nanoid()}>
          {name}: {number}
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete
          </DeleteButton>
        </ContactItem>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
