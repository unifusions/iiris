import SubLinkItem from "@/Components/SubLinkItem";

import { LinkIcon } from "@heroicons/react/24/outline";
import { Link } from "@inertiajs/react";
import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle,
} from "@/components/ui/item"
import { CheckCircle, Link2 } from "lucide-react";



const LinkItem = ({ item }) => {

    const { crf, entity, entityRouteKey, linkTitle } = item;
    const routeParams = {
        crf: crf,
        [entityRouteKey]: entity,

    }

    const isActive = route().current(`crf.${entityRouteKey}.*`, routeParams);
    return (


        <Link
            className={`   group
                ${isActive && 'bg-blue-50 font-bold'}`}
            href={route(`crf.${entityRouteKey}.show`, routeParams)}
        >

            <Item variant="outline" className="group-hover:bg-blue-50" >

                <ItemMedia variant="icon">

                    <CheckCircle className={entity.is_submitted ? "text-green-500" : "text-gray-500"} />
                </ItemMedia>
                <ItemContent>
                    <ItemTitle className={` group-hover:font-bold  ${isActive && 'bg-blue-50 font-bold'}`}>{linkTitle}</ItemTitle>

                </ItemContent>
            </Item>



        </Link>



    )

}

export default function CrfSidebar({ links, staticLink }) {

    return (
        <>
            <div className="flex w-full max-w-md flex-col gap-1 sticky top-0">
                <h6
                    class="   items-center px-3 mt-4 mb-1  ">
                    <span>CRF Quick Links</span>

                </h6>
                {links.map((link) => <LinkItem item={link} key={link.id} />)}



                {staticLink && <Link
                    className={` 
                ${staticLink.isActive && 'active'}`}
                    href={staticLink.url}
                >

                    <Item variant="outline" className="border-red-400 bg-red-50 text-red-700" >

                        <ItemMedia variant="icon">
                            <Link2 />
                        </ItemMedia>
                        <ItemContent>
                            <ItemTitle>{staticLink.linkTitle}</ItemTitle>

                        </ItemContent>
                    </Item>



                </Link>
                }
            </div>



        </>

    )
}