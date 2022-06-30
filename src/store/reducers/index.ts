import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {todoReducer} from "./todoReducer";
import {previewReducer} from "./priviewReducer";
import {infoReducer} from "./infoReducer";
import {rezumeReducer} from "./rezumeReducer";
import {repoReducer} from "./repoReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    todo: todoReducer,
    preview: previewReducer,
    info: infoReducer,
    rezume: rezumeReducer,
    repo: repoReducer
})

export type RootState = ReturnType<typeof rootReducer>
