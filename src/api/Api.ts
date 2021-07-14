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
  avatarUrl: string | null | undefined;
  userName: string;
  wishes: {
    bookId: number;
    title: string;
    description: string;
    imageUrl: string;
  }[];
};

type ReviewReturn = {
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
  userId: number;
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
  private userId: number | undefined = undefined;

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

  isLoggedIn: boolean = false;

  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASEURI,
      withCredentials: false,
    });
  }

  async parts(method: 'get'): Promise<PartsReturn> {
    const resp = await this.instance[method]<PartsReturn>('/api/parts');
    return resp.data;
  }

  async part(method: 'get', payload: number): Promise<PartReturn> {
    const resp = await this.instance[method]<PartReturn>(`/api/parts/${payload}`);
    return resp.data;
  }

  async subCategories(method: 'get', payload: number): Promise<SubCategoriesReturn> {
    const resp = await this.instance[method]<SubCategoriesReturn>(`/api/subCategories/${payload}`);
    return resp.data;
  }

  async book(method: 'get', payload: number): Promise<BookReturn> {
    const resp = await this.instance[method]<BookReturn>(`/api/books/${payload}`);
    return resp.data;
  }

  async user(method: 'get'): Promise<UserReturn | undefined> {
    if (this.userId === undefined) return undefined;

    const resp = await this.instance[method]<UserReturn>(`/api/user/${this.userId}`);
    return resp.data;
  }

  async review(
    method: 'post',
    payload: {
      bookId: number;
      averageRating: number;
      content: string;
    }
  ): Promise<ReviewReturn>;
  async review(
    method: 'put',
    payload: {
      reviewId: number;
      averageRating: number;
      content: string;
    }
  ): Promise<ReviewReturn>;
  async review(method: 'put' | 'post', payload: any): Promise<ReviewReturn> {
    if (method === 'post') {
      const { bookId, ...rest } = payload;
      const resp = await this.instance[method]<ReviewReturn>(`/api/books/${bookId}/reviews`, rest);
      return resp.data;
    }

    const { reviewId, ...rest } = payload;
    const resp = await this.instance[method]<ReviewReturn>(`/api/reviews/${reviewId}`, rest);
    return resp.data;
  }

  async githubLogin(method: 'post', payload: string): Promise<GithubLoginReturn> {
    const resp = await this.instance[method]<GithubLoginReturn>(`/api/login?code=${payload}`);
    this.instance.defaults.headers.Authorization = `Bearer ${resp.data.jwt}`;
    this.userId = resp.data.userId;
    this.isLoggedIn = true;
    return resp.data;
  }

  async wish(method: 'post', payload: number): Promise<WishReturn>;
  async wish(method: 'delete', payload: number): Promise<void>;
  async wish(method: 'post' | 'delete', payload: number): Promise<WishReturn | void> {
    if (method === 'post') {
      const resp = await this.instance[method]<WishReturn>(`/api/books/${payload}/wishes`);
      return resp.data;
    }

    const resp = await this.instance[method]<void>(`/api/wishes/${payload}`);
    return resp.data;
  }
}

export default new AjaxController();
