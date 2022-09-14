import {BrowserRouter,Routes,Route} from "react-router-dom";

import {Api} from "./Api/Api"

export const AppRoutes =()=>{
    return(

        <BrowserRouter>
        <Routes>
        <Route path='/' element={<Api/>} />
        </Routes>
        </BrowserRouter>
    )
}