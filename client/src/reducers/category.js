import {
GET_GATEGORYS,
CATEGORY_ERROR,
ADD_CATEGORY
} from '../actions/types'

const initialState = {
    category: null,
    categorys: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const {
        type,
        payload
    } = action;

    switch (type) {
        case ADD_CATEGORY:
            return {
                ...state,
                category: payload,
                loading: false
            }
        case GET_GATEGORYS:
            return {
                ...state,
                categorys: payload,
                loading: false
            }
        case CATEGORY_ERROR:
            return {
                ...state,
                error: payload,
                categorys: [],
                loading: false
            }
        default:
            return state;
    }
}