import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import FormRadio from "@/Pages/Shared/FormRadio";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import CreateMedications from "./CreateMedications";


export default function RenderMedication({ crf, preoperative, postoperative, scheduledvisit, unscheduledvisit, medications, postopmedications, preopmedications, createUrl }) {

     const RenderMedTable = ({ meds }) => {
          return (
               <>
    
                    {
                         meds.length > 0 &&
                         <>


                              {meds.map((med, index) =>
                                   <Row className="mb-2" key={index}>
                                        {/* <Col>{index + 1}</Col> */}
                                        <Col>{med.medication.medication}</Col>
                                        <Col>{med.medication.indication}</Col>
                                        <Col>{med.medication.status}</Col>
                                        <Col>
                                        {med.medication.start_date !== null && new Date(med.medication.start_date).toLocaleDateString('en-IN',{ day: 'numeric',  month: 'numeric',year: 'numeric',  })}
                                        </Col>
                                        <Col>{med.medication.stop_date !== null &&
                                        new Date(med.medication.stop_date).toLocaleDateString('en-IN',{ day: 'numeric',  month: 'numeric',year: 'numeric',  })}
                                        </Col>
                                        <Col>{med.medication.dosage}</Col>
                                        <Col>{med.medication.reason}</Col>
                                        <Col><>
                                             <Link href={med.editUrl} type="submit" method="get" as="button" className='btn btn-warning btn-sm me-1'>Edit</Link>
                                             <Link href={med.deleteUrl} type="submit" method="delete" as="button" className='btn btn-danger btn-sm'>Delete</Link>



                                        </>
                                        </Col>
                                   </Row>
                              )}
                         </>



                    }</>)
     }
     const [show, setShow] = useState(false);
     const [edit, setEdit] = useState(false)
     const handleShow = () => setShow(true);
     function handleEditShow(e, medication) {
          setEdit(true);

     }
     return (
          <>

               <Card className="mb-3 shadow-sm rounded-5">
                    <Card.Body>
                         <Link href={createUrl} type="submit" method="get" as="button" className='btn btn-primary btn-sm'>Add Medication</Link>
                         {/* {preoperative !== undefined && <Link href={route('crf.preoperative.medication.create', { crf: crf, preoperative: preoperative })} type="submit" method="get" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
                         {postoperative !== undefined && <Link href={route('crf.postoperative.medication.create', { crf: crf, postoperative: postoperative })} type="submit" method="get" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
                         {scheduledvisit !== undefined && <Link href={route('crf.scheduledvisit.medication.create', { crf: crf, scheduledvisit: scheduledvisit })} type="submit" method="get" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
                         {unscheduledvisit !== undefined && <Link href={route('crf.unscheduledvisit.medication.create', { crf: crf, unscheduledvisit: unscheduledvisit })} type="submit" method="get" as="button" className='btn btn-danger btn-sm'>Delete</Link>} */}

                         <hr />
                         <Row className="fw-bold">
                              {/* <Col>#</Col> */}
                              <Col>Medication</Col>
                              <Col>Indication</Col>
                              <Col>Status</Col>
                              <Col>Start Date</Col>
                              <Col>Stop Date</Col>
                              <Col>Dosage</Col>
                              <Col>Reason</Col>
                              <Col>Actions</Col>
                         </Row>
                         <hr />
                         
                         <RenderMedTable meds={medications}/>
                    
                        
                         
                    </Card.Body>

                    <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false}>
                         <Modal.Header closeButton>
                              <Modal.Title>Create Medication</Modal.Title>
                         </Modal.Header>

                         <Modal.Body>
                              {/* {preoperative !== undefined &&
                              <>
                                   {preoperative.hasMedications !== null && <>
                                        {preoperative.hasMedications ? <CreateMedications crf={crf} preoperative={preoperative} mode={mode} /> : ''}
                                   </>}
                              </> */}

                         </Modal.Body>

                    </Modal>

               </Card>

          </>



     )
}
