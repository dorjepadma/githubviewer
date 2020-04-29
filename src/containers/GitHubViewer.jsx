import React, { Component } from 'react';
import Controls from '../components/Controls';
import UserDetail from './UserDetail';
import UserRepo from './UserRepo';

export default class GitHubViewer extends Component {
  state = {
    inputText: '',
    username: ''
  }

  handleChange = ({ target }) => {
    this.setState({ inputText: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
  
    this.setState(state => ({ username: state.inputText, inputText: '' }));
  }

  render() {
    const { username, inputText } = this.state;

    return (
      <>
        <Controls text={inputText} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <UserDetail username={username} />
        <UserRepo username={username} />
      </>
    );
  }
}
