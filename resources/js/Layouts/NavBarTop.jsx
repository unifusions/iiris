import { Link, usePage } from "@inertiajs/react";
import BrandLogo from "./BrandLogo";
import {

    ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/outline';

export default function NavBarTop( ) {

    const {auth, roles} = usePage().props;
    return (
        <header>


            <nav className="navbar  sticky-top   flex-md-nowrap p-0 px-3 border-bottom">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0">
                    <BrandLogo />
                </Link>

              
                <ul className="navbar-nav px-3 ">
                   
              
                    <li className="nav-item text-nowrap">

                        <Link href={route('logout')} className='nav-link d-flex align-items-center' method="post" as="button" type="submit">

                            <ArrowRightStartOnRectangleIcon height={20} className="me-1" /> Sign Out
                        </Link>



                    </li>
                </ul>
            </nav>
        </header>
    )
}