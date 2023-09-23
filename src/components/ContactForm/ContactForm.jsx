import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormButton, FormElement, Input, Label } from './ContactForm.styled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  handleSubmitButton = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.reset();
  };

  reset = () =>
    this.setState({
      name: '',
      number: '',
    });

  render() {
    return (
      <FormElement onSubmit={this.handleSubmitButton}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <FormButton type="submit">Add contact</FormButton>
      </FormElement>
    );
  }
}

export default Form;
