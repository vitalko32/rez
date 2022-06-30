import {Dispatch} from "redux";
import axios from "axios";
import {RezumeAction, RezumeActionTypes, Rezume} from "../../types/rezume";

export const fetchRezume = (searchValue) => {
    return async (dispatch: Dispatch<RezumeAction>) => {
        try {
            dispatch({type: RezumeActionTypes.FETCH_REZUMES})
            const response = await axios.get<any>(`https://api.github.com/users/${searchValue}`)
            console.log(response.data)
                setTimeout(() => {
                    dispatch({type: RezumeActionTypes.FETCH_REZUMES_SUCCESS, payload: response.data})
                }, 500)


        } catch (e) {
            dispatch({
                type: RezumeActionTypes.FETCH_REZUMES_ERROR,
                payload: 'Произошла ошибка при загрузке списка'
            })
        }
    }
}
