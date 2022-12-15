import {IMeta} from "../../interfaces/Meta";
import {DATA_RECEIVED} from "../types";

interface IPayload {
    type: string
    payload: any
}

const initialState: IMeta = {
    loading: true,
    screen: 'main'
}
export const meta = <T extends IPayload>(state = initialState, {type, payload}: T) => {
    switch (type) {
        case DATA_RECEIVED:
            return {
                ...state,
                loading: payload
            }
        default:
            return state
    }
}