import { useState, useEffect } from "react";
import { fetchProducts } from "../../app";
import "../../styles/products.css";
import { Product } from "./Product";

export function Products() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  useEffect(() => {
    fetchProducts().then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) => {
    if (category === "all") {
      return true;
    }
    return product.category.toLowerCase() === category;
  });

  function handleCategoryChange(e) {
    setCategory(e.target.value);
  }

  return (
    <main>
      <section className="section shop-section" style={{paddingTop: "6rem"}}>
        <div className="container">
          <div className="section-header text-center">
            <h1 className="section-title">Shop Our Collection</h1>
            <p className="section-subtitle">
              Authentic Ethiopian traditional fashion and accessories
            </p>
          </div>

          <div className="category-filters">
            <button
              className={
                category === "all" ? "filter-btn active" : "filter-btn"
              }
              value="all"
              onClick={handleCategoryChange}
            >
              All
            </button>
            <button
              className={
                category === "women" ? "filter-btn active" : "filter-btn"
              }
              value="women"
              onClick={handleCategoryChange}
            >
              Women's Kemis
            </button>
            <button
              className={
                category === "men" ? "filter-btn active" : "filter-btn"
              }
              value="men"
              onClick={handleCategoryChange}
            >
              Men's Traditional
            </button>
            <button
              className={
                category === "shoes" ? "filter-btn active" : "filter-btn"
              }
              value="shoes"
              onClick={handleCategoryChange}
            >
              Shoes
            </button>
            <button
              className={
                category === "bags" ? "filter-btn active" : "filter-btn"
              }
              value="bags"
              onClick={handleCategoryChange}
            >
              Bags
            </button>
            <button
              className={
                category === "jewellery" ? "filter-btn active" : "filter-btn"
              }
              value="jewellery"
              onClick={handleCategoryChange}
            >
              Jewellery
            </button>
            <button
              className={
                category === "kids-cloth" ? "filter-btn active" : "filter-btn"
              }
              value="kids-cloth"
              onClick={handleCategoryChange}
            >
              Kid's Cloth
            </button>
          </div>

          <div className="products-grid" id="productsGrid">
            {filteredProducts.map((product) => (
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
