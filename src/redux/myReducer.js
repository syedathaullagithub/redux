const initialData = 0

function myReducer(state = initialData, actions) {
    switch (actions.type) {
        case "ADD":
            if (state === 100) {
                return state
            }
            return state + 10

        case "SUB":
            if (state === 0) {
                return 0
            }
            return state - 10

        case "RESET":
            return 0

        default:
            return state;
    }
}
export {
    myReducer
};