export type PostRateReq = {
    value: number;
    id: number;
}

export type PostRateRes = {
    evaluate_id : number;
    user_id: number;
    value: number;
    evaluated_at: string;
}

export type GetSearchArticlesReq = {
    input: string;
    page: number;
    size : number;
}

export type PostScrapReq = {
    id: number;
}

export type PostScrapRes = {
    
    scrap_id: number;
    id: number;
    created_at: string;
    user_id: number;
}

export type GetArticleListReq = {
    category: string,
    probability?: number,
    media?: string,
    page: number
}

export interface IArticle {
    id: number;
    title: string;
    profile_image: string;
    summary: string;
    author: string;
    media: string;
    category: string;
    probability: number;
    created_at: string;
  }

export type GetArticleListRes = {
    
    totalPages: number,
    page: number,
    news : IArticle[];
    
}

export type GetArticleDetailReq = {
    id: number | undefined;
}

export type GetArticleDetailRes = {
    id: number,
    title: string,
    body: string,
    author: string,
    url: string, 
    media: string,
    probability: number,
    created_at: string,
    category: string,
}

export type GetCommentListReq = {
    id: number,
}

export interface IComment {
    id: number,
    userId: number
    articleId: number,
    user_title: string,
    probability: number,
    createdAt: string
}

export type GetCommentListRes = {
    commentList: IComment[]
}

export type PostCommentReq = {
    id: number,
    userTitle: string
}

export type PostCommentRes = {
    isSuccess: boolean
}

export type GetSearchingListReq = {
    keyword: string,
    page: number
}