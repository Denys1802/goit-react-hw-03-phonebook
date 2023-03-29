import PropTypes from 'prop-types';

import { Component } from 'react';
import { Form, Label, Input, Button } from './UserForm.styled';

class UserForm extends Component {
  render() {
    return (
      <>
        <Form onSubmit={this.props.onSubmit}>
          <Label htmlFor="">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For examples Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.props.onChange}
              value={this.props.nameValue}
            />
          </Label>

          <Label>
            Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.props.onChange}
              value={this.props.numberValue}
            />
          </Label>
          <Button type="submit">Add contacts</Button>
        </Form>
      </>
    );
  }
}

export default UserForm;

UserForm.propTypes = {
  onSubmit: PropTypes.func,
};
