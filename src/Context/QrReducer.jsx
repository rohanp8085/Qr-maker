const QrReducer = (state , action) => {
   
    switch(action.type){
       
                 case "GET_QR":
                     return{
                        ...state,
                       qrMaker : action.payload
                        
                     }

        default:
        return state    

    }
}

export default QrReducer