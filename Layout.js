import { Link, Outlet } from "react-router-dom";

export function Layout() {
    return <div>
           

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" href="#">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home <span className="sr-only"></span></Link>
      <Link className="nav-item nav-link" to="/dogs">Dogs</Link>
      <Link className="nav-item nav-link" to="/cat">Cats</Link>
      <Link className="nav-item nav-link" to="/aquatic">Aquatic</Link>
      <Link className="nav-item nav-link" to="/RegisterForm">register</Link>
      <Link className="nav-item nav-link" to="/Login">login</Link>
      <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
    </div>
  </div>
</nav>



<Outlet/>


    </div>
}







