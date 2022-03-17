import React from 'react'
import { Link } from 'react-router-dom'

const Navi = () => {
    return (
        <>
        <nav className='navbar navbar-dark bg-primary'>
            <div className='container'>
                <div className='d-flex w-100 justify-content-between align-items-center'>
                    <div className='navbar-brand'>
                        Demo
                    </div>
                    <div className='nav-right-area'>
                        <Link to='/products' className='btn btn-danger m-2'>All Products</Link>
                        <Link to='/' className='btn btn-secondary'>Home</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navi