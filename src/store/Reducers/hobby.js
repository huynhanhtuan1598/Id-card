const initialState = {
    carts: 0
}

export const hobbyReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            state.carts +=1;
            console.log(state.carts)
            return state
        }

        case 'SET_ACTIVE_HOBBY' : {
            break;
        }
        default:
            return state;
    }
}