import React from 'react';
import {Outlet} from "react-router-dom";

import Header from './Header'

import '../style/style.css'

const Layout = () => {
    return (
        <div className="form-area">
            <Header />
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Layout;