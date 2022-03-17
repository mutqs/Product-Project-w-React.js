import React, { Component } from 'react'
import Price from './Price'

export class ProductDetails extends Component {
  // componentDidMount(){
  //   this.props.getProducts();
  // }

  render() {
    const prd = this.props.products.find(product => product.id == this.props.match.params.id);

    return (
      <>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 mb-3 m-lg-0'>
                      <div className='product-left'>
                         <img src={prd.image.src} alt="" className='card-img mt-5' />
                      </div>
                </div>
                <div className='col-lg-6'>
                  <div className='product-right'>
                      <h3 className='mt-5'>Product Name : {prd.title}</h3>
                      <div className='price d-flex flex-column'>
                            {prd.variants.map((variant,index) => 
                                <Price price={variant.price} key={index} />
                            )}
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default ProductDetails