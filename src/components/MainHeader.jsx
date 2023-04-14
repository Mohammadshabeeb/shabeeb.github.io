import { Link } from "react-router-dom";
import Image from "../images/main_header.png";

const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#100Daysofworkout</h4>
          <h1>Join The Legends of The Fitness World</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga omnis
            aspernatur earum tenetur accusantium, quis veritatis minus
            perspiciatis possimus eligendi, nihil quaerat illo expedita eius est
            quae natus alias soluta.
          </p>
          <Link to="/plans" className="btn lg">
            Get started
          </Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-image">
            <img src={Image} alt="main Hader Image" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainHeader;
