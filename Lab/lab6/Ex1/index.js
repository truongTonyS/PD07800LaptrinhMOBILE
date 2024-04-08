import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Dem from "./Dem";

const Index =()=>{
        return(
            <Provider store={store}>
                <Dem></Dem>
            </Provider>
        )
}

export default Index;