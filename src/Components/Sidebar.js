import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Styles/Sidebar.css'
import { rocket } from '../img/index1';


function Sidebar() {
  return (
    <div className='sidebar p-2'>
      <div className="bi bi-bootstarp-fill m-3">
                    <i className="fas fa-laugh-wink me-2 fs-4 mx-2 my-3"></i>
                    
                    <span className='sbadmin '><strong>SB ADMIN </strong><sup>2</sup></span>
                </div>
  
            
            <hr className="sidebar-divider my-2"/>
            <div className="nav-item active">
                <a className="nav-link" href="index.html">
                    <i className="fas fa-fw fa-tachometer-alt mx-2"></i>
                    <span>Dashboard</span></a>
                    <hr className="sidebar-divider"/>
                    <div className="sidebar-heading">
                Interface
            </div>

            </div>
            <div className="nav-item">
                    <i className="fas fa-fw fa-cog mx-2"></i>
                    <span>Components</span>
                </div>
                    <div class="nav-item">
                    <i class="fas fa-fw fa-wrench mx-2"></i>
                    <span>Utilities</span>
                      </div>
                      <hr class="sidebar-divider"/>
                      <div class="sidebar-heading">
                Addons
            </div>
            <div class="nav-item">
            <i class="fas fa-fw fa-folder mx-2"></i>
                    <span>Pages</span>
            </div>
            <div class="nav-item">
            <i class="fas fa-fw fa-chart-area mx-2"></i>
                    <span>Charts</span>
            </div>
            <div class="nav-item">
            <i class="fas fa-fw fa-table mx-2"></i>
                    <span>Tables</span>
            </div>
            <hr class="sidebar-divider d-none d-md-block"/>    
            <div className="rocket">
          <img
            className="sidebar-card-illustration mb-2"
            src={rocket}
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
      
                           
           
     
     

    </div>
  )
}

export default Sidebar