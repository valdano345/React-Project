import { createContext, useReducer, useContext } from "react";

const TotalPirceContext = createContext(null);

const TotalPriceDispatchContext = createContext(null);

const totalPriceReducer = (state, action) => {
    switch (action.type){
        case "UPDATE":{
            return {
                total: action.payload.total,
            }
        }
        default:{
            throw Error("Uknow action : " + action.type);
        }
    }
}

export function TotalPriceProvider({children}){
    const [totalPrice, dispatch] = useReducer(
        totalPriceReducer, {total: 0}
    );

    return(
        <TotalPirceContext.Provider value={totalPrice}>
            <TotalPriceDispatchContext.Provider value={dispatch}>
                {children}
            </TotalPriceDispatchContext.Provider>
        </TotalPirceContext.Provider>
    )
}

export function useTotalPrice(){
    return useContext(TotalPirceContext);
}


export function useTotalPriceDispatch(){
    return useContext(TotalPriceDispatchContext);
}