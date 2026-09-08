import './ProductCard.css'

const ProductCard = ({title, price , image}) => {
  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        <img className="product-card__image" src={image} alt={title} loading="lazy" decoding="async" />
        <span className="product-card__badge">In stock</span>
      </div>
      <div className="product-card__content">
        <h2 className="product-card__title">{title}</h2>
        <p className="product-card__price">Rs. {price.toFixed(2)}</p>
      </div>
      <button className="product-card__button" type="button">Add to cart</button>
    </article>
  )
}

export default ProductCard;
