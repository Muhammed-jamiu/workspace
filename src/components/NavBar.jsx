export default function NavBar() {
  return (
    
    <div className="NavBar">
      <div className="Navup">
        <div className="navicon"></div>
        <div className="navswitch">
          <div className="switchicon"></div>
          <small>Switch workspace</small>
        </div>
      </div>
      <div className="Navdown">
        <h3>Welcome Super Admin,</h3>
        <small>
          Here are quick overview of your account activities since your
          visisted.
        </small>
      </div>
    </div>
  );
}
