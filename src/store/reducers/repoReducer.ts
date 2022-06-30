import {RepoActionTypes, RepoAction, ReposState, Repo} from "../../types/repos";

const initialState: any = {
    repos: [],
    error: null,
    loading: false
}

export const repoReducer = (state = initialState, action: RepoAction): ReposState => {
    switch (action.type) {
        case RepoActionTypes.FETCH_REPO:
            return {...state, loading: true}
        case RepoActionTypes.FETCH_REPO_SUCCESS:
            return {...state, loading: false, repos: action.payload}
        case RepoActionTypes.FETCH_REPO_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
