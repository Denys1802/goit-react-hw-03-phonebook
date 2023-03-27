import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Form, Label, Input, Button } from './UserForm.styled';
class UserForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (
      this.props.contacts.find(el => {
        return el.name === this.state.name;
      })
    ) {
      alert('Its allready in case');
      this.reset();
      return;
    }
    const { name, number } = this.state;
    this.props.onSubmit({ name: name, number: number, id: nanoid() });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label htmlFor="">
            Name
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For examples Adrian,Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
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
              onChange={this.handleChange}
              value={this.state.number}
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
  handleSubmit: PropTypes.func,
};
