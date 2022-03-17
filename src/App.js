import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import Products from './Products';
import Navi from './Navi';
import Search from './Search';
import Paginate from './Paginate';
import ProductDetails from './ProductDetails'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {

  const [products, setProducts] = useState([])
  const [searchedProducts, setSearchedProducts] = useState([])

  //Paginate
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(3);


  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    const response = await fetch("https://teknasyon.netlify.app/.netlify/functions/products", {
      headers: {
        "x-access-token": "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"
      }
    })
    const json = await response.json();

    setProducts(json.products)
  }

  const searchProduct = (value) => {

    let searchedProductsArr = [];

    products.forEach((product) => {

      const title = product.title.toUpperCase();
      const val = value.toUpperCase();

      if (title.includes(`${val}`)) {
        searchedProductsArr.push(product);
      }
    });

    setSearchedProducts(searchedProductsArr)
  }

  //Paginate
  const indexOfLastProducts = currentPage * productsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <BrowserRouter>
      <Navi />
      <Switch>
        <Route exact path='/' render={props => (
          <>
            <Search getProducts={getProducts}
              searchProduct={searchProduct}
              products={currentProducts}
              searchedProducts={searchedProducts}
            />
          </>
        )
        } />
        <Route path='/products' render={props => (
          <>
            <Products products={currentProducts} />
            <Paginate productsPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
          </>
        )} />
        <Route path="/product/:id" render={renderProps => {
          return <ProductDetails {...renderProps} products={products} getProducts={getProducts} />
        }} />
        {/* {console.log(this.state.products)} */}
      </Switch>
    </BrowserRouter>
  )
}

export default App;
