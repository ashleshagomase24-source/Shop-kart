import ProductCard from '../Component/ProductCard'
import {useState, useEffect} from 'react'


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    fetch('https://fakestoreapi.com/products')
   
      .then(res => res.json())
      .then(data => setProducts(data))
     
  }, []);
  return (
    <div className="products-page">
      <header className="products-page__hero">
        <div className="products-page__heading">
          <p className="products-page__eyebrow">The ShopCart edit</p>
          <h1>Objects for<br /><em>everyday living.</em></h1>
          <p className="products-page__intro">A considered collection of useful, beautiful things for your home, your routine, and everywhere in between.</p>
        </div>
        <div className="products-page__note">
          <span className="products-page__note-mark">S</span>
          <p>Good design is not extra.<br />It is how a thing feels to use.</p>
        </div>
      </header>
      <div className="products-page__toolbar">
        <span><strong>{products.length || 20}</strong> pieces to explore</span>
        <div className="products-page__filters" aria-label="Product categories">
          <button className="products-page__filter products-page__filter--active" type="button">All pieces</button>
          <button className="products-page__filter" type="button">New in</button>
          <button className="products-page__filter" type="button">Best sellers</button>
        </div>
      </div>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
