import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';
import Header from './components/Header';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index element={<Home />} ></Route>
                    <Route path='/contact' element={<Contact />} ></Route>
                    <Route path='/products' element={<Product />} ></Route>
                    <Route path='/products/:id' element={<ProductDetail />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;