import './TrustBadges.css'; 
import trustBadgeImage from '../../assets/Trustbadges2.png';

const TrustBadges = () => {
  return (
    <div className="trust-badges-container">
      <img src={trustBadgeImage} alt="Our Trust Badges" />
    </div>
  );
};

export default TrustBadges;
