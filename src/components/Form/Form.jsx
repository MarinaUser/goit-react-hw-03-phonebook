import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContact, FormLabel, FormInput, AddBtn } from './Form.styled';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

 nanoidIdName = nanoid();
 nanoidIdNumber = nanoid();

  handleChange = evt => {
    const { name, value } = evt.target;
  
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <FormContact onSubmit={this.handleSubmit}>
        <FormLabel htmlFor={this.nanoidIdName}>
          Name
          <FormInput
            value={this.state.name}
            id={this.nanoidIdName}
            onChange={this.handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </FormLabel>
        <FormLabel htmlFor={this.nanoidIdNumber}>
          Number
          <FormInput
            value={this.state.number}
            id={this.nanoidIdNumber}
            onChange={this.handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </FormLabel>
        <AddBtn type="submit">
          Add contact
        </AddBtn>
      </FormContact>
    );
  }
}