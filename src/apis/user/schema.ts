
export type GetUserInfoRes = {
    id: number,
    username: string,
    email: string,
    createdAt: string,
    social: boolean
    providerId: string
}

export type PatchUserInfoReq = {
    
    username: string,
    email: string
    
}
