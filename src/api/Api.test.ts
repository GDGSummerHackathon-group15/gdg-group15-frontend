import api from './Api';
import type { RequestKey } from './Api';

const validKeys: RequestKey[] = [
	'get.categories',
	'get.category',
	'get.roadmaps',
	'get.book',
	'get.user',
	'put.review',
	'post.review',
	'post.wish',
	'post.delete',
];

describe('Api Class Test', () => {
	it.each(validKeys)('유요한 key (%s) 를 넣어서 함수 실행', (key) => {
		const spy = jest.spyOn(api, 'request');
		api.request(key);

		expect(spy).toHaveReturned();
	});

	it('유효하지 않은 키가 들어가는 경우 오류 발생', () => {
		const wrongKey = 'delete.categories' as RequestKey;
		const testFn = () => {
			api.request(wrongKey);
		};

		expect(testFn).toThrow();
	});
});
