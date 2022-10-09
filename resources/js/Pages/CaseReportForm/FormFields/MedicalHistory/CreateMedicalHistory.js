import FormButton from "@/Pages/Shared/FormButton";
import FormInput from "@/Pages/Shared/FormInput";
import FormRadio from "@/Pages/Shared/FormRadio";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";


export default function CreateMedicalHistory({ crf, preoperative, medicalhistories }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative.id,
          diagnosis: '',
          duration: '',
          treatment: '',
          on_treatment: '',
     })


     function handlesubmit(e) {
          e.preventDefault();
          post(route('crf.preoperative.medicalhistory.store', { crf: crf, preoperative: preoperative, medicalhistories }), {
               preserveScroll: true,

               onSuccess: () => { reset(); setShow(false); }
          })


     }

     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);
     const boolRadios = [
          { labelText: 'Yes', value: '1' },
          { labelText: 'No', value: '0' }
     ];
     return (
          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>

                    <button onClick={handleShow} className='btn btn-primary'>Add New Medical History</button>
                    <hr />
                    {medicalhistories.length > 0 &&
                         <>
                              <Row className="fw-bold">
                                   <Col>#</Col>
                                   <Col>Diagnosis</Col>
                                   <Col>Duration</Col>
                                   <Col>Treatment</Col>
                                   <Col>Actions</Col>
                              </Row>
                              <hr />
                              {medicalhistories.map((medicalhistory, index) => <Row className="mb-2" key={index}>
                                   <Col>{index + 1}</Col>
                                   <Col>{medicalhistory.diagnosis}</Col>
                                   <Col>{medicalhistory.duration}</Col>
                                   <Col>{medicalhistory.on_treatment !== null && 
                                        <> {medicalhistory.on_treatment ===1 ? 'Yes' : 'No'}
                                        </>
                                   }</Col>
                                   <Col> <Link href={route('crf.preoperative.medicalhistory.destroy', { crf: crf, preoperative: preoperative, medicalhistory: medicalhistory })} type="submit" method="delete" className='btn btn-danger btn-sm'>Delete</Link>
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
                         preoperative.medical_history !== null &&
                         <>
                              {preoperative.medical_history ? <>

                                   <Modal.Header closeButton>
                                        <Modal.Title>Create Medical History</Modal.Title>
                                   </Modal.Header>

                                   <form onSubmit={handlesubmit}>
                                        <Modal.Body>

                                             <FormInput
                                                  labelText='Diagnosis'
                                                  value={data.diagnosis}
                                                  handleChange={e => setData('diagnosis', e.target.value)} />

                                             <FormInput
                                                  labelText='Duration'
                                                  value={data.duration}
                                                  handleChange={e => setData('duration', e.target.value)} />

                                             <FormRadio
                                                  labelText="On Treatment?"
                                                  options={boolRadios}
                                                  name="on_treatment"
                                                  handleChange={e => setData('on_treatment', e.target.value)}
                                                  selectedValue={data.on_treatment !== null && data.on_treatment}
                                                  error={errors.on_treatment}
                                                  className={`${errors.on_treatment ? 'is-invalid' : ''}`}
                                             />

                                             {/* <FormInput
                                                  labelText='Treatment'
                                                  value={data.treatment}
                                                  handleChange={e => setData('treatment', e.target.value)} /> */}

                                        </Modal.Body>
                                        <Modal.Footer>
                                             <FormButton processing={processing} labelText='Add Medical History' type="submit" mode="primary" className="btn-sm" />
                                        </Modal.Footer>
                                   </form>
                              </> : 'No medical history found'}
                         </>

                    }
               </Modal>
          </Card>

     )
}
