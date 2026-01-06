import { DocumentTextIcon, Squares2X2Icon, LifebuoyIcon, BuildingOfficeIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";

export default function Sidebar({ role }) {
  return (
    <div class="sidebar border border-right col-md-2 col-lg-2 p-0 bg-body-tertiary">
      <div class="offcanvas-md offcanvas-end bg-body-tertiary" tabindex="-1" id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="sidebarMenuLabel">Company name</h5> <button type="button"
            class="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"
            aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
          <ul class="nav flex-column">

            <li className="nav-item">
              <Link href={route('dashboard')}
                className={`nav-link d-flex align-items-center gap-2 ${route().current('dashboard') ? 'active' : ''}`}>
                <Squares2X2Icon className='menu-arrow' width={24} />
                Dashboard
              </Link>

            </li>


            <li className="nav-item">
              <Link className={`nav-link d-flex align-items-center gap-2 ${route().current('crf.index') ? 'active' : ''}`} href={route('crf.index')}>
                <DocumentTextIcon className='menu-arrow' width={24} />
                Case Reports
              </Link>
            </li>


            <li className="nav-item">
              <Link className={`nav-link d-flex align-items-center gap-2 ${route().current('tickets.index') ? 'active' : ''}`} href={route('tickets.index')}>
                <LifebuoyIcon className='menu-arrow' width={24} />
                Queries
              </Link>
            </li>

          </ul>

          {(role?.admin || role?.sudo) && <>
            <h6
              class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
              <span>Admin Links</span>
              <a class="link-secondary" href="#" aria-label="Add a new report">
                <svg class="bi" aria-hidden="true">
                  <use xlink:href="#plus-circle"></use>
                </svg> </a> </h6>
            <ul class="nav flex-column mb-auto">
              <li className="nav-item">
                <Link className={`nav-link d-flex align-items-center gap-2 ${route().current('facility.index') ? 'active' : ''}`} href={route('facility.index')}>
                  <BuildingOfficeIcon className='menu-arrow' width={24} />
                  <span className="menu-title ms-1">Facility</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link  d-flex align-items-center gap-2 ${route().current('users.index') ? 'active' : ''}`} href={route('users.index')}>
                  <UserGroupIcon className='menu-arrow' width={24} />
                  <span className="menu-title ms-1">Users</span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link  d-flex align-items-center gap-2 ${route().current('reports.index') ? 'active' : ''}`} href={route('reports.index')}>
                  <DocumentTextIcon className='menu-arrow' width={24} />
                  <span className="menu-title ms-1">Reports</span>
                </Link>
              </li>
            </ul>

          </>}
        </div>
      </div>
    </div>
  )
}