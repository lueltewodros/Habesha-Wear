import { useState, useEffect } from "react";
import { fetchProducts } from "../../app";
import "../../styles/products.css";
import { Product } from "./Product";

export function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  return (
    <main>
      <section className="section shop-section" style="padding-top: 6rem">
        <div className="container">
          <div className="section-header text-center">
            <h1 className="section-title">Shop Our Collection</h1>
            <p className="section-subtitle">
              Authentic Ethiopian traditional fashion and accessories
            </p>
          </div>

          <div className="category-filters">
            <button className="filter-btn active">All</button>
            <button className="filter-btn">Women's Kemis</button>
            <button className="filter-btn">Men's Traditional</button>
            <button className="filter-btn">Shoes</button>
            <button className="filter-btn">Bags</button>
            <button className="filter-btn">Jewellery</button>
            <button className="filter-btn">Kid's Cloth</button>
          </div>

          <div className="products-grid" id="productsGrid">
            {products.map((product) => (
              <Product product={product} key={product._id} />
            ))}
          </div>

          <div className="section-header" style={{ marginTop: "2rem" }}>
            <p
              className="section-subtitle"
              style={{
                fontSize: "0.9rem",
                fontStyle: "italic",
                opacity: "0.8",
              }}
            >
              * Products are sourced from verified partners and local Ethiopian
              markets. Prices may vary based on customization.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
