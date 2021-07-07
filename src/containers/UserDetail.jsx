  
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import User from '../components/user/User';
import { fetchUserDetail } from '../services/github';

export default class UserDetail extends Component {
  static propTypes = {
    username: PropTypes.string.isRequired
  }

  state = {
    user: null,
    loading: true
  }
  
  fetchUserDetail = () => {
    if(!this.props.username) return;
    this.setState({ loading: true });
    fetchUserDetail(this.props.username)
      .then(user => this.setState({ user, loading: false }));
  }

  componentDidMount() {
    this.fetchUserDetail();
  }

  componentDidUpdate(prevProps) {
    
    if(prevProps.username !== this.props.username) this.fetchUserDetail();
  }

  render() {
    const { user, loading } = this.state;
    if(loading || !user) return <h1>Patience</h1>;

    return (
      <User {...user} />
    );
  }
}
