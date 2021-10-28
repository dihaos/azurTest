const defaultState = {
    data: {
        name: '',
        age: '',
        children: []
    }
}

export const dataReducer = (state = defaultState, action) => {
    return { ...state }
}