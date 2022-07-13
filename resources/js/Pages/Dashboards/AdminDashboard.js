import React from "react";
import { Row, Col, Card } from "react-bootstrap";

import {
     Chart as ChartJS,
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';


ChartJS.register(
     CategoryScale,
     LinearScale,
     PointElement,
     LineElement,
     Title,
     Tooltip,
     Legend
);

export const options = {
     responsive: true,
     plugins: {
          legend: {
               position: 'top',
          },
          title: {
               display: true,
               text: 'Chart.js Line Chart',
          },
     },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


const AdminDashboard = (props) => {
     const { dashboardData, facility, adminCards } = props;
     const data = {
          labels,
          datasets: [
               {
                    label: 'CRF Registrations',
                    data: adminCards.crfreg,
                    borderColor: 'rgb(255, 99, 132)',
                    // backgroundColor: 'rgba(255, 99, 132, 0.5)',
               },

          ],
     };

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
                              <div className="d-flex justify-content-between align-items-center">
                                   <div className="d-flex flex-column">
                                        <span className="fw-normal fs-1 text-primary">{dashboardData.facilityCount}</span>
                                        <span className="fw-light fs-5 text-secondary">Facilities</span>

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
                                        <span className="fw-normal fs-1 text-primary">{dashboardData.usersCount}</span>
                                        <span className="fw-light fs-5 text-secondary">Users</span>

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
                                        <span className="fw-normal fs-1 text-primary">{dashboardData.tickets}</span>
                                        <span className="fw-light fs-5 text-secondary">Tickets</span>

                                   </div>
                              </div>
                         </Card.Body>
                    </Card>
               </Col>

{/*               
               <Col lg={12} >
                    <Line options={options} data={data} />
               </Col> */}

          </>
     )
}


export default AdminDashboard;
