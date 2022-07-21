import React from 'react';
import { LogoutIcon, MenuIcon } from '@heroicons/react/solid'
import { Link } from '@inertiajs/inertia-react';
import {Breadcrumb} from 'react-bootstrap'
import MiniLogo from './MiniLogo';
import BrandLogo from './BrandLogo';



const iconStyle = {
     width: 24,
     height: 24
};

export default class NavBar extends React.Component {

     constructor(props) {
          super(props);
          
     }

     render() {


          return (
               <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">

                    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
                         <div>
                              
                              <a className="navbar-brand brand-logo" href="index.html">
                                   <BrandLogo />
                              </a>
                              <a className="navbar-brand brand-logo-mini text-centre" href="index.html">
                                 <MiniLogo />
                              </a>
                         </div>


                    </div>

                    <div className="navbar-menu-wrapper d-flex align-items-center  ">

                         <div className="d-flex flex-row align-items-center">

                              <MenuIcon style={{ width: 24, height: 24, cursor: 'pointer' }}
                                   className="navbar-toggler navbar-toggler align-self-center text-dark me-3"
                                   onClick={this.props.toggleNav} />
                              <Breadcrumb>
                                   {this.props.breadcrumb}
                              </Breadcrumb>

                         </div>
                         <ul className="navbar-nav ms-auto flex-row">


                              <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                                   <a className="nav-link" id="UserDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                                        {this.props.user.name}
                                   </a>
                                   <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">


                                        <Link href="#" className="dropdown-item" method="post" as="button" type="button">
                                             <LogoutIcon style={{ width: 20, height: 20 }} className="me-3" />{this.props.user.email}
                                        </Link>

                                        {/* <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2"></i> My Profile <span className="badge badge-pill badge-danger">1</span></a>
                                             <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2"></i> Messages</a>
                                             <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2"></i> Activity</a>
                                             <a className="dropdown-item"><i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2"></i> FAQ</a> */}

                                        <Link href={route('logout')} className="dropdown-item" method="post" as="button" type="submit">
                                             <LogoutIcon style={{ width: 20, height: 20 }} className="me-3" />Sign Out
                                        </Link>

                                   </div>
                              </li>
                         </ul>
                         <div className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" >
                              <MenuIcon style={{ width: 24, height: 24, cursor: 'pointer' }} onClick={this.props.toggleNav} />

                         </div>



                    </div>
               </nav>
          );
     }

}