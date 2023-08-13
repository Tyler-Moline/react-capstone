import Fb from "../../images/facebook.svg";
import Ig from "../../images/instagram.svg";
import X from "../../images/twitter.svg";

export default function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-left">
        <p>Dapper Deals ecommerce site</p>
        <p>The best place to shop for random stuff</p>
      </div>

      <div className="footer-center">
        <h4>ADDRESS"S GO HERE</h4>
      </div>

      <div className="footer-right">
        <img src={Fb} alt="Facebook" />
        <img src={Ig} alt="Instagram" />
        <img src={X} alt="Twitter" />
      </div>
    </div>
  );
}
