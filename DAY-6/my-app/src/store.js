import {configureStore} from "@reduxjs/toolkit"
import loginreducer from "./loginreducer"

export default configureStore({
    reducer:{
        name:loginreducer
    }
})