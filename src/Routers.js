import React from 'react'
import { Route, Routes } from 'react-router-dom';
import App from "./App";
import Admin from './Admin/Admin'
import Login from './Pages/Log_in/Login';
import Ielts from "./Components/Score/Score_swipere/ielts/Score_swiper"
import Score from './Components/Score/Score';
import Score1 from './Components/Score/Score';
import Dtm1 from "./Components/Score/Score_swipere/DTM/Score_swiper"

function Routers() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/Score' element={<Score />}>
                    <Route path='Ielts' element={<Ielts />} />
                </Route>
                <Route path='/Score1' element={<Score1 />}>
                    <Route path='Dtm' element={<Dtm1 />} />
                </Route>

            </Routes>
        </div>
    )
}

export default Routers