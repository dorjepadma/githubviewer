import React, { Component } from 'react';
import Controls from '../components/Controls';

export default class GitHubViewer extends Component {
  state = {
    username: ''
  }

  handleChange = ({ target }) => {
    this.setState({ username: target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.username);
  }

  render() {
    const { username } = this.state;

    return (
      <Controls text={username} onChange={this.handleChange} onSubmit={this.handleSubmit} />
    );
  }
}
