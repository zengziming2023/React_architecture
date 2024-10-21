export interface BLResponse<T> {
    data: T
    code: number | string
    message: string
    requestId: string
    success: boolean
    errorData: object
}

export function isSuccess(blRsp: BLResponse<object>): boolean {
    return blRsp.code === 0
}