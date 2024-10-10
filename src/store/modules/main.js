import { createSlice } from '@reduxjs/toolkit'

const mainReducer = createSlice({
    name: 'main',
    initialState: {
        fixed: false,
        isLucency: false,
    },
    reducers: {
        changeFixedAction(state, { payload }) {
            state.fixed = payload
        },
        changeLucencyAction(state, { payload }) {
            state.isLucency = payload
        },
    },
})
export const { changeFixedAction, changeLucencyAction } = mainReducer.actions
export default mainReducer.reducer
