import viteLogo from "/vite.svg";
import homeLogo from "../assets/homeLogo.svg";
import headSet from "../assets/headSet.svg";
import menunew from "../assets/menunew.svg";
import keypad from "../assets/keypad.svg";
import calendar from "../assets/calendar.svg";
import progressbar from "../assets/progressbar.svg";
import Configuration from "../assets/configuration.svg";
import userUse from "../assets/userUse.svg";
import logout from "../assets/logout.svg";
import networkNew from "../assets/networkNew.svg";

function SideBar() {
  return (
    <>
      <div className="SideBar">
        <div className="upside">
          <img src={networkNew} alt="" className="upsidelogo" />
          <h3>ASTECH</h3>
        </div>
        <a href="">
          <img src={menunew} className="logo" alt="Vite logo" />
          <small>Workspace</small>
        </a>
        <a href="">
          <img src={keypad} className="logo" alt="Vite logo" />
          <small> Phone & SMS</small>
        </a>
        <a href="">
          {" "}
          <img src={headSet} className="logo" alt="Vite logo" />
          <small> Agent</small>
        </a>
        <a href="">
          {" "}
          <img src={calendar} className="logo" alt="Vite logo" />
          <small> Appointment</small>
        </a>
        <a href="">
          <img src={progressbar} className="logo" alt="Vite logo" />
          <small>IVR</small>
        </a>
        <a href="">
          <img src={Configuration} className="logo" alt="Vite logo" />
          <small>Configuration</small>
        </a>
        <a href="">
          {" "}
          <img src={userUse} className="logo" alt="Vite logo" />
          <small>Profile</small>
        </a>
        <a href="">
          {" "}
          <img src={logout} className="logo" alt="Vite logo" />
          <small> Logout</small>
        </a>
      </div>
    </>
  );
}
export default SideBar;
