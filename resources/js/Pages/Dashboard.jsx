
import React, { useState } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { usePage } from '@inertiajs/react';
import { Card, Col, Row } from 'react-bootstrap';
import AdminDashboard from './Dashboards/AdminDashboard';


const DashCard = ({ colDivision, count, title, subTitle }) => {
    return (
        <Col lg={colDivision} className="d-flex align-items-stretch mb-3">
            <Card className="shadow-sm w-100" >
                <Card.Body>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex flex-column">
                            <span className="fw-normal fs-1 text-primary">{count}</span>
                            <span className="fw-light fs-5 text-secondary">{title}</span>
                            <span className="fs-6 text-muted">{subTitle}</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}

const CoordinatorDashboard = ({dashboardData, facility}) => {
     
    let colDivision = 12 / Object.keys(dashboardData).length;
    const dashDatas = [
        {
            id: 1,
            colDivision: colDivision,
            count: dashboardData.allcrfcount,
            title: "Case Report Forms",
            subTitle: "Overall Enrollments"
        },
           {
            id: 2,
            colDivision: colDivision,
            count: dashboardData.crfcount,
            title: "Case Report Forms",
            subTitle: `from ${facility}`
        },

        {
            id: 3,
            colDivision: colDivision,
            count: dashboardData.scheduledVisitCount,
            title: "Scheduled Visits",
             
        },

        {
            id: 4,
            colDivision: colDivision,
            count: dashboardData.unscheduledVisitCount,
             title: "Uncheduled Visits",
           
        },
    ]
    return (
        <>

            {
                dashDatas.map((dashData) => <DashCard key={dashData.id}
                    colDivision={dashData.colDivision}
                    count={dashData.count}
                    title={dashData.title}
                    subTitle={dashData.subTitle}
                />)
            }



 
 

        </>
    )
}




export default function Dashboard() {

    const { roles, data, facility, adminData, adminCards } = usePage().props;
    return (
        <Authenticated
            pageTitle="Dashboard"

        >
 
 
            <Row className='mt-3 mb-3'>
                {roles?.coordinator || roles?.investigator ?
                    <CoordinatorDashboard dashboardData={data} facility={facility} /> :
                    <AdminDashboard dashboardData={adminData} adminCards={adminCards} />}

            </Row>



        </Authenticated>
    );
}

