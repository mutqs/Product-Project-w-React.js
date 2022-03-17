import React from 'react'
import Price from './Price'
import {Link} from 'react-router-dom'

const Product = ({image,title,id,variants}) => {
    
    return (
        <>
            <div className='col-md-6 col-lg-3 mx-1 mt-2 p-0 card'>
                <img src={image} alt="" className='card-img' style={{height: '450px', width:'80px', display: 'block', margin: 'auto'}}/>
                <div className='card-body d-flex flex-column'>
                    <div className='card-title text-center'>{title}</div>
                    <Link to={`/product/${id}`} className="btn btn-primary ">Go Details</Link>
                    <div className='price d-flex flex-column'>
                        {variants.map((variant,index) => 
                            <Price price={variant.price} key={index} />
                        )}
                    </div>
                </div>
                    {/* <div>{this.props.id}</div> */}
            </div>
        </>
    )
}

export default Product