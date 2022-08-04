import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";



export default function FamilyHistoryData({ isFamHis, familyhistories, role, linkUrl, enableActions }) {
     return (

          <Card className="mb-3 rounded-5 shadow-sm">


               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Family History
                         </div>

                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {isFamHis === null ?
                                                  <div> <span className="text-secondary small">Family History status is null. Update with Yes/No</span>
                                                       <RenderUpdateButton updateUrl={linkUrl} className='btn-sm ms-3' />
                                                  </div> : <>
                                                       {isFamHis ?
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
                    {isFamHis ? <>
                         {familyhistories.length > 0 &&
                              <>
                                   <Row className="fw-bold">
                                        <Col>#</Col>
                                        <Col>Diagnosis</Col>
                                        <Col>Relation</Col>
                                   </Row>
                                   <hr />
                                   {familyhistories.map((familyhistory, index) => <Row className="mb-2" key={index}>
                                        <Col>{index + 1}</Col>
                                        <Col>{familyhistory.diagnosis}</Col>
                                        <Col>{familyhistory.relation}</Col>

                                   </Row>)}
                              </>


                         }
                    </> : 'No previous family history recorded'}


               </Card.Body>
          </Card>
     )
}
