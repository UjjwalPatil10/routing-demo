import React from 'react';
import LogInPage from './LogInPage';
import ProductTable from './ProductTable';
import { Link, Route, Routes } from 'react-router-dom';
import ProductForm from './ProductForm';

const RoutingMain = () => {
    return ( 
        <>
        <h2>LogIn Form</h2>
        <Link to="/">Login</Link>
        {/* <LogInPage /> */}
        {/* <ProductTable /> */}
        <div></div>
        <Routes>
            <Route path= "/" element={<LogInPage />} />
            <Route path="/product-table" element={<ProductTable />} />
            <Route path="/product-form" element={<ProductForm />} />
        </Routes>
        </>
     );
}
 
export default RoutingMain;