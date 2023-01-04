import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";



export default function MedicationsData({ hasMedication, medications, role, linkUrl, enableActions }) {
     return (

          <Card className="mb-3 shadow-sm rounded-5">

               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Medications
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {hasMedication === null ?
                                                  <div> <span className="text-secondary small">Medications status is null. Update with Yes/No</span>
                                                       <RenderUpdateButton updateUrl={linkUrl} className='btn-sm ms-3' />
                                                  </div> : <>
                                                       {hasMedication ?
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
                    {hasMedication === null ? <span className="fw-normal text-secondary fst-italic">Medication Data has not been updated. Go ahead and update one.</span> : <>
                         {hasMedication ? <>

                              {medications.length > 0 &&
                                   <>
                                        <Row className="fw-bold">
                                             <Col>#</Col>
                                             <Col>Medication</Col>
                                             <Col>Indication</Col>
                                             <Col>Status</Col>
                                             <Col>Start Date</Col>
                                             <Col>Stop Date</Col>
                                             <Col>Dosage</Col>
                                             <Col>Reason</Col>
                                        </Row>
                                        <hr />
                                        {medications.map((medication, index) => <Row className="mb-2" key={index}>
                                             <Col>{index + 1}</Col>
                                             <Col>{medication.medication}</Col>
                                             <Col>{medication.indication}</Col>
                                             <Col>{medication.status} </Col>
                                             <Col>{medication.start_date !== null && new Date(medication.start_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', })}</Col>
                                             <Col>{medication.stop_date !== null && new Date(medication.stop_date).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', })}</Col>
                                             <Col>{medication.dosage}</Col>
                                             <Col>{medication.reason}</Col>

                                        </Row>)}
                                   </>

                              }
                         </> : 'No previous medications recorded'}
                    </>}


               </Card.Body>
          </Card>
     )
}
