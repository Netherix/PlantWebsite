import Navbar from "../../components/Navbar/Navbar";
import BannerImage from "../../components/Banner/BannerImage";
import BannerText from "../../components/Banner/BannerText";
import TrustBadges from "../../components/TrustBadges/TrustBadges";
import OurFavorites from "../../components/OurFavorites/OurFavorites";
import CustomerTestimonials from "../../components/Testimonials/CustomerTestimonials";
import NewsletterSignup from "../../components/NewsletterSignup/NewsletterSignup";
import FeaturedProduct from "../../components/FeaturedProduct/FeaturedProduct";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BannerImage />
      <BannerText text="Discover our amazing plant collection! 🌿🌱🌼" />
      <FeaturedProduct />
      <OurFavorites />
      <CustomerTestimonials />
      <TrustBadges />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
