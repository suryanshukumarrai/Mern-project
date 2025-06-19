import { Link } from "react-router-dom";
function Footer() {
  return (
    <div >
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Link className="nav-link active" aria-current="page" to="/login">
                  Login
                </Link>    
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Footer;
