import React from 'react'
import axios from 'axios';

// import { Products } from '../components/index'

function Products() {
  // const [productItem, setProductItem] = React.useState(null);

  // React.useEffect(() => {
  //   axios.get('http://localhost:3001/products')
  //     .then(({ data }) => {
  //       setProducts(data)
  //     })
  // }, []);

  return (
    <div className="products-page">
      <div className="container">
        <div className="products-page__content">
          <h1>Products Page</h1>
          <div className="sidebar">
            
          </div>
          <div className="content">
            <div className="filter">
            </div>
              {/* <Products /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;
