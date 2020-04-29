export const fetchUserDetail = username => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json())
    .then(json => ({
      username: json.login,
      followers: json.followers,
      following: json.following,
      image: json.avatar_url,
      profileUrl: json.html_url
    }));
};

export const fetchUserRepos = username => {
  return fetch(`https://api.github.com/users/${username}/repos`)
    .then(res => res.json())
    .then(json => json.map(repo => ({
      name: repo.name,
      language: repo.language,
      url: repo.html_url,
      description: repo.description
    })));
};
