import SubLinkItem from "@/Components/SubLinkItem";
import { LinkIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";


const LinkItem = ({ item }) => {

    const { crf, entity, entityRouteKey, linkTitle } = item;
    const routeParams = {
        crf: crf,
        [entityRouteKey]: entity,

    }
    return (
        <li className="nav-item">
 
            <Link
                className={`nav-link d-flex align-items-center gap-1 
                ${route().current(`crf.${entityRouteKey}.*`, routeParams) && 'active'}`}
                href={route(`crf.${entityRouteKey}.show`, routeParams)}
            >
                <LinkIcon width={20} className="me-2" />
                {linkTitle}   
            </Link>

            {/* {route().current(`crf.${entityRouteKey}.*`, routeParams) && <SubLinkItem subLinks = {item.subMenu} />} */}
        </li>
    )

}

export default function CrfSidebar({ links, staticLink }) {
    return (
        <>
        <div class="d-md-flex flex-column p-0  overflow-y-auto">

            <h6
                class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
                <span>CRF Links</span>
  
            </h6>
            <ul class="nav flex-column mb-auto  ">
                {
                    links.map((item, index) => <LinkItem item={item} key={index} />)
                }




                {staticLink && <li className="nav-item border-top mt-3">
                    <Link className={`nav-link d-flex align-items-center gap-2 
                ${staticLink.isActive && ' active'}`}
                        href={staticLink.url}
                >
                 <LinkIcon width={20} className="me-2" />
                    {staticLink.linkTitle}
                </Link></li>}
            </ul>


        </div>
        </>
        
    )
}