import api from './Api';
jest.mock('./Api');

describe('Api Class Test', () => {
  it('분야 조회 api', async () => {
    const response = [
      {
        partId: 1,
        partName: '프론트엔드',
      },
      {
        partId: 2,
        partName: '백엔드',
      },
    ];

    // @ts-ignore
    api.parts.mockResolvedValue(response);

    const data = await api.parts('get');
    expect(data).toEqual(response);
  });

  it('카테고리 리스트 조회 api', async () => {
    const response = [
      {
        mainCategoryId: 1,
        title: '프레임워크',
        subCategoryResponses: [
          {
            subCategoryId: 1,
            title: '자바',
          },
          {
            subCategoryId: 2,
            title: '자바스크립트',
          },
          {
            subCategoryId: 3,
            title: '파이썬',
          },
          {
            subCategoryId: 4,
            title: 'PHP',
          },
        ],
      },
    ];

    // @ts-ignore
    api.part.mockResolvedValue(response);

    const data = await api.part('get', 1);
    expect(data).toEqual(response);
  });

  it('도서 리스트 조회 api', async () => {
    const response = [
      {
        bookId: 1,
        title: '데이터베이스 개론',
        description: '데이터베이스 입문자를 위한 책입니다.',
        imageUrl: 'https://image.yes24.com/goods/67882661/XL',
        averageRating: 0,
        reviewerCount: 0,
        reviews: [],
      },
      {
        bookId: 2,
        title: '자바의 정석',
        description: '자바 입문자를 위한 책입니다.',
        imageUrl: 'https://image.yes24.com/goods/24259565/XL',
        averageRating: 0,
        reviewerCount: 0,
        reviews: [],
      },
    ];

    // @ts-ignore
    api.subCategories.mockResolvedValue(response);

    const data = await api.subCategories('get', 1);
    expect(data).toEqual(response);
  });

  it('책 상세페이지 조회 api', async () => {
    const response = {
      bookId: 2,
      title: '자바의 정석',
      description: '자바 입문자를 위한 책입니다.',
      imageUrl: 'https://image.yes24.com/goods/24259565/XL',
      averageRating: 0,
      reviewerCount: 0,
      reviews: [],
    };

    // @ts-ignore
    api.book.mockResolvedValue(response);

    const data = await api.book('get', 2);
    expect(data).toEqual(response);
  });

  it('유저 정보 + 위시 리스트 조회 api', async () => {
    const response = {
      userId: 1,
      avatarUrl: 'https://avatars.githubusercontent.com/u/68000537?v=4',
      userName: 'janeljs',
      wishes: [],
    };

    // @ts-ignore
    api.user.mockResolvedValue(response);

    const data = await api.user('get', 1);
    expect(data).toEqual(response);
  });

  it('Github 로그인 api', async () => {
    const response = {
      avatarUrl: 'https://avatars.githubusercontent.com/u/68000537?v=4',
      name: 'janeljs',
      jwt: 'test',
    };

    // @ts-ignore
    api.githubLogin.mockResolvedValue(response);

    const data = await api.githubLogin('post', 'test');
    expect(data).toEqual(response);
  });

  it('리뷰 추가 api', async () => {
    const response = {
      reviewId: 1,
      userResponse: {
        userId: 1,
        avatarUrl: 'https://avatars.githubusercontent.com/u/68000537?v=4',
        name: 'janeljs',
      },
      averageRating: 4.7,
      content: '리뷰 내용',
    };

    // @ts-ignore
    api.review.mockResolvedValue(response);

    const data = await api.review('post', {
      bookId: 1,
      averageRating: 4.7,
      content: '리뷰 내용',
    });
    expect(data).toEqual(response);
  });

  it('리뷰 수정 api', async () => {
    const response = {
      reviewId: 1,
      userResponse: {
        userId: 1,
        avatarUrl: 'https://avatars.githubusercontent.com/u/68000537?v=4',
        name: 'janeljs',
      },
      averageRating: 4.3,
      content: '리뷰 내용 수정',
    };

    // @ts-ignore
    api.review.mockResolvedValue(response);

    const data = await api.review('put', {
      reviewId: 1,
      averageRating: 4.3,
      content: '리뷰 내용 수정',
    });
    expect(data).toEqual(response);
  });

  it('위시리스트 등록 api', async () => {
    const response = {
      userId: 1,
      avatarUrl: 'https://avatars.githubusercontent.com/u/68000537?v=4',
      userName: 'janeljs',
      wishes: [
        {
          bookId: 1,
          title: '데이터베이스 개론',
          description: '데이터베이스 입문자를 위한 책입니다.',
          imageUrl: 'http://image.yes24.com/goods/67882661/XL',
        },
      ],
    };

    // @ts-ignore
    api.wish.mockResolvedValue(response);

    const data = await api.wish('post', 1);
    expect(data).toEqual(response);
  });

  it('위시리스트 삭제 api', async () => {
    const spy = jest.spyOn(api, 'wish');

    // @ts-ignore
    api.wish.mockResolvedValue();

    await api.wish('delete', 1);
    expect(spy).toReturn();
  });
});
