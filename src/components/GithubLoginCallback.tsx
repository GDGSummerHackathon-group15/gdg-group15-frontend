import * as React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import api from '../api';
import { useSetUserInfo } from '../context';

function GithubLoginCallback() {
  const history = useHistory();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const code = params.get('code') ?? '';

  const setUserInfo = useSetUserInfo();

  React.useEffect(() => {
    if (code === '') return;

    api
      .githubLogin('post', code)
      .then((resp) => api.user('get', resp.userId))
      .then((resp) => {
        setUserInfo(resp);
      })
      .catch(console.error)
      .finally(() => history.push('/'));
  }, [code, history, setUserInfo]);

  return null;
}

export default GithubLoginCallback;
