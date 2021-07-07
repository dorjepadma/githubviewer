import React, { Component } from 'react';
import Repos from '../components/Repos/Repos';
import { fetchUserRepos } from '../services/github.js';
import PropTypes from 'prop-types';

export default class UserRepos extends Component {
  static propTypes = {
    username: PropTypes.string
  }
  
  state = {
    repos: [],
    loading: true,
  }
  fetchUserRepos = () => {
    if(!this.props.username) return;

    this.setState({ loading: true });
    fetchUserRepos(this.props.username)
      .then(repos =>{
        this.setState({ repos, loading: false });
      });
  }
  componentDidMount() {
    this.fetchUserRepos();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.username !== this.props.username) {
      this.fetchUserRepos();
    }
  }
  render() {
    const { repos } = this.state;

    return (
      <Repos repos={repos} />
    );
  }
}

