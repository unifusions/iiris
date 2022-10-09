import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";



export default function SurgicalHistoryData({ hasSurHis, surgicalhistories, role, linkUrl, enableActions }) {



     return (

          <Card className="mb-3 rounded-5 shadow-sm">
               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Surgical History
                         </div>

                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {hasSurHis === null ?
                                                  <div> <span className="text-secondary small">Surgical History status is null. Update with Yes/No</span>
                                                       <RenderUpdateButton updateUrl={linkUrl} className='btn-sm ms-3' />
                                                  </div> : <>
                                                       {hasSurHis ?
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
                    {hasSurHis ? <>
                         {surgicalhistories.length > 0 &&

                              <> 
                              
                              
                              <Row className="fw-bold">
                                   <Col>#</Col>
                                   <Col>Date</Col>
                                   <Col>Diagnosis</Col>
                                   <Col>Treatment</Col>

                              </Row>
                              <hr/>
                              {surgicalhistories.map((surgicalhistory, index) => <Row className="mb-2" key={index}>
                                   <Col>{index + 1}</Col>
                                   <Col>{surgicalhistory.sh_date}</Col>
                                   <Col>{surgicalhistory.diagnosis}</Col>
                                   <Col>{surgicalhistory.on_treatment !== null &&
                                             <> {surgicalhistory.on_treatment === 1 ? 'Yes' : 'No'}
                                             </>
                                        }</Col>
                              </Row>)}</>


                         }
                    </> : 'No previous surgical history recorded'}


               </Card.Body>
          </Card>
     )
}
