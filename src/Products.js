import React from 'react'
import Product from './Product'

const Products = ({products}) =>  {
    return (
      <div>
          <div className='container'>
            <h3 className='mt-2'>Product List</h3>
            <div className='row justify-content-evenly'>
                {
                    products.map(product => 
                    <Product id={product.id} title={product.title} image={product.image.src} variants={product.variants} key={product.id}  />
                    )
                }
            </div>
          </div>
      </div>
    )
}

export default Products