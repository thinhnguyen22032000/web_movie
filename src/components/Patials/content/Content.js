
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Trending from './trending/Trending'
import Detail from './detail/Detail'

const Content = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Trending/>} ></Route>
                <Route path='/:id/:type' element={<Detail/>} ></Route>
            </Routes>
            
        </BrowserRouter>
            
             
    )
}

export default Content