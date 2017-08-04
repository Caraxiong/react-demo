const initState = {
    toast: true,
    toastText: null
}
const global = (state = initState, action) => {
     switch(action.type) {
         case "TOAST_ACTION":
               return Object.assign(state,
                    {
                        toast: action.bool,
                        toastText: action.toastText
                    }
               )
        default:
            return state
     }
}

export default global
