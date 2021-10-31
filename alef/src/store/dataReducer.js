const defaultState = {
    data: {
        name: '',
        age: '',
        children: []
    }
}

export const dataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_DATA':
            return action.payload
        default:
            return state

    }
}