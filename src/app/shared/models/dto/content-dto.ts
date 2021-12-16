export interface ContentDTO<T> {
  code: number;
  status: string;
  messages: string[];
  result: T;
}
