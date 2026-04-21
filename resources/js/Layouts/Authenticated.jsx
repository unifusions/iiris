import React, { useState } from 'react';
import { Head, Link, usePage } from '@inertiajs/react';



import MainPanel from './MainPanel';
import NavBarTop from './NavBarTop';
import Sidebar from './app-sidebar';
import Footer from './Footer';
import { SidebarInset, SidebarProvider } from '@/Components/ui/sidebar';
import AppSidebar from './app-sidebar';
import { SiteHeader } from './site-header';
import FlashNotifications from '@/Components/ui-ext/flash-notifications';
import { Toaster } from 'sonner';




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


export default function Authenticated({ pageTitle, header, breadcrumb, children, hasSecondarySidebar = false, secondarySidebar }) {

    const { auth, flash, roles, errors } = usePage().props;
    const [showNav, setShowNav] = useState(true);

    const { user } = auth;




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

        <SidebarProvider style={
            {
                "--sidebar-width": "calc(var(--spacing) * 56)",
                "--header-height": "calc(var(--spacing) * 12)",
            }
        }>
            <AppSidebar variant="inset" />

            <SidebarInset>
                <Head title={pageTitle} />
                {/* site header to be included */}
                <SiteHeader pageTitle={pageTitle} />
                <div className="flex flex-1 flex-col">
                    <div className="@container/main flex flex-1 flex-col gap-2 pt-5 px-4  ">
                        {children}
                    </div>
                </div>
            </SidebarInset>

            <FlashNotifications />
            <Toaster richColors position="top-right" />
        </SidebarProvider>

    )
}

