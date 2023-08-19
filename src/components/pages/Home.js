import PhotoOne from "../../images/mike-petrucci-c9FQyqIECds-unsplash.jpg";
import PhotoTwo from "../../images/bruno-kelzer-LvySG1hvuzI-unsplash.jpg";
import PhotoThree from "../../images/heidi-fin-2TLREZi7BUg-unsplash.jpg";
import logo from "../../images/logo.png";

export default function Home() {
  return (
    <div className="container">
      <header>
        <div className=" header-img-div fadein">
          <img
            id="f3"
            className="header-img-1"
            src={PhotoOne}
            alt="Construction"
          />
          <img id="f2" className="header-img-2" src={PhotoTwo} alt="" />
          <img id="f1" className="header-img-3" src={PhotoThree} alt="" />
        </div>
      </header>
      <div className="main-content">
        <div className="img-wrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="word-wrapper">
          <h3>Your home for buying random stuff for random prices!</h3>
        </div>
      </div>
      <div className="intro-paragraph">
        <h1>A little about us...</h1>
        <p>
          Welcome to our quirky and unpredictable world of online shopping! At
          Dapper Deals, we pride ourselves on being the ultimate destination for
          those who seek the thrill of the unexpected. We're not your ordinary
          e-commerce platform – we're your gateway to a whimsical assortment of
          random treasures, each with its own distinct personality. In a world
          where predictability reigns supreme, we embrace the chaos and the joy
          that comes with it. Our virtual shelves are lined with an
          ever-changing collection of unique and eclectic items, sourced from
          the farthest corners of the internet. From everyday essentials to
          bizarre curiosities, we curate a selection that's as diverse as it is
          surprising. What truly sets us apart is our approach to pricing. Say
          goodbye to the mundane world of fixed price tags – here, prices are as
          unpredictable as the items themselves. With every visit, you embark on
          a thrilling journey of discovery, never knowing what fantastic find
          you might stumble upon or at what delightfully unexpected price. We're
          not just an online store; we're an experience. A place where the
          thrill of the unknown meets the convenience of online shopping. So
          whether you're a seasoned explorer of the unconventional or just
          someone looking to inject a bit of spontaneity into your life, Dapper
          Deals is here to redefine your shopping adventure. Join us in
          celebrating the joy of randomness. Embrace the unexpected. Shop with
          abandon. Welcome to Dapper Deals – where every click is a leap into
          the delightful unknown.
        </p>
      </div>
    </div>
  );
}
