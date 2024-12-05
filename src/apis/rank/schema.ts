export type GetRankingRes = {
    status: number,
    data: IRank []
  }

export interface IRank {
    id: number,
    title: string
}
