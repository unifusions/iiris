import React, { Children } from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage, useForm } from '@inertiajs/inertia-react';
import { Card, BreadcrumbItem, Row, Col, Container, Table, Nav, Tab } from 'react-bootstrap';
import { LinkIcon } from '@heroicons/react/solid';
import CaseReportFormData from './FormData/CaseReportFormData';
import EchocardiographyData from './FormData/EchocardiographyData';

export default class Show extends React.Component {
     constructor(props) {
          super(props);
          // const { auth, errors, crf, roles, children } = {props};
     }

     render() {
          const auth = this.props.auth;
          const errors = this.props.errors;
          const roles = this.props.roles;
          const crf = this.props.crf;
          const children = this.props.children;
          const backUrl = this.props.backUrl;
          const { preoperativeUrl, preopremarks, postopremarks, svremarks, usvremarks, intraopremarks } = this.props;

          function RenderRemarksData({ remarks }) {
               return (
                    <>
                         {remarks !== null ?
                              <ul className='notifications'>
                                   {remarks.map((approvalremark) => <li key={approvalremark.id} className="py-2">
                                        Form has been <strong>{approvalremark.action}</strong> <br />
                                        <span className='text-secondary'>{approvalremark.remarks}</span>
                                   </li>)}
                              </ul> : 'No records found'
                         }
                    </>
               )
          }

          function RenderRemarks({ remarks, cardTitle }) {
               return (
                    <Card className='shadow-sm rounded-5 mb-3'>
                         <Card.Body>
                              <div className="fs-6 fw-bold">{cardTitle}</div>
                              <hr />
                              <RenderRemarksData remarks={remarks} />
                         </Card.Body>
                    </Card>
               )
          }

          return (
               <Authenticated
                    auth={auth}
                    errors={errors}
                    role={roles}
                    breadcrumb={<>
                         <li className='breadcrumb-item'>
                              <Link href={route('crf.index')} className="breadcrumb-item"> Case Report Form</Link>
                         </li>
                         <li className='breadcrumb-item'>
                              <span className='active'>Subject : {crf.subject_id}</span>

                         </li>
                    </>
                    }
               >
                    <Head title="Create New Case Report Form" />

                    <div className='wrapper'>
                         <Row className='align-items-stretch'>

                              <Col md={3} lg={2} className=" ">
                                   <div className='menu-bar'>
                                        <ul className='menu-items'>
                                             <li className="active">
                                                  <Link href={route('crf.preoperative.show', { crf: crf, preoperative: crf.preoperative })} className=''>
                                                       <LinkIcon style={{ width: 20, height: 20 }} className="me-2" />
                                                       Pre-Operative
                                                  </Link>
                                             </li>

                                             <li className=" ">
                                                  <Link href={route('crf.intraoperative.show', { crf: crf, intraoperative: crf.intraoperative })} className=''>
                                                       <LinkIcon style={{ width: 20, height: 20 }} className="me-2" />
                                                       Intra-Operative
                                                  </Link>
                                             </li>

                                             <li className=" ">
                                                  <Link href={route('crf.postoperative.show', { crf: crf, postoperative: crf.postoperative })} className=''>
                                                       <LinkIcon style={{ width: 20, height: 20 }} className="me-2" />
                                                       Post-Operative
                                                  </Link>
                                             </li>

                                             {crf.scheduledvisits.map((visit, index) => <li className="nav-item" key={index} >
                                                  <Link href={route('crf.scheduledvisit.show', { crf: crf, scheduledvisit: visit })} className=''>
                                                       <LinkIcon style={{ width: 20, height: 20 }} className="me-2" />
                                                       Visit No. {visit.visit_no}
                                                  </Link>


                                             </li>)}

                                             <li>
                                                  <Link href={route('crf.unscheduledvisit.index', { crf: crf })} className=''>
                                                       <LinkIcon style={{ width: 20, height: 20 }} className="me-2" />
                                                       Unscheduled Visits
                                                  </Link>
                                             </li>


                                        </ul>
                                   </div>
                                   <nav>

                                   </nav>
                              </Col>

                              <Col md={9} lg={10} className="mail-view">
                                   <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms</h2>
                                        <Link href={backUrl} className="btn btn-secondary" method="get" type="button" as="button">Back</Link>
                                   </div>
                                   <CaseReportFormData crf={crf} />

                                   <Row className='align-items-stretch'>
                                        <Col md={4} lg={4}>
                                             <RenderRemarks cardTitle='Preoperative Form Comments' remarks={preopremarks} />

                                        </Col>

                                        <Col md={4} lg={4}>
                                             <RenderRemarks cardTitle='Intraoperative Form Comments' remarks={intraopremarks} />

                                        </Col>

                                        <Col md={4} lg={4}>
                                             <RenderRemarks cardTitle='Postoperative Form Comments' remarks={postopremarks} />

                                        </Col>


                                        {svremarks.map((sv) => <Col md={3} lg={3} key={sv.visit_no}>
                                             <RenderRemarks cardTitle={`Scheduled Visit No. ${sv.visit_no} Comments`} remarks={sv.remarks} />
                                        </Col>)}

                                   </Row>

                                   <Row className='align-items-stretch'>

                                        {usvremarks.map((sv) => <Col md={3} lg={3} key={sv.visit_no}>
                                             <RenderRemarks cardTitle={`Unscheduled Visit No. ${sv.visit_no} Comments`} remarks={sv.remarks} />
                                        </Col>)}


{console.log(usvremarks)}

                                   </Row>
                                   {/* <Tab.Container id="left-tabs-example" defaultActiveKey="preoperative">
                                        <Row className='align-items-stretch'>
                                             <Col md={3} lg={2}>
                                                  <div className='menu-bar'>
                                                       <Nav className='menu-items flex-column' variant='pills'>
                                                            <Nav.Item>
                                                                 <Nav.Link eventKey="preoperative">
                                                                 Preoperative
                                                                 </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                 <Nav.Link eventKey="intraoperative">
                                                                 Intraoperative
                                                                 </Nav.Link>
                                                            </Nav.Item>
                                                            <Nav.Item>
                                                                 <Nav.Link eventKey="postoperative">
                                                                 Post Operative
                                                                 </Nav.Link>
                                                            </Nav.Item>
                                                            
                                                       </Nav>    
                                                  </div>
                                             </Col>
                                             <Col md={9} lg={10}>

                                                  
                                                  <Tab.Content>
                                                       <Tab.Pane eventKey="preoperative">

                                                       <Card className='rounded-5 shadow-sm'>
                                        <Card.Body>
                                                
                                        </Card.Body>
                                   </Card>
                                                           
                                                       </Tab.Pane>
                                                       <Tab.Pane eventKey="intraoperative">
                                                       Intraoperative
                                                       </Tab.Pane>
                                                       <Tab.Pane eventKey="postoperative">
                                                       postoperative  
                                                       </Tab.Pane>
                                                  </Tab.Content>
                                             </Col>
                                        </Row>
                                   </Tab.Container> */}

                              </Col>
                         </Row>

                    </div>


               </Authenticated>
          )
     }
}