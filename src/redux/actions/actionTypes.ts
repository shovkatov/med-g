import {DATA_RECEIVED, SCREEN_CHANGED} from "../types";

interface ITypes {
    type: string
    payload: any
}

export const Change_Screen_Main: ITypes = {
    type: SCREEN_CHANGED,
    payload: "main"
}
export const IsLoaded: ITypes = {
    type: DATA_RECEIVED,
    payload: false
}