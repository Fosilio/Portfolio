import "./intro.scss";
import { KeyboardArrowDown } from "@material-ui/icons";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/portrait.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Emrah Jamaković</h1>
          <h2>Software engineering student</h2>
        </div>
        <a href="#portfolio">
          <KeyboardArrowDown className="accBtn" />
        </a>
      </div>
    </div>
  );
}
