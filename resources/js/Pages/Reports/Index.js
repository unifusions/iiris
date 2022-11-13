import React from "react";

import Authenticated from "@/Layouts/Authenticated";
import { Card, Col, Row, Table } from "react-bootstrap";
import { Head, Link } from "@inertiajs/inertia-react";




export default class Index extends React.Component {

     constructor(props) {
          super(props);
     }

     render() {
          return (
               <Authenticated
                    auth={this.props.auth}
                    errors={this.props.errors}
                    header={
                         <div className='d-flex justify-content-between align-items-center mb-3'>
                              <h2 className="font-semibold text-xl text-gray-800 leading-tight">Reports</h2>

                         </div>

                    }
                    role={this.props.roles}
               >
                    <Head title="Case Report Form" />
                    <Card className="card shadow-sm rounded-5">
                         <Card.Body>
                              <Row>
                                   <Col md={4}>
                                  Case Report Forms
                                   </Col>
                                   <Col md={8}>
                                        <a href={route('downloadCrfReport')} className="btn btn-primary" method="get" type="button" as="button" >Download</a>
                                   </Col>
                              </Row>

                              <Row>
                                   <Col md={4}>
                                  Physical Examination
                                   </Col>
                                   <Col md={8}>
                                        <a href={route('downloadPhysicalExaminationReport')} className="btn btn-primary" method="get" type="button" as="button" >Download</a>
                                   </Col>
                              </Row>

                         </Card.Body>


                    </Card>


               </Authenticated >
          );
     }

}

