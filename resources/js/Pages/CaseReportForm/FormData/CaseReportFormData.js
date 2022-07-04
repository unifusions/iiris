import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";



export default function CaseReportFormData({ crf }) {
     return (

          <Card className="mb-3 rounded-5 shadow-sm">
               <Card.Body>
                    <Row>
                         <Col md={4}>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Protocol Number</Col>
                                   <Col md={6}>2021-04</Col>
                              </Row>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Facility</Col>
                                   <Col md={6}>{crf.facility.name}</Col>
                              </Row>

                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Created On</Col>
                                   <Col md={6}>{crf.created_at}</Col>
                              </Row>
                         </Col>
                         <Col md={4}>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Subject ID</Col>
                                   <Col md={6}>{crf.subject_id}</Col>
                              </Row>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>UHID ID</Col>
                                   <Col md={6}>{crf.uhid}</Col>
                              </Row>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Date of Consent</Col>
                                   <Col md={6}>{crf.date_of_consent}</Col>
                              </Row>
                         </Col>

                         <Col md={4}>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Date of Birth</Col>
                                   <Col md={6}>{crf.date_of_birth}</Col>
                              </Row>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Gender</Col>
                                   <Col md={6}>{crf.gender}</Col>
                              </Row>
                              <Row className='mb-3'>
                                   <Col md={6} className='text-secondary'>Age</Col>
                                   <Col md={6}>{crf.age} years</Col>
                              </Row>
                         </Col>

                    </Row>

               </Card.Body>
          </Card>

     )
}
