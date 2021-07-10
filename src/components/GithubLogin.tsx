const GITHUB_LOGIN_URI = 'https://github.com/login/oauth/authorize';
const CLIENT_ID = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
const REDIRECT_URI = 'redirect_uri=http://localhost:3000';
const LOGIN_URI = `${GITHUB_LOGIN_URI}?${CLIENT_ID}&${REDIRECT_URI}`;

function GithubLogin() {
  return <a href={LOGIN_URI}>Github Login</a>;
}

export default GithubLogin;
