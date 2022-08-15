import React, { useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/inertia-react';

import NavBar from './NavBar';

import { DocumentTextIcon, ViewGridIcon, SupportIcon, OfficeBuildingIcon, UserGroupIcon, ViewListIcon } from '@heroicons/react/outline';


import MainPanel from './MainPanel';


const AdminNavigation = () => {
    const iconStyle = {
        width: 24,
        height: 24,
    };

    return (
        <>

            <li className="nav-item">
                <Link className="nav-link" href={route('facility.index')}>
                    <OfficeBuildingIcon className='menu-arrow' style={iconStyle} />
                    <span className="menu-title ms-1">Facility</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" href={route('users.index')}>
                    <UserGroupIcon className='menu-arrow' style={iconStyle} />
                    <span className="menu-title ms-1">Users</span>
                </Link>
            </li>
        </>
    )

}


export default function Authenticated(props) {

    const [showNav, setShowNav] = useState(true);

    const iconStyle = { width: 24, height: 24, };
    const { auth, breadcrumb, header, children, role } = props;
    const { flash } = usePage().props;


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
        <div className={showNav ? 'sidebar-icon-only' : ''} >
            <div className="container-scroller">

                <NavBar toggleNav={toggleNav} user={auth.user} breadcrumb={breadcrumb} />

                <div className="container-fluid page-body-wrapper">

                    <div className='navContainer' onMouseEnter={menuExpand} onMouseLeave={menuCollape}>
                        <nav className={`sidebar sidebar-offcanvas ${showNav ? 'active' : ''}`} id="sidebar">
                            <ul className="nav">
                                <li className="nav-item">
                                    <Link href={route('dashboard')} className={`nav-link ${route().current('dashboard') ? 'active' : ''}`}>
                                        <ViewGridIcon className='menu-arrow' style={iconStyle} />
                                        <span className="menu-title ms-1">Dashboard</span>
                                    </Link>

                                </li>


                                <li className="nav-item">
                                    <Link className={`nav-link ${route().current('crf.index') ? 'active' : ''}`} href={route('crf.index')}>
                                        <DocumentTextIcon className='menu-arrow' style={iconStyle} />
                                        <span className="menu-title ms-1">Case Reports</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link"
                                    // href={route('underconstruction')}
                                        href={route('logs.index')}
                                    >
                                        <ViewListIcon className='menu-arrow' style={iconStyle} />
                                        <span className="menu-title ms-1">Logs</span>
                                    </Link>
                                </li>


                                <li className="nav-item">
                                    <Link className="nav-link" href={route('tickets.index')}>
                                        <SupportIcon className='menu-arrow' style={iconStyle} />
                                        <span className="menu-title ms-1">Tickets</span>
                                    </Link>
                                </li>

                                {role.admin || role.sudo ? <AdminNavigation /> : ''}



                            </ul>
                        </nav>
                    </div>

                    <MainPanel flash={flash} header={header} children={children} />
                </div>
            </div>
        </div>

    )
}

