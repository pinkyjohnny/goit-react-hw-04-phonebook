import React from 'react';
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
