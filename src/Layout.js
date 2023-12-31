import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Footer from './components/Footer'

const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <i class="bi bi-house-door" style={{fontSize:'29px'}}/>
                    </Link>
                </li>
                <li>
                    <Link to="/about">
                        <i class="bi bi-info-circle" style={{fontSize:'29px'}}/>
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
        <Footer />
    </div>
  )
}

export default Layout