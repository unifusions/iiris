import React, { useEffect, useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import Button from '@/Components/Button';
import { Link, usePage } from '@inertiajs/inertia-react';

import NavBar from './NavBar';
import Footer from './Footer';
import { CollectionIcon, DocumentTextIcon, ViewGridIcon, SupportIcon, OfficeBuildingIcon, QuestionMarkCircleIcon, UserGroupIcon, ViewListIcon, CheckCircleIcon } from '@heroicons/react/outline';

import Container from 'react-bootstrap/Container'
import { Card, Toast, ToastContainer } from 'react-bootstrap';
import CardHeader from 'react-bootstrap/esm/CardHeader';
import ToastAlert from '@/Pages/Shared/ToastAlert';

// import route from 'vendor/tightenco/ziggy/src/js';


// @if (session('message'))
//     <x-toast-notification>
//         <x-slot name="type"> {{ session('type') }}</x-slot>
//         {{ session('message') }}

//     </x-toast-notification>
// @endif
// const [showToast, setShowToast] = useState(false);

// useEffect(()=> {
//     setTimeout(()=>{
//         setShowToast(false)
//     }, 5000)
// },[showToast])

const AdminNavigation = () => {
    const iconStyle = {
        width: 24,
        height: 24,
    };
    return (
        <>

            <li className="nav-item">
                <Link className="nav-link" href="#">
                    <OfficeBuildingIcon className='menu-arrow' style={iconStyle} />
                    <span className="menu-title ms-1">Facility</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" href="#">
                    <UserGroupIcon className='menu-arrow' style={iconStyle} />
                    <span className="menu-title ms-1">Users</span>
                </Link>
            </li>
        </>
    )

}


export default function Authenticated(props) {

    // constructor(props) {
    //     super(props)
    //     this.state = { showNav: true }
    //     this.toggleNav = this.toggleNav.bind(this);
    //     this.menuExpand = this.menuExpand.bind(this);
    //     this.menuCollape = this.menuCollape.bind(this);

    // }


    const [showNav, setShowNav] = useState(true);
    const [showToast, setShowToast] = useState(true);
    const iconStyle = { width: 24, height: 24, };
    const { auth, breadcrumb, header, children, role } = props;
    const { flash } = usePage().props;

    useEffect(() => {
        setShowToast(true)
    }, [flash.message])

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
                                    <Link className="nav-link" href="#">
                                        <ViewListIcon className='menu-arrow' style={iconStyle} />
                                        <span className="menu-title ms-1">Logs</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="#">
                                        <QuestionMarkCircleIcon className='menu-arrow' style={iconStyle} />
                                        <span className="menu-title ms-1">Queries</span>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="#">
                                        <SupportIcon className='menu-arrow' style={iconStyle} />
                                        <span className="menu-title ms-1">Tickets</span>
                                    </Link>
                                </li>

                                {role.admin || role.sudo ? <AdminNavigation /> : ''}



                            </ul>
                        </nav>
                    </div>
                    <div className="main-panel" >
                        <div className="content-wrapper">
                            {header && (
                                <header >
                                    <div>{header}</div>
                                </header>
                            )}

                            {children}
                            
                            {flash.message && <ToastAlert showToast={showToast} onClose={() => setShowToast(false)} message = {flash.message}/>
                            }
                        </div>

                        <Footer />

                    </div>

                </div>
            </div>
        </div>

    )

}

