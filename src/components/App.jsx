import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Form } from "./Form/Form";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

import { Title, Contacts } from './App.styled';


export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    
  };

  addContact = (name, number) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    
    if (contacts.find(contact => contact.name === newContact.name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  // formSubmitHandler = data => {
  //   console.log(data);
  // }

  componentDidMount() {

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts })
    } 
  };

  componentDidUpdate(prevProps, prevState) {
   
    if (this.state.contacts !== prevState.contacts) {

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
      <Title>Phonebook</Title>
        <Form onSubmit={this.addContact}></Form>
      <Contacts>Contacts</Contacts>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        </>
    );
  };
};
