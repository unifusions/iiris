import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";


export default function CreateSurgicalHistory({ crf, preoperative, surgicalhistories }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative.id,
          diagnosis: '',
          sh_date: '',
          treatment: '',
     })


     function handlesubmit(e) {
          e.preventDefault();
          post(route('crf.preoperative.surgicalhistory.store', { crf: crf, preoperative: preoperative }), {
               preserveScroll: true,
               onSuccess: () => { reset(); setShow(false); }
          })


     }

     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);

     return (
          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>

                    <button onClick={handleShow} className='btn btn-primary'>Add New Surgical History</button>
                    <hr />
                    {surgicalhistories.length > 0 &&
                         <>

                              <Row className="fw-bold">
                                   <Col>#</Col>
                                   <Col>Date</Col>
                                   <Col>Procedure</Col>
                                   <Col>Treatment</Col>
                         <Col>Actions</Col>
                              </Row>
                              <hr />
                              {surgicalhistories.map((surgicalhistory, index) => <Row className="mb-2" key={index}>
                                   <Col>{index + 1}</Col>
                                   <Col>{surgicalhistory.sh_date}</Col>
                                   <Col>{surgicalhistory.diagnosis}</Col>
                                   <Col>{surgicalhistory.treatment}</Col>
                                   <Col>
                                        <Link href={route('crf.preoperative.surgicalhistory.destroy', { crf: crf, preoperative: preoperative, surgicalhistory: surgicalhistory })}
                                             type="submit" method="delete" as="button"
                                             className='btn btn-danger btn-sm'>Delete</Link>
                                   </Col>
                              </Row>)}
                         </>


                    }
               </Card.Body>
               <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    backdrop="static"
                    keyboard={false}
               >
                    {
                         preoperative.surgical_history !== null &&
                         <>
                              {preoperative.surgical_history ? <>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Add New Surgical History</Modal.Title>
                                   </Modal.Header>
                                   <form onSubmit={handlesubmit}>
                                        <Modal.Body>

                                             <FormCalendar
                                                  labelText="Date of Surgery" error={errors.sh_date}
                                                  name="sh_date"
                                                  value={data.sh_date}
                                        handleChange={(date) => date !== null ? setData('sh_date', new Date(date)) : setData('sh_date', '')}

                                                  
                                                  className={`${errors.sh_date && 'is-invalid'}`}
                                                  required 
                                             />

                                             <FormInput
                                                  labelText='Procedure'
                                                  value={data.diagnosis}
                                                  handleChange={e => setData('diagnosis', e.target.value)} />


                                             <FormInput labelText='Treatment'
                                                  value={data.treatment}
                                                  handleChange={e => setData('treatment', e.target.value)} />
                                        </Modal.Body>
                                        <Modal.Footer>
                                             <FormButton processing={processing} labelText='Add Surgical History' type="submit" mode="primary" className="btn-sm" />
                                        </Modal.Footer>
                                   </form>
                              </> : 'No surgical history found'}
                         </>

                    }
               </Modal>
          </Card>

     )
}
