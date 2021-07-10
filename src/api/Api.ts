import axios from 'axios';
import type { AxiosInstance } from 'axios';

export type HttpMethod = 'get' | 'put' | 'post' | 'delete';

interface AllowItem {
  parts: ['get'];
  part: ['get'];
  subCategories: ['get'];
  book: ['get'];
  user: ['get'];
  review: ['put', 'post'];
  githubLogin: ['post'];
  wish: ['post', 'delete'];
}

type AllowKeys =
  | 'parts'
  | 'part'
  | 'subCategories'
  | 'book'
  | 'user'
  | 'review'
  | 'githubLogin'
  | 'wish';

export type RequestKey =
  | 'get.parts'
  | 'get.part'
  | 'get.subCategories'
  | 'get.book'
  | 'get.user'
  | 'put.review'
  | 'post.review'
  | 'post.wish'
  | 'post.githubLogin'
  | 'delete.wish';

type PartsReturn = {
  partId: number;
  partName: string;
}[];

type PartReturn = {
  mainCategoryId: number;
  title: string;
  subCategoryResponses: {
    subCategoryId: number;
    title: string;
  }[];
}[];

type SubCategoriesReturn = {
  bookId: number;
  title: string;
  description: string;
  imageUrl: string;
  averageRating: number;
  reviewerCount: number;
  reviews: {
    reviewId: number;
    averageRating: number;
    content: string;
    userResponse: {
      userId: number;
      avatorUrl: string;
      name: string;
    };
  }[];
}[];

type BookReturn = {
  bookId: number;
  title: string;
  description: string;
  imageUrl: string;
  averageRating: number;
  reviewerCount: number;
  reviews: {
    reviewId: number;
    averageRating: number;
    content: string;
    userResponse: {
      userId: number;
      avatorUrl: string;
      name: string;
    };
  }[];
};

type UserReturn = {
  userId: number;
  avatarUrl: string;
  name: string;
  wishes: {
    bookId: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
};

type ReivewReturn = {
  reviewId: number;
  userResponse: {
    userId: number;
    avatarUrl: string;
    name: string;
  };
  averageRating: number;
  content: string;
};

type GithubLoginReturn = {
  avatarUrl: string;
  name: string;
  jwt: string;
};

type WishReturn = {
  userId: number;
  avatarUrl: string;
  userName: string;
  wishes: {
    bookId: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
};

class AjaxController {
  private instance: AxiosInstance;

  private allowItems: AllowItem = {
    parts: ['get'],
    part: ['get'],
    subCategories: ['get'],
    book: ['get'],
    user: ['get'],
    review: ['put', 'post'],
    githubLogin: ['post'],
    wish: ['post', 'delete'],
  };

  private allowKeys: AllowKeys[];
  private allowMethods: HttpMethod[];

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASEURI,
      withCredentials: false,
    });

    const keys = Object.keys(this.allowItems) as AllowKeys[];
    this.allowKeys = keys;
    this.allowMethods = keys.reduce<HttpMethod[]>((acc, key) => {
      const item = this.allowItems[key];

      item.forEach((el: HttpMethod) => {
        if (!acc.includes(el)) acc.push(el);
      });

      return acc;
    }, []);
  }

  async parts<Return = PartsReturn>(method: 'get'): Promise<Return> {
    const resp = await this.instance[method]<Return>('/api/parts');
    return resp.data;
  }

  async part<Return = PartReturn>(method: 'get', payload: number): Promise<Return> {
    const resp = await this.instance[method]<Return>(`/api/parts/${payload}`);
    return resp.data;
  }

  async subCategories<Return = SubCategoriesReturn>(
    method: 'get',
    payload: number
  ): Promise<Return> {
    const resp = await this.instance[method]<Return>(`/api/subCategories/${payload}`);
    return resp.data;
  }

  async book<Return = BookReturn>(method: 'get', payload: number): Promise<Return> {
    const resp = await this.instance[method]<Return>(`/api/books/${payload}`);
    return resp.data;
  }

  async user<Return = UserReturn>(method: 'get', payload: number): Promise<Return> {
    const resp = await this.instance[method]<Return>(`/api/user/${payload}`);
    return resp.data;
  }

  async review<Return = ReivewReturn>(
    method: 'post',
    payload: {
      bookId: number;
      averageRating: number;
      content: string;
    }
  ): Promise<Return>;
  async review<Return = ReivewReturn>(
    method: 'put',
    payload: {
      reviewId: number;
      averageRating: number;
      content: string;
    }
  ): Promise<Return>;
  async review<Return = ReivewReturn>(method: 'put' | 'post', payload: any): Promise<Return> {
    if (method === 'post') {
      const { bookId, ...rest } = payload;
      const resp = await this.instance[method]<Return>(`/api/books/${bookId}/reviews`, rest);
      return resp.data;
    }

    const { reviewId, ...rest } = payload;
    const resp = await this.instance[method]<Return>(`/api/reviews/${reviewId}`, rest);
    return resp.data;
  }

  async githubLogin<Return = GithubLoginReturn>(method: 'post', payload: string): Promise<Return> {
    const resp = await this.instance[method]<Return>(`/api/login?code=${payload}`);
    return resp.data;
  }

  async wish<Return = WishReturn>(method: 'post', payload: number): Promise<Return>;
  async wish<Return = void>(method: 'delete', payload: number): Promise<Return>;
  async wish<Return = WishReturn | void>(
    method: 'post' | 'delete',
    payload: number
  ): Promise<Return> {
    if (method === 'post') {
      const resp = await this.instance[method]<Return>(`/api/books/${payload}/wishes`);
      return resp.data;
    }

    const resp = await this.instance[method]<Return>(`/api/wishes/${payload}`);
    return resp.data;
  }
}

export default new AjaxController();
