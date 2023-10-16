import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name: "New",
    initialState: {
        name: "Default",
        users: [
            {
                name: "Name:Dhaya",
                email: "-Email:dhaya@gmail"
            },
            {
                name: "Name:sri",
                email: "-Email:Sri@gmail"
            },
            {
                name: "Name:Arun",
                email: "-Email:arun@gmail"
            }
        ]
    },
    reducers: {
        setName(state, action) {
            state.name = action.payload
        }
    }
})

export const { setName } = slice.actions;
export default slice.reducer