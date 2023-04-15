import { createContext, useReducer } from "react";
import QrReducer from "./QrReducer";

const QrContext = createContext()

export  const QrProvider = ({children}) => {

    const intialState = {
        qrMaker : {
           
           url : "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://https://getbootstrap.com" 
            
        }
}
           const [state , dispatch] = useReducer(QrReducer , intialState)
  
              return(
                <QrContext.Provider value={{...state,dispatch}}>
                    {children}
                </QrContext.Provider>
              )

}
export default QrContext