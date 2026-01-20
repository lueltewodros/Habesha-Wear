import "../../styles/aboutContent.css";

export function AboutContent() {
  return (
    <section className="section">
      <div className="container">
        <div className="about-hero">
          <img
            src="images/ethiopian_hero_image_1764321003007.png"
            alt="Habesha Wear Story"
            className="about-hero-image"
          />
          <div className="about-hero-content">
            <h2>Our Story</h2>
            <p>
              Habesha Wear was born from a deep love for Ethiopian heritage and
              a desire to share its beauty with the world. We believe that
              traditional clothing is more than just fabric; it's a story woven
              with history, culture, and identity.
            </p>
            <p>
              Our journey began in the vibrant markets of Addis Ababa, where we
              witnessed the incredible skill of local artisans crafting the
              delicate Shemma. We wanted to bridge the gap between these
              timeless traditions and the modern wardrobe, creating pieces that
              honor the past while embracing the future.
            </p>
            <p>
              Every piece in our collection is authentic, sourced directly from
              skilled weavers and designers in Ethiopia. When you wear Habesha
              Wear, you carry a piece of Ethiopian art and soul.
            </p>
          </div>
        </div>

        <div className="section-header">
          <h2 className="section-title">Our Values</h2>
          <p className="section-subtitle">
            The pillars that define our brand and promise to you.
          </p>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <h3>Authenticity</h3>
            <p>
              We guarantee that every item is genuinely Ethiopian, crafted using
              traditional methods and materials passed down through generations.
            </p>
          </div>
          <div className="value-card">
            <h3>Quality</h3>
            <p>
              We meticulously select the finest fabrics and inspect every stitch
              to ensure that our garments meet the highest standards of luxury
              and durability.
            </p>
          </div>
          <div className="value-card">
            <h3>Culture</h3>
            <p>
              We are dedicated to preserving and promoting Ethiopian culture,
              ensuring that the art of traditional weaving continues to thrive.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
