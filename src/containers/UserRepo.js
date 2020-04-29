import React, { Component } from 'react';
import User from '../components/user/User.jsx';
import { fetchUser } from '../services/github.js';

export default class FinalUser extends Component {
  state = {
    user: [],
    loading: true,
  }
  componentDidMount() {
    console.log('test')
    fetchUser()
      .then(user => this.setState({ user, loading: false }
      ))
  }
  render() {
    const { user, loading } = this.state;
    if(loading) return <h1>Patience</h1>;

    return (
      <User {...user} />
    );
  }
}

