import {combineReducers} from "redux";
import {meta} from "./meta";
import {store} from "../../index";

export const rootReducer = combineReducers({meta})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch