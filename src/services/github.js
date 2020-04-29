export const fetchUser = () => {
  return fetch('https://api.github.com/users/dorjepadma')
    .then(res => res.json());

};
