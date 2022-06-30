
export interface ReposState {
    repos: Repo[];
    loading: boolean;
    error: null | string;
}
export interface Repo {
    language: string;
    name : string;
    html_url : string;
    created_at : string;
    pushed_at : string
}
export enum RepoActionTypes {
    FETCH_REPO = 'FETCH_REPO',
    FETCH_REPO_SUCCESS = 'FETCH_REPO_SUCCESS',
    FETCH_REPO_ERROR = 'FETCH_INFO_FETCH_REPO_ERROR',
}
interface FetchRepoAction {
    type: RepoActionTypes.FETCH_REPO;
}
interface FetchRepoSuccessAction {
    type: RepoActionTypes.FETCH_REPO_SUCCESS;
    payload: Repo
}
interface FetchRepoErrorAction {
    type: RepoActionTypes.FETCH_REPO_ERROR;
    payload: string;
}
export type RepoAction = FetchRepoAction | FetchRepoSuccessAction | FetchRepoErrorAction
