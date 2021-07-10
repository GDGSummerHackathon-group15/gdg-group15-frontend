import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASEURI,
	withCredentials: true,
});

const client = {
	...instance,
	setAccessToken(access: string) {
		// Todo
	},
	removeAccessToken(){
		// Todo
	},
};

export default client;
