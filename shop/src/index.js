import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import './Pages/cancel.css';
import "./Pages/useDatail.css"
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Header from './Pages/header';
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import Checkout from './Pages/Checkout';
import Footer from './Pages/footer';
import Login from './Pages/Login';
import MyAccount from './Pages/MyAccount';
import Cart from './Pages/Cart';
import WishList from './Pages/WishList';
import Contact from './Pages/Contact';
import NoPage from './Pages/NoPage';
import SearchProducts from './Pages/searchProduct';
import Category from './Pages/Categories';
import User from './Pages/User';
import UserDetail from './Pages/userdetail';
import DocumentTitle from './Pages/Component-Title';
import Success from './Pages/success';
import Cancel from './Pages/cancel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/productDetail/:id" element={<ProductDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/wishlist" element={<WishList/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/myAccount" element={<MyAccount/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/search" element={<SearchProducts />} />
          <Route path="/caty/:cat" element={<Category />} />
          <Route path="/user" element={<User />} />
          <Route path="/userDetail/:id" element={<UserDetail />} />
          <Route path="/user" element={<User />} />
          <Route path="/success" element={<Success />} />
          <Route path="/cancel" element={<Cancel />} />
          
          {/* <Route path="/" element={<DocumentTitle />} /> */}
        </Route>  
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
