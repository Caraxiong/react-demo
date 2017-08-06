const initState = {
    bool: true,
    toastText: 'dfjsadfj 个见客户赶紧回家黄金时代凤凰军事电话费王瑞儿业务自人业务热热污染陪我子都挺好国家都会尽快'
}
const global = (state = initState, action) => {
     switch(action.type) {
         case "TOAST_ACTION":
               return Object.assign(state,
                    {
                        bool: action.bool,
                        toastText: action.toastText
                    }
               )
        default:
            return state
     }
}

export default global
