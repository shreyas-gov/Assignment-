function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />

      <div className="card-content">
        <h3>{product.name}</h3>
        <p>{product.price}</p>

        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;