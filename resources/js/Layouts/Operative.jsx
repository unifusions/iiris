import { Head } from "@inertiajs/react";
import Authenticated from "./Authenticated";
import { Col, Row } from "react-bootstrap";
import ActivityTimeline from "@/Components/ActivityTimeline";

export default function Operative({ title, children, activities }) {
    return (

         
            <Row className="mt-3">
                <Col md={9} lg={9} >
                    {children}
                </Col>

                <Col md={3} lg={3}>
                    <div className="fs-6 fw-bold">
                        Notification
                    </div>
                    <ActivityTimeline items={activities} />
                </Col>
            </Row>
 
    )
}