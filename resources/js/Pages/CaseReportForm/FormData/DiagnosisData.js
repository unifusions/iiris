import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderDuration, RenderFieldBoolDatas, RenderSymptomDatas } from "./FormDataHelper";



export default function DiagnosisData({ diagnosis, role, createUrl, editUrl, enableActions }) {


     return (

          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Diagnosis
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {diagnosis === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }


                    </div><hr />
                    {diagnosis !== null ?
                         <>
                              
                               

                                   <Row className='mb-3'>
                                        <Col md={4} className='text-secondary'>
                                             Diagnosis
                                        </Col>
                                        <Col md={8}>

                                             {diagnosis.diagnosis_data !== null ? <>Aortic {diagnosis.diagnosis_data}</> : <NotAvailable />}


                                        </Col>

                                      
                                   </Row>










                         </> : <span className="fw-normal text-secondary fst-italic">No Diagnosis has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
