import { Col, Row } from "react-bootstrap";
import Authenticated from "./Authenticated";
import CrfSidebar from "@/Pages/CaseReportForm/CrfSidebar";


export default function CrfLayout({ pageTitle, children, crf }) {

    const staticLinks = [
        {
            id: 1,
            linkTitle: 'Pre-Operative',
            entity: crf.preoperative,
            crf: crf,
            entityRouteKey: 'preoperative'
        },
        {
            id: 2,
            linkTitle: 'Intra-Operative',
            entity: crf.intraoperative,
            crf: crf,
            entityRouteKey: 'intraoperative'
        },
        {
            id: 3,
            linkTitle: 'Post-Operative',
            entity: crf.postoperative,
            crf: crf,
            entityRouteKey: 'postoperative'
        }
    ]

    const svLinks = (crf.scheduledvisits || []).map((visit) => ({
        id: `visit-${visit.id}`,
        linkTitle: `Visit No. ${visit.visit_no ?? visit.id}`,
        entityRouteKey: "scheduledvisit",
        entity: visit,
        crf: crf,

    }));
 
    const usvLinks = {
        url:route('crf.unscheduledvisit.index', { crf: crf }),
        linkTitle : 'Unscheduled Visits',
        isActive : route().current('crf.unscheduledvisit.*') ? true : false
    }

    const links = [
        ...staticLinks,
        ...svLinks,
        
    ];
    return (
        <Authenticated pageTitle={pageTitle}>
            <Row className="h-100">
                <Col md={2} lg={2} className="sidebar border border-right bg-body-tertiary ms-0">
                    <CrfSidebar links={links} staticLink = {usvLinks}/>
                </Col>
                      <Col md={9} lg={10} className="mt-3 overflow-y-auto">
                       {children}
                      </Col>
               
            </Row>


        </Authenticated>
    )
}