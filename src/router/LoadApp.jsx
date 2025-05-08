import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Nav';
import Home from './Home';
import Login from './Login';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
function LoadApp(props) {
    return (
        <Container className='border'>
            <BrowserRouter>
                <NavBar></NavBar>
                <Routes>
                    <Route path='/' element={<Home></Home>} ></Route>
                    <Route path='/login' element={<Login></Login>} ></Route>
                    <Route path='/about' element={<About></About>} ></Route>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default LoadApp;