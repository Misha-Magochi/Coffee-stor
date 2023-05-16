import "./about-our.css";
import girl from "../img/girl.jpg";
import Coffee from "../header/svg/Coffee.svg";

const AboutOur = () => {
  return (
    <div className="About-our-beans">
      <div className="about-our">
        <div className="img-block">
          <img src={girl} alt="girl" />
        </div>
        <div className="about-block">
          <h2 className="title-about">About our beans</h2>
          <div className="coffee-block">
            <div className="line"></div>
            <img src={Coffee} alt="swg" className="coffee-swg" />
            <div className="line"></div>
          </div>
          <p className="text-abaut">
            Extremity sweetness difficult behaviour he of. On disposal of as
            landlord horrible. Afraid at highly months do things on at.
            Situation recommend objection do intention so questions. As greatly
            removed calling pleased improve an. Last ask him cold feel met spot
            shy want. Children me laughing we prospect answered followed. At it
            went is song that held help face.
          </p>
        </div>
      </div>
      <div className="line-b"></div>
    </div>
  );
};
export default AboutOur;
