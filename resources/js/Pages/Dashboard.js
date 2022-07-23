import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import { Card, Col, Row } from 'react-bootstrap';
import AdminDashboard from './Dashboards/AdminDashboard';


const CoordinatorDashboard = (props) => {
    const { dashboardData, facility } = props;
    let colDivision = 12 / Object.keys(dashboardData).length;

    return (
        <>

            <Col lg={colDivision} className="d-flex align-items-stretch mb-3">
                <Card className="shadow-sm rounded-5 w-100" >
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column">
                                <span className="fw-normal fs-1 text-primary">{dashboardData.allcrfcount}</span>
                                <span className="fw-light fs-5 text-secondary">Case Report Forms</span>
                                <span className="fs-6 text-muted">Overall Enrollments</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg={colDivision} className="d-flex align-items-stretch mb-3">
                <Card className="shadow-sm rounded-5 w-100" >
                    <Card.Body>
                        <div className="d-flex justify-content-stretch align-items-center">
                            <div className="d-flex flex-column">
                                <span className="fw-normal fs-1 text-primary">{dashboardData.crfcount}</span>
                                <span className="fw-light fs-5 text-secondary">Case Report Forms</span>
                                <span className="fs-6 text-muted">from {facility}</span>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg={colDivision} className="d-flex align-items-stretch mb-3">
                <Card className="shadow-sm rounded-5 w-100" >
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column">
                                <span className="fw-normal fs-1 text-primary">{dashboardData.scheduledVisitCount}</span>
                                <span className="fw-light fs-5 text-secondary">Scheduled Visits</span>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

            <Col lg={colDivision} className="d-flex align-items-stretch mb-3">
                <Card className="shadow-sm rounded-5 w-100" >
                    <Card.Body>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex flex-column">
                                <span className="fw-normal fs-1 text-primary">{dashboardData.unscheduledVisitCount}</span>
                                <span className="fw-light fs-5 text-secondary">Unscheduled Visits</span>

                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Col>

        </>
    )
}




export default function Dashboard(props) {
    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight mb-3">Dashboard</h2>}
            role={props.roles}
        >

            <Head title="Dashboard" />
            <Row className='mb-3'>
                {props.roles.coordinator || props.roles.investigator ? <CoordinatorDashboard dashboardData={props.data} facility={props.facility} /> : <AdminDashboard dashboardData={props.adminData} adminCards = {props.adminCards } />}

            </Row>



        </Authenticated>
    );
}

