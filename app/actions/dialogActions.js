import * as types from '../constants/ActionTypes'

const showDialog = (bool,data) => {
    return {
        type : types.SHOW_DIALOG,
        bool,
        data
    }
}

const hideDialog = (bool) => {
    return {
        type : types.HIDE_DIALOG,
        bool
    }
}

export const showDialogFun = (bool,data) => dispatch => {
    dispatch(showDialog(bool,data))
}

export const hideDialogFun = (bool) => dispatch => {
    dispatch(hideDialog(bool))
}
