import React from 'react'

function Navbar() {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
    {/* Container wrapper */}
    <div className="container">
      {/* Navbar brand */}
      
      {/* Toggle button */}
      <button
        data-mdb-collapse-init
        className="navbar-toggler"
        type="button"
        data-mdb-target="#navbarButtonsExample"
        aria-controls="navbarButtonsExample"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      {/* Collapsible wrapper */}
      <div className="collapse navbar-collapse" id="navbarButtonsExample">
        {/* Left links */}
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">Dashboard</a>
          </li>
        </ul>
        {/* Left links */}

        <div className="d-flex align-items-center">
          <button data-mdb-ripple-init type="button" className="btn btn-link px-3 me-2">
            Login
          </button>
          
          <a
            data-mdb-ripple-init
            className="btn btn-dark px-3"
            href="https://github.com/mdbootstrap/mdb-ui-kit"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="container-fluid">
        {/* Navbar brand */}
        

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TV Shows</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Movies</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Recently Added</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">My List</a>
            </li>
          </ul>
          {/* Left links */}

          {/* Search form */}
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control"
              placeholder="Type query"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              data-mdb-ripple-color="dark"
              style={{ padding: '.45rem 1.5rem .35rem' }}
            >
              Search
            </button>
          </form>

          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">CHILDREN</a>
            </li>
            {/* Navbar dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle hidden-arrow"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-bell"></i>
              </a>
              {/* Dropdown menu */}
              <ul className="dropdown-menu dropdown-menu-end notifications-list p-1" aria-labelledby="navbarDropdown">
                <li>
                  <div className="row">
                    <div className="col-md">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                        height="63"
                        width="auto"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="col-md">
                      <p className="h6 mb-0">New</p>
                      <p className="h6 mb-1">Movie title</p>
                      <span className="small">Today</span>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="row">
                    <div className="col-md">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(10).jpg"
                        height="63"
                        width="auto"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="col-md">
                      <p className="h6 mb-0">New</p>
                      <p className="h6 mb-1">Movie title</p>
                      <span className="small">Today</span>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="row">
                    <div className="col-md">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(11).jpg"
                        height="63"
                        width="auto"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="col-md">
                      <p className="h6 mb-0">New</p>
                      <p className="h6 mb-1">Movie title</p>
                      <span className="small">Today</span>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="row">
                    <div className="col-md">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(20).jpg"
                        height="63"
                        width="auto"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="col-md">
                      <p className="h6 mb-0">New</p>
                      <p className="h6 mb-1">Movie title</p>
                      <span className="small">Today</span>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="row">
                    <div className="col-md">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(5).jpg"
                        height="63"
                        width="auto"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="col-md">
                      <p className="h6 mb-0">New</p>
                      <p className="h6 mb-1">Movie title</p>
                      <span className="small">Today</span>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="row">
                    <div className="col-md">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                        height="63"
                        width="auto"
                        className="d-block"
                        alt="..."
                      />
                    </div>
                    <div className="col-md">
                      <p className="h6 mb-0">New</p>
                      <p className="h6 mb-1">Movie title</p>
                      <span className="small">Today</span>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                
              </a>
              {/* Dropdown menu */}
              <ul className="dropdown-menu dropdown-menu-end p-1" aria-labelledby="navbarDropdown">
                <li className="my-2 d-flex align-items-center">
                  
                  <span>User 1</span>
                </li>
                <li className="my-2 d-flex align-items-center">
                  
                  <span>User 2</span>
                </li>
                <li className="my-2 d-flex align-items-center">
                  
                  <span>User 3</span>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Manage Profiles</a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">Your Account</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Help</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Log Out</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {/* Collapsible wrapper */}
      </div>
      </div>
      {/* Collapsible wrapper */}
    </div>
    {/* Container wrapper */}
  </nav>
      
  
  )
}

export default Navbar
