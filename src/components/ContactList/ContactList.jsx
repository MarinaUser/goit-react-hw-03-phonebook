import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, DelBtn  } from './ContactList.styled';

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Item key={id}>
          <span>{name}: </span>
          <span>{number} </span>
          <DelBtn
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </DelBtn>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func.isRequired,
};


