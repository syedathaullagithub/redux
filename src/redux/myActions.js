

function increment() {
    return {
        type:'ADD'
    }
}
function decrement() {
    return {
        type:'SUB'
    }
}
function reset() {
    return {
        type:'RESET'
    }
}
export  {increment,decrement,reset};