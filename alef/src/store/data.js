export const setData = function (data) {
    return {
        type: 'SET_DATA',
        payload: data
    }
}

const actions = (dispatch) => ({
    setData: (data) => dispatch(setData(data))
})

export default actions