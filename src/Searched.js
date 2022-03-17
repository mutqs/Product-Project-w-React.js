import React, { Component } from 'react'
import Product from './Product'

export class Searched extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    { this.props.header && <h3 className='mt-2'>Search Results</h3>  }
                    <div className='row justify-content-evenly'>
                        {
                            this.props.searchedproducts.map(product =>
                                <Product id={product.id} title={product.title} image={product.image.src} variants={product.variants} key={product.id} />
                            )
                        }
                        {/* {console.log(this.props.searchedproducts[0].id)} */}
                    </div>
                </div>
            </>
        )
    }
}

export default Searched
