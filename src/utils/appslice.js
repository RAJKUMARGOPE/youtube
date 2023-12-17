import { createSlice } from "@reduxjs/toolkit";

const appslice = createSlice({
    name: "app",
    initialState: {
        isMenuopen: true,
    },
    reducers: {
        togglesidebar: (state) => {
            state.isMenuopen = !state.isMenuopen

        },
        closeMenu: ((state) => {
            state.isMenuopen = false;
        })
    }


})
export const { togglesidebar,closeMenu } = appslice.actions
export default appslice.reducer