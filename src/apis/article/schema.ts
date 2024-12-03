export type PostRateReq = {
    value: number;
    news_id: number;
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
    news_id: number;
}

export type PostScrapRes = {
    
    scrap_id: number;
    news_id: number;
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
    articles : IArticle[];
    
}

export type GetArticleDetailReq = {
    news_id: number;
}

export type GetArticleDetailRes = {
    news_id: number,
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
    news_id: number,
    page: number,
    size: number
}

export type GetCommentListRes = {
    
    totalPages: number,
    page: number
    comments: [
        commentId: number,
        userId: number,
        username: string,
        comment: string
    ]
    
}

export type PostCommentReq = {
    news_id: number,
    content: string
}

export type PostCommentRes = {
    isSuccess: boolean
}