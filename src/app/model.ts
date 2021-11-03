export interface GenericListResponse<T> {
  data: Array<T>;
  total: number;
  page: number;
  limit: number;
}
