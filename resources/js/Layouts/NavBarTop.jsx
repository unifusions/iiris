import { Link, usePage } from "@inertiajs/react";
import BrandLogo from "./BrandLogo";
import {

    ArrowRightStartOnRectangleIcon
} from '@heroicons/react/24/outline';
import HeaderDropdown from "@/Components/HeaderDropdown";

export default function NavBarTop( ) {

    const {auth, roles} = usePage().props;
    const {user} = auth;
    return (
        <header>


            <nav className="navbar  sticky-top   flex-md-nowrap p-0 px-3 border-bottom">
                <Link className="navbar-brand col-sm-3 col-md-2 mr-0">
                    <BrandLogo />
                </Link>

<HeaderDropdown />
               
            </nav>
        </header>
    )
}