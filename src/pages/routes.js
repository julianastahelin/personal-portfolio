import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from '../components/main';
import Header from '../components/header';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route exact path='/pt' element={<Main lang={'pt'} />} />
                <Route exact path='/en' element={<Main lang={'en'} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes