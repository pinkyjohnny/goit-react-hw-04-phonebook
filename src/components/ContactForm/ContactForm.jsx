import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Form,
  Input,
  Labelfirst,
  Labelsecond,
} from './ContactForm.styled';

export const ContactForm = ({ onAddContact }) => {
  const [contactData, setContactData] = useState({
    name: '',
    number: '',
  });

  const handleInputChange = eve => {
    setContactData({ ...contactData, [eve.target.name]: eve.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = contactData;
    onAddContact({
      name,
      number,
    });
    setContactData({ name: '', number: '' });
  };

  const { name, number } = contactData;
  return (
    <div>
      <Form action="" onSubmit={handleSubmit}>
        <Labelfirst>
          Name:
          <Input
            onChange={handleInputChange}
            value={name}
            type="text"
            name="name"
            required
          />
        </Labelfirst>
        <Labelsecond htmlFor="">
          Number:
          <Input
            onChange={handleInputChange}
            value={number}
            type="tel"
            name="number"
            required
          />
        </Labelsecond>
        <Button>Add contact</Button>
      </Form>
    </div>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
