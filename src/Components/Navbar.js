 import React from 'react'
 import '../Styles/Navbar.css'
 import { profile} from '../img/index1';
function Navbar({handleToggle}) {
  return (
    
  <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow p-2">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
        onClick={handleToggle}
      >
        <i className="fa fa-bars"></i>
      </button>
      
        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm"></i>
              </button>
            </div>
          </div>
        </form>
          <div className='alert ms-auto my-2 mx-1'>
          <i className="fas fa-bell fa-fw me-sm-2 my-2 my-sm-0"></i>
  
        <span className="badge badge-danger badge-counter">3+</span>

        </div>
        <div className='mailbox my-2 mx-1'>
        
        <i className="fas fa-envelope fa-fw me-sm-2"></i>
  
              <span className="badge badge-danger badge-counter">7</span>

          </div>
          <div>
          <span className="mr-2 d-none d-lg-inline">
                Shanthi S
              </span>
              
          </div>
          <div className='profile'>
          <img
            className="img-profile rounded-circle mx-2 my-1 me-1"
            src={profile}
            alt="..."
          />
          </div>
          </nav>
  )
}

export default Navbar
        
          
          
             
          
            
  
     
        
   