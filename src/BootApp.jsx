import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './UI/header/Header';
import Footer from './UI/footer/Footer';
import './bootapp.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Index from './components/products/Index';

function BootApp(props) {
    return (
        <>
            <BrowserRouter>
                <div className="wrapper">
                <Header></Header>
                <div className="bg-ligntgray">
                        <Container className='content cbody bg-white' >
                        <Routes>
                                <Route path='/' element={<Home></Home>} ></Route>
                                <Route path='/about' element={<About></About>} ></Route>
                                <Route path='/products/:item?' element={<Index></Index>} ></Route>

                        </Routes>
                 
                    </Container>
                </div>
                    <Footer></Footer>
                </div>
            </BrowserRouter>

        </>
    );
}

export default BootApp;