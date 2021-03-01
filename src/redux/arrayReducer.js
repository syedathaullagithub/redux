const initialData =[]

function arrayReducer(state = initialData, actions) {
    
    switch (actions.type) {
        case "ADDELEMENT":
            return [...state,actions.payload]
             default:
            return state;
    }
}
export {
    arrayReducer
};