import axios from 'axios';
import type { AxiosInstance } from 'axios';

export type HttpMethod =
  | 'get'
	| 'put'
	| 'post'
	| 'delete';

interface AllowItem {
	categories: ['get'];
	category: ['get'];
	roadmaps: ['get'];
	book: ['get'];
	user: ['get'];
	review: ['put', 'post'];
	wish: ['post', 'delete'];
}

type AllowKeys =
  | 'categories'
	| 'category'
	| 'roadmaps'
	| 'book'
	| 'user'
	| 'review'
	| 'wish';

export type RequestKey =
  | 'get.categories'
  | 'get.category'
  | 'get.roadmaps'
  | 'get.book'
  | 'get.user'
  | 'put.review'
  | 'post.review'
  | 'post.wish'
  | 'post.delete';

class AjaxController {
	private instance: AxiosInstance;

	private allowItems: AllowItem = {
		categories: ['get'],
		category: ['get'],
		roadmaps: ['get'],
		book: ['get'],
		user: ['get'],
		review: ['put', 'post'],
		wish: ['post', 'delete'],
	};

	private allowKeys: AllowKeys[];
	private allowMethods: HttpMethod[];

	constructor() {
		this.instance = axios.create({
			baseURL: process.env.REACT_APP_BASEURI,
			withCredentials: true,
		});

		const keys = Object.keys(this.allowItems) as AllowKeys[];
		this.allowKeys = keys;
		this.allowMethods = keys.reduce<HttpMethod[]>((acc, key) => {
			const item = this.allowItems[key];

			item.forEach((el) => {
				if (!acc.includes(el)) acc.push(el);
			});

			return acc;
		}, []);
	}

	// Todo
	private categories(method: 'get'): void {
		return;
	}

	// Todo
	private category(method: 'get'): void {
		return;
	}

	// Todo
	private roadmaps(method: 'get'): void {
		return;
	}

	// Todo
	private book(method: 'get'): void {
		return;
	}

	// Todo
	private user(method: 'get'): void {
		return;
	}

	// Todo
	private review(method: 'put'): void;
	private review(method: 'post'): void;
	private review(method: any): void {
		if (method === 'put') {
			return;
		}
		if (method === 'post') {
			return;
		}
		return;
	}

	// Todo
	private wish(method: 'post'): void;
	private wish(method: 'delete'): void;
	private wish(method: any): void {
		if (method === 'post') {
			return;
		}
		if (method === 'delete') {
			return;
		}
		return;
	}

	private methodGuard(method: string): method is HttpMethod {
		if ((this.allowMethods as string[]).includes(method)) {
			return true;
		}
		return false;
	}

	private routeKeyGuard(key: string): key is AllowKeys {
		if ((this.allowKeys as string[]).includes(key)) {
			return true;
		}
		return false;
	}

	private requestKeySplitHelper(key: RequestKey): [HttpMethod, AllowKeys] {
		const splits = key.split('.');
		if (splits.length !== 2) {
			throw new Error('request not allowed method!');
		}

		const [method, routeKey] = splits;

		if (!this.methodGuard(method)) {
			throw new Error('request not allowed method!');
		}
		if (!this.routeKeyGuard(routeKey)) {
			throw new Error('request not allowed method!');
		}

		return [method, routeKey];
	}

	private allowMethodValidator(method: HttpMethod, routeKey: AllowKeys) {
		const methods: HttpMethod[] = this.allowItems[routeKey];
		if (methods.includes(method)) return true;
		return false;
	}

	request(key: RequestKey) {
		const [method, routeKey] = this.requestKeySplitHelper(key);

		if (!this.allowMethodValidator(method, routeKey)) {
			throw new Error('request not allowed method!');
		}

		const ajaxFn = this[routeKey];
		return ajaxFn;
	}
}

export default new AjaxController();
