import React, { Component } from 'react';
import {} from 'immutable';
import { connect } from 'react-redux';
import styled from '@emotion/styled';
import Input from '../elements/Input';
import Select from '../elements/Select';
import { addHero } from '../actions/actions';

const color = 'hotpink'

const Container = styled.div`
  margin-top: 1em;
`

const Button = styled.div`
  color: ${color};
  cursor: pointer;
  padding: 0.25em 0;
  border: 1px solid black;
  font-size: 1.5em;
  margin-top: 1em;
`

const Form = styled.div`

`

class AddHero extends Component {
  state = {
    name: '',
    attribute: 'str',
  }

  onChange = e => {
    const name = e.target.name;
    this.setState({ [name]: e.target.value });
  };

  render() {

    const { addHero } = this.props;

    return (
    <Container 
      className="column is-6 is-offset-3 box">
      <Form>
      <Input
        name="name"
        onChange={this.onChange}
        value={this.state.name}
        />
        <Select 
          name="attribute"
          onChange={this.onChange}
          value={this.state.attribute}
        />
      </Form>
      <div className="has-text-weight-semibold has-text-centered">
        <Button
          onClick={() => addHero({
            name: this.state.name, 
            attribute: this.state.attribute
          })}
          >Add hero with emotion</Button>
      </div>
    </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    heroes: 1
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addHero: ({name, attribute}) => dispatch(addHero({name, attribute})),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddHero);