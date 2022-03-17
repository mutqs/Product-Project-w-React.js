import React from 'react'

const Paginate = ({ productsPerPage, totalProducts , paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <>
            <div className='container'>
                <nav>
                    <ul className='pagination d-flex justify-content-center m-4'>
                        {pageNumbers.map(number => (
                            <li key={number} className="page-item">
                                <a href="#!" onClick={() => paginate(number)} className='page-link'>
                                    {number}
                                </a>
                            </li>
                        ))}
                        {
                            console.log(productsPerPage)
                        }
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Paginate
