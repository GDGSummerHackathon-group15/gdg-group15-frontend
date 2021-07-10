import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURI,
  withCredentials: true,
});

const client = {
  ...instance,
  setAccessToken(access: string) {
    this.defaults.headers.Authorization = `Bearer ${access}`;
    return;
  },
  removeAccessToken(){
    delete this.defaults.headers.Authorization;
    return;
  },
};

export default client;
