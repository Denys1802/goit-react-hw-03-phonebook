import PropTypes from 'prop-types';

import { Component } from 'react';
import { List, Item, ContactsBtn } from './ContactsList.styled';

class Contacts extends Component {
  render() {
    return this.props.filterContacts.map(contact => (
      <List key={contact.id}>
        <Item>
          <p>
            {contact.name}: {contact.number}
          </p>
          <ContactsBtn
            type="button"
            onClick={() => this.props.deleteContact(contact.id)}
            id={contact.id}
          >
            Delete
          </ContactsBtn>
        </Item>
      </List>
    ));
  }
}
export default Contacts;

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};
