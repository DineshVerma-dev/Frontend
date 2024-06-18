import React from 'react'
import Header from './Components/Outlet/Header'
import Footer from './Components/Outlet/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout
