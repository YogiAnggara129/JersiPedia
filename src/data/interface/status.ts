export interface IFetchStatus {
  status: 'LOADING' | 'FAILED' | 'SUCCESS';
  errorMessage?: string;
}
