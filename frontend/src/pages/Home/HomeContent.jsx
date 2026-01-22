import { Link } from "react-router-dom";
import "../../styles/homeContent.css";

export function HomeContent() {
  return (
    <main>
      <section className="hero">
        <img
          src="images/ethiopian_hero_image_1764321003007.png"
          alt="Ethiopian Traditional Fashion"
          className="hero-background"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Timeless Ethiopian Elegance</h1>
          <p className="hero-subtitle">
            Authentic Habesha fashion celebrating our rich cultural heritage
          </p>
          <Link to="/shop" className="btn btn-primary">
            Shop Now
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Collections</h2>
            <p className="section-subtitle">
              Handcrafted Ethiopian traditional wear and accessories
            </p>
          </div>

          <div className="collections-grid">
            <Link to="/shop#women" className="collection-card">
              <img
                src="images/womens_collection_ethiopian_1764321499330.png"
                alt="Women's Habesha Kemis"
                className="collection-card-image"
              />
              <div className="collection-card-overlay">
                <h3 className="collection-card-title">
                  Habesha Kemis for Women
                </h3>
                <p className="collection-card-description">
                  Traditional dresses with vibrant tilf embroidery
                </p>
              </div>
            </Link>

            <Link to="/shop#men" className="collection-card">
              <img
                src="images/mens_collection_ethiopian_1764321518701.png"
                alt="Men's Traditional Wear"
                className="collection-card-image"
              />
              <div className="collection-card-overlay">
                <h3 className="collection-card-title">
                  Habesha Clothes for Men
                </h3>
                <p className="collection-card-description">
                  classic suits with cultural embroidery
                </p>
              </div>
            </Link>

            <Link to="/shop#shoes" className="collection-card">
              <img
                src="images/product_shoes_3_1764243980505.png"
                alt="Traditional Shoes"
                className="collection-card-image"
              />
              <div className="collection-card-overlay">
                <h3 className="collection-card-title">Handcrafted Shoes</h3>
                <p className="collection-card-description">
                  Leather shoes with Ethiopian craftsmanship
                </p>
              </div>
            </Link>

            <Link to="/shop#bags" className="collection-card">
              <img
                src="images/accessories_ethiopian_1764321535281.png"
                alt="Traditional Bags"
                className="collection-card-image"
              />
              <div className="collection-card-overlay">
                <h3 className="collection-card-title">Traditional Bags</h3>
                <p className="collection-card-description">
                  Handwoven baskets and luxury bags
                </p>
              </div>
            </Link>
            <Link to="/shop#jewellery" className="collection-card">
              <img
                src="images/jewellery-1.jpg"
                alt="Ethiopian Jewelry"
                className="collection-card-image"
              />
              <div className="collection-card-overlay">
                <h3 className="collection-card-title">Ethiopian Jewelry</h3>
                <p className="collection-card-description">
                  Cultural necklaces, pendants, and handcrafted gold pieces
                </p>
              </div>
            </Link>
            <Link to="/shop#kids-cloth" className="collection-card">
              <img
                src="images/kids_habesha_collection.jpg"
                alt="Kids Habesha Clothes"
                className="collection-card-image"
              />
              <div className="collection-card-overlay">
                <h3 className="collection-card-title">Kids Habesha Wear</h3>
                <p className="collection-card-description">
                  Cute traditional outfits for children
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="about-hero">
            <div className="about-hero-content">
              <h2>Celebrating Ethiopian Heritage</h2>
              <p>
                At Habesha Wear, we honor the rich traditions of Ethiopian
                fashion while bringing timeless elegance to the modern world.
                Each piece in our collection tells a story of cultural pride,
                skilled craftsmanship, and authentic beauty.
              </p>
              <p>
                From the intricate tilf embroidery of Habesha Kemis to the
                handwoven details of our accessories, every item is sourced from
                verified partners and local markets who share our commitment to
                quality and tradition.
              </p>
              <Link to="about.html" className="btn btn-outline">
                Learn More About Us
              </Link>
            </div>
            <img
              src="images/product_dress_ethiopian_1764321552887.png"
              alt="Habesha Kemis"
              className="about-hero-image"
            />
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Have questions? We'd love to hear from you
            </p>
          </div>

          <div
            className="contact-info"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
              maxWidth: "900px",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <div>
              <h4>Email</h4>
              <p>
                Luelted@gmail.com
                <br />
                Hirebikila1@gmail.com
              </p>
            </div>
            <div>
              <h4>Phone</h4>
              <p>
                +251 90 081 5039
                <br />
                +251 97 222 9619
              </p>
            </div>
            <div>
              <h4>Location</h4>
              <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
