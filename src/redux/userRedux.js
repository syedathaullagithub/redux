const initialData = []

function userRedux(state = initialData, actions) {

    switch (actions.type) {
        case "ADDUSER":
            return [...state, actions.payload]
        case "RESETUSER":
            return []
        case "DELETEUSER":
            return state.filter((v, i) => i !== actions.payload)
        default:
            return state;
    }
}
export {
    userRedux
}; 