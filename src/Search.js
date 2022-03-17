import React, { useState } from 'react'
import Searched from './Searched';

const Search = ({searchProduct,searchedProducts}) => {

    const [keyword,setKeyword] = useState('');
    const [header,setHeader] = useState(false);

    const onChange = (e) => {
        setKeyword(e.target.value.trim())
    }


    const onSubmit = (e) => {

        e.preventDefault();

        if (keyword === ""){
            console.log("write something") // özelleştir
        } else {
            searchProduct(keyword);
            setHeader(true)
        }
    }

    return (
        <>
            <form onSubmit={onSubmit} >
                <div className='container my-3'>
                    <div className='input-group'>
                        <input onChange={onChange} placeholder="You can search some products.." type="text" className='form-control'/>
                        <div className='input-group-append'>
                            <button className='btn btn-primary'>Search</button>
                        </div>
                    </div>
                </div>
            </form>
            <Searched searchedproducts={searchedProducts} header={header}  />
        </>
    )
}

export default Search