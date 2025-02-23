import './BannerHero.css'
import { Link } from 'react-router-dom';


const BannerHero = () => {
  return (
    <main className="bannerHero">
      <div className="promo1">
        <div className="promo_content"></div>
      </div>

      <div className="promo2">
        <div className="promo_content"></div>
      </div>

      <div className="promo3">
        <div className="promo_content">
          <Link to="/Aneis/Aneis">
            <button className="btn_promo">Saiba Mais</button>
          </Link>
        </div>
      </div>

      <div className="promo4">
        <div className="promo_content">
          <Link to="/Brincos/Brincos">
            <button className="btn_promo">Saiba Mais</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default BannerHero;
