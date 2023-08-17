import PhotoOne from "../../images/mike-petrucci-c9FQyqIECds-unsplash.jpg";
import PhotoTwo from "../../images/nathan-dumlao-lvWw_G8tKsk-unsplash.jpg";
import PhotoThree from "../../images/s-b-vonlanthen-D75_5tWZDQ4-unsplash.jpg";

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
    </div>
  );
}
