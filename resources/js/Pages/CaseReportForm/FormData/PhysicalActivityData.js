import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";



export default function PhysicalActivityData({ physicalactivites, isPhyAct, role, linkUrl, enableActions }) {
     return (

          <Card className="mb-3 shadow-sm rounded-5">


               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              Physical Activity
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {isPhyAct === null ?
                                                  <div> <span className="text-secondary small">Physical Activity status is null. Update with Yes/No</span>
                                                       <RenderUpdateButton updateUrl={linkUrl} className='btn-sm ms-3' />
                                                  </div> : <>
                                                       {isPhyAct ?
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
                    {isPhyAct ? <>
                         {physicalactivites.length > 0 &&
                              <>
                                   <Row className="fw-bold">
                                        <Col>#</Col>
                                        <Col>Activity Type</Col>
                                        <Col>Duration</Col>
                                   </Row>

                                   <hr />
                                   {physicalactivites.map((physicalactivity, index) => <Row className="mb-2" key={index}>
                                        <Col>{index + 1}</Col>
                                        <Col>{physicalactivity.activity_type}</Col>
                                        <Col>{physicalactivity.duration} mins</Col>

                                   </Row>)

                                   }
                              </>
                         }
                    </> : 'No previous physical activity recorded'}

               </Card.Body>
          </Card>
     )
}
