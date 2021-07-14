import * as React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import api from '../api';

function GithubLoginCallback() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code') ?? '';

  const [lock, setLock] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (code === '') return;

    api
      .githubLogin('post', code)
      .then(() => setLock(false))
      .catch(console.error);
  }, [code]);

  if (lock) return null;
  return <Redirect to={'/'} />;
}

export default GithubLoginCallback;
