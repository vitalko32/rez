
export interface RezumeState {
    rezume: Rezume;
    loading: boolean;
    error: null | string;
}

export interface Rezume {
    public_repos: string;
    followers: string;
    blog: string;
    login : string;
}

export enum RezumeActionTypes {
    FETCH_REZUMES= 'FETCH_REZUMES',
    FETCH_REZUMES_SUCCESS= 'FETCH_REZUMES_SUCCESS',
    FETCH_REZUMES_ERROR= 'FETCH_REZUMES_ERROR',
}

interface FetchRezumeAction {
    type: RezumeActionTypes.FETCH_REZUMES
}
interface FetchRezumeSuccessAction {
    type: RezumeActionTypes.FETCH_REZUMES_SUCCESS;
    payload: Rezume;
}
interface FetchRezumeErrorAction {
    type: RezumeActionTypes.FETCH_REZUMES_ERROR;
    payload: string;
}

export type RezumeAction =
    FetchRezumeAction
    | FetchRezumeSuccessAction
    | FetchRezumeErrorAction