
export type PostScrapReq = {
    id: number,
    value: boolean,
}

export type GetScrapListReq = {
    page: number
}

export type GetScrapListRes = {
    status: number,
    page: number,
    size: number,
    data: IScrap []

}

export interface IScrap {
    trueValue: number,
    falseValue: number
}