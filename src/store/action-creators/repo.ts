import {Dispatch} from "redux";
import axios from "axios";
import {RepoAction, RepoActionTypes} from "../../types/repos";

export const fetchRepos = (value) => {
    return async (dispatch: Dispatch<RepoAction>) => {
        try {
            dispatch({type: RepoActionTypes.FETCH_REPO})
            const response = await axios.get(`https://api.github.com/users/${value}/repos?sort=updated&per_page=10&page=1`)
            setTimeout(() => {
                dispatch({type: RepoActionTypes.FETCH_REPO_SUCCESS, payload: response.data})
            }, 500)
        } catch (e) {
            dispatch({
                type: RepoActionTypes.FETCH_REPO_ERROR,
                payload: 'Произошла ошибка при загрузке списка дел'
            })
        }
    }
}