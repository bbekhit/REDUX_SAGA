import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { createUser } from "../redux/actions/userActions";

class NewUserForm extends Component {
  state = {
    firstName: "",
    lastName: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName } = this.state;

    // this.props.onSubmit({
    //   firstName,
    //   lastName,
    // });
    this.props.createUser({ firstName, lastName });

    this.setState({
      firstName: "",
      lastName: "",
    });
  };

  handleFirstNameChange = (e) => {
    this.setState({
      firstName: e.currentTarget.value,
    });
  };

  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.currentTarget.value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormGroup>
          <Label>First name</Label>
          <Input
            required
            type="text"
            value={this.state.firstName}
            onChange={this.handleFirstNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Last name</Label>
          <Input
            required
            type="text"
            value={this.state.lastName}
            onChange={this.handleLastNameChange}
          />
        </FormGroup>
        <FormGroup>
          <Button block outline type="submit" color="primary">
            Create
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default connect(null, { createUser })(NewUserForm);
