// style
import './Products.css'
import { useState, useEffect } from 'react'

function Products() {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/products")

  console.log(products)

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [url])

  return (
    <div className='container'>
    <div className="products center">
    <h1 className='products-title'>ПРОДУКЦИЯ</h1>
        <div  className="products-list">
          {products &&
            products.map((product) => {
              return (
                <div className='product-box' key={product.title}>
                  <img src={products.img} alt="product-image" />
                 <div className='product-info'>
                 <h3 className='product-title'>{product.title}</h3>
                  <button className='btn product-btn'>Посмотреть все</button>
                 </div>
                </div>
              )
            })}
        </div>
    </div>
    </div>
  )
}

export default Products
