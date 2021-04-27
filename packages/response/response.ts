export interface ResponseError {
  code: number
  message: string
}
export class Response<T> {
  constructor(
    public succeeded: boolean,
    public payload: T,
    public errors?: ResponseError[]
  ) {
    return {
      succeeded,
      payload,
      errors
    }
  }
}
