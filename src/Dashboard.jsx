import NavBar from "./components/NavBar";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import "./css/Dashboard.css";

export default function DashBoard() {
  return (
    <>
      <div id="container">
        <SideBar></SideBar>
        <div className="content">
          <NavBar></NavBar>
          <Main></Main>
        </div>
      </div>
    </>
  );
}
