import { useEffect, useRef, useState } from "react";
const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};

const SubLinkItem = ({ subLinks }) => {
    const [activeId, setActiveId] = useState('');
    const observer = useRef(null);

    useEffect(() => {
        const handleIntersect = (entries) => {
            const visibleSections = entries
                .filter((entry) => entry.isIntersecting)
                .sort(
                    (a, b) =>
                        a.boundingClientRect.top - b.boundingClientRect.top
                );

            if (visibleSections.length > 0) {
                setActiveId(visibleSections[0].target.id);
            }
        };

        observer.current = new IntersectionObserver(handleIntersect, {
            rootMargin: "-30% 0px -60% 0px",
            threshold: 0.1,
        });

        const sections = document.querySelectorAll(".scroll-section[id]");
        sections.forEach((section) => observer.current.observe(section));

        return () => observer.current?.disconnect();
    }, []);

    
    return (
        <div className="ps-4 border-start py-2 bg-primary bg-opacity-10">
            <ul className="border-start border-primary ps-3 list-unstyled fw-normal pb-1 small">
 
                {subLinks?.map((link) => <li className="nav-item mb-2">

                    <a
                        href={`#${link.anchor}`}
                        onClick={scrollTo(link.anchor)}
                        className={`link-body-emphasis d-inline-flex text-decoration-none  ${activeId === link.anchor ? 'active text-primary' : ''}`}
                    >
                      {link.linkTitle}
                    </a>

                   
                </li>)}
               
             
            </ul>
        </div>
    );
};


export default SubLinkItem;