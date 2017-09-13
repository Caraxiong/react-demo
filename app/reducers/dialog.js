import {
    SHOW_DIALOG,
    HIDE_DIALOG
} from '../constants/ActionTypes'

const initState = {
    bool: false,
    data: 'sdfdsfsdafsadfsdafsdafsdafsdgfag'
}

const dialogReducer = (state = initState, action) => {
    switch (action.type) {
        case HIDE_DIALOG:
            return {...state, ...{bool:false, data:''}}
        case SHOW_DIALOG:
            return {...state, ...{bool:true, data:'success'}}
        default:
            return state
    }
}

export default dialogReducer
