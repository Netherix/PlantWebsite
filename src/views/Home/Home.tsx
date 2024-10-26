import Nav from "../../components/Nav/Nav.jsx"
import BannerImage from "../../components/Banner/BannerImage.js";
import BannerText from "../../components/Banner/BannerText.js";
import TrustBadges from "../../components/TrustBadges/TrustBadges.js";
import OurFavorites from "../../components/OurFavorites/OurFavorites.jsx";
import CustomerTestimonials from "../../components/Testimonials/CustomerTestimonials.js";
import NewsletterSignup from "../../components/NewsletterSignup/NewsletterSignup.js";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct.jsx";
import LazyLoad from 'react-lazyload';

const Home = () => {
  return (
    <div>
      <Nav />
      <BannerImage />
      <BannerText text="Discover our amazing plant collection! 🌿🌱🌼" />
      <hr style={{ margin: '20px 0', border: '0.5px solid #ccc' }} />
      
      <FeaturedProduct />

      <hr style={{ margin: '20px 0', border: '0.5px solid #ccc' }} />

      <LazyLoad height={200} offset={100}>
        <OurFavorites />
      </LazyLoad>

      <hr style={{ margin: '60px 0', border: '0.5px solid #ccc' }} />

      <LazyLoad height={200} offset={100}>
        <div style={{ marginTop: '-70px'}}>
          <CustomerTestimonials />
        </div>
      </LazyLoad>

      <hr style={{ margin: '20px 0', border: '0.5px solid #ccc' }} />

      <LazyLoad height={200} offset={100}>
        <TrustBadges />
      </LazyLoad>

      <LazyLoad height={200} offset={100}>
        <NewsletterSignup />
      </LazyLoad>
    </div>
  );
};

export default Home;
