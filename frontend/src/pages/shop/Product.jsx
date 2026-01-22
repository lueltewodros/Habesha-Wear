export function Product({ product }) {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">{product.price.toLocaleString()} ETB</p>
      </div>
    </div>
  );
}
