import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';
 
 

import MainPanel from './MainPanel';
import NavBarTop from './NavBarTop';
import Sidebar from './Sidebar';
import Footer from './Footer';




const AdminNavigation = () => {
    const iconStyle = {
        width: 24,
        height: 24,
    };

    return (
        <>

            <li className="nav-item">
                <Link className={`nav-link ${route().current('facility.index') ? 'active' : ''}`} href={route('facility.index')}>
                    <OfficeBuildingIcon className='menu-arrow' style={iconStyle} />
                    <span className="menu-title ms-1">Facility</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className={`nav-link ${route().current('users.index') ? 'active' : ''}`} href={route('users.index')}>
                    <UserGroupIcon className='menu-arrow' style={iconStyle} />
                    <span className="menu-title ms-1">Users</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className={`nav-link ${route().current('reports.index') ? 'active' : ''}`} href={route('reports.index')}>
                    <DocumentTextIcon className='menu-arrow' style={iconStyle} />
                    <span className="menu-title ms-1">Reports</span>
                </Link>
            </li>
        </>
    )

}


export default function Authenticated({pageTitle, header, breadcrumb, children}) {

    const {auth, flash, roles, errors } = usePage().props;
    const [showNav, setShowNav] = useState(true);

   const {user } = auth;
    
   


    const toggleNav = () => {
        setShowNav(!showNav)
    }

    const menuExpand = () => {
        setShowNav(false)
    }

    const menuCollape = () => {
        setShowNav(true)
    }

    return (

        <div className="d-flex flex-column vh-100 overflow-hidden">

            <Head title={pageTitle} />
    {/* Top Header */}
    <NavBarTop breadcrumb= {breadcrumb} />

    {/* Body */}
    <div className="container-fluid flex-grow-1 overflow-hidden">
        <div className="row h-100">

            {/* Sidebar */}
            
                <Sidebar role={roles} />
           

            {/* Main Area (ONLY this scrolls) */}
            <main className="col-md-10 col-lg-10  h-100   overflow-auto overflow-y-auto">
                <MainPanel
                    flash={flash}
                    header={pageTitle}
                >
                    {children}
                </MainPanel>
            </main>

        </div>
    </div>

    {/* Footer */}
     
         <Footer />
     
</div>

        //         <div className={showNav ? 'sidebar-icon-only' : ''} >


        //        

        //             <div className="container-scroller">

        //                 <NavBar toggleNav={toggleNav} user={auth.user} breadcrumb={breadcrumb} />

        //                 <div className="container-fluid page-body-wrapper">

        //                     <div className='navContainer' onMouseEnter={menuExpand} onMouseLeave={menuCollape}>
        //                         <nav className={`sidebar sidebar-offcanvas ${showNav ? 'active' : ''}`} id="sidebar">
        //                             <ul className="nav">
        //                               


                                      



        //                                 <li className="nav-item">
        //                                     <Link className={`nav-link ${route().current('tickets.index') ? 'active' : ''}`} href={route('tickets.index')}>
        //                                         <SupportIcon className='menu-arrow' style={iconStyle} />
        //                                         <span className="menu-title ms-1">Queries</span>
        //                                     </Link>
        //                                 </li>

        //                                 



        //                             </ul>
        //                         </nav>
        //                     </div>




        //                 </div>
        //             </div>
        //         </div>

    )
}

