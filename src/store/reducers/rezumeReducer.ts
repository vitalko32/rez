import {RezumeAction, RezumeActionTypes, RezumeState} from "../../types/rezume";

const initialState: RezumeState = {
    rezume: {public_repos: "", login: "", blog: "", followers: ""},
    error: null,
    loading: false
}

export const rezumeReducer = (state = initialState, action: RezumeAction): RezumeState => {
    switch (action.type) {
        case RezumeActionTypes.FETCH_REZUMES:
            return {...state, loading: true}
        case RezumeActionTypes.FETCH_REZUMES_SUCCESS:
            return {...state, loading: false, rezume: action.payload}
        case RezumeActionTypes.FETCH_REZUMES_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}
