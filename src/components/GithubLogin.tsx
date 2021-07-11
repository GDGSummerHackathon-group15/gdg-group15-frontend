import { LoginAnchor } from './GithubLogin.styles';

const GITHUB_LOGIN_URI = 'https://github.com/login/oauth/authorize';
const CLIENT_ID = `client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}`;
const REDIRECT_URI = `redirect_uri=${window.origin}/oauth/github`;
const LOGIN_URI = `${GITHUB_LOGIN_URI}?${CLIENT_ID}&${REDIRECT_URI}`;

const GithubLogo = () => (
  <svg width={24} height={24} viewBox={'0 0 24 24'}>
    <path
      d={
        'M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82A7.616 7.616 0 0012 7.868a7.643 7.643 0 00-2.003.269c-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118a3.092 3.092 0 00-.824 2.147c0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385A8 8 0 0112 4a8 8 0 012.534 15.59z'
      }
    />
  </svg>
);

function GithubLogin() {
  return (
    <LoginAnchor href={LOGIN_URI}>
      <GithubLogo />
      <span>Github 계정으로 로그인</span>
    </LoginAnchor>
  );
}

export default GithubLogin;
