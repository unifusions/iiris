import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";



export default function MedicalHistoryData({ hasMedHis, medicalhistories, role, linkUrl, enableActions }) {
     return (

          <Card className="mb-3 shadow-sm rounded-5">


               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Medical History
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {hasMedHis === null ?
                                                  <div> <span className="text-secondary small">Medical History status is null. Update with Yes/No</span>
                                                       <RenderUpdateButton updateUrl={linkUrl} className='btn-sm ms-3' />
                                                  </div> : <>
                                                       {hasMedHis ?
                                                            <RenderCreateButton createUrl={linkUrl} className='btn-sm' /> :
                                                            <RenderEditButton editUrl={linkUrl} className='btn-sm' />}
                                                  </>
                                             }
                                        </>
                                   }
                              </>
                         }


                    </div>
                    <hr />
                    {hasMedHis ? <>
                         {medicalhistories.length > 0 &&
                              <>
                                   <Row className="fw-bold">
                                        <Col>#</Col>
                                        <Col>Diagnosis</Col>
                                        <Col>Duration</Col>
                                        <Col>Treatment</Col>
                                   </Row>
                                   <hr/>
                                   {medicalhistories.map((medicalhistory, index) => <Row className="mb-2" key={index}>
                                        <Col>{index + 1}</Col>
                                        <Col>{medicalhistory.diagnosis}</Col>
                                        <Col>{medicalhistory.duration}</Col>
                                        <Col>{medicalhistory.treatment}</Col>

                                   </Row>)}
                              </>

                         }
                    </> : 'No previous medical history recorded'}


               </Card.Body>
          </Card>
     )
}
