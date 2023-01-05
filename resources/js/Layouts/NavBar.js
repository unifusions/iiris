import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { Breadcrumb } from 'react-bootstrap'
import MiniLogo from './MiniLogo';
import BrandLogo from './BrandLogo';
import { ChevronDoubleDownIcon, ChevronDownIcon, LoginIcon, LogoutIcon, MenuIcon, UserIcon } from '@heroicons/react/outline';

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
                                        {this.props.user.name} <ChevronDownIcon style={{ width: 10, height: 10 }} />
                                   </a>
                                   <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="UserDropdown">
                                        <div className='dropdown-item'>
                                             <div className='fw-bold my-2'>{this.props.user.name}</div>
                                             <div className='small my-2'><span className='text-secondary' ><UserIcon style={{ width: 20, height: 20 }} className="me-2" /> </span>{this.props.user.UserRole.name}</div>
                                             <div className='small my-2'><span className='text-secondary' ><LoginIcon style={{ width: 20, height: 20 }} className="me-2" /></span>{this.props.user.email}</div>

                                        </div>

                                        <div >
                                             <Link href={route('logout')} className='dropdown-item' method="post" as="button" type="submit">
                                                  <LogoutIcon style={{ width: 20, height: 20 }} className="me-3" />Sign Out
                                             </Link>
                                        </div>
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