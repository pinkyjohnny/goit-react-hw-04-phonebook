import React from 'react';
import {
  Button,
  Form,
  Input,
  Labelfirst,
  Labelsecond,
} from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends React.Component {
  state = INITIAL_STATE;

  handleSubmit = e => {
    const { name, number } = this.state;
    e.preventDefault();
    this.props.onAddContact({
      name,
      number,
    });

    this.setState(INITIAL_STATE);
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { name, number } = this.state;

    return (
      <div>
        <Form action="" onSubmit={this.handleSubmit}>
          <Labelfirst htmlFor="">
            Name:
            <Input
              onChange={this.handleInputChange}
              value={name}
              type="text"
              name="name"
              required
            />
          </Labelfirst>
          <Labelsecond htmlFor="">
            Number:
            <Input
              onChange={this.handleInputChange}
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
  }
}
