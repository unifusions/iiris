import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, FormSelect, Modal, Row } from "react-bootstrap";
import FormInputSelect from "@/Pages/Shared/FormInputSelect";


export default function CreateFamilyHistory({ crf, preoperative, familyhistories }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative.id,
          diagnosis: '',
          relation: '',

     })


     function handlesubmit(e) {
          e.preventDefault();
          post(route('crf.preoperative.familyhistory.store', { crf: crf, preoperative: preoperative }), {
               preserveScroll: true,
               onSuccess: () => { reset(); setShow(false); }
          })


     }

     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);
     const relationOptions = [
          { optionText: 'Father', value: 'Father' },
          { optionText: 'Mother', value: 'Mother' },
          { optionText: 'Brother', value: 'Brother' },
          { optionText: 'Sister', value: 'Sister' }
     ]
     return (
          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>

                    <button onClick={handleShow} className='btn btn-primary'>Add New Family History</button>
                    <hr />
                    {familyhistories.length > 0 &&

                         <>
                              <Row className="fw-bold">
                                   <Col>#</Col>
                                   <Col>Diagnosis</Col>
                                   <Col>Relation</Col>
                                   <Col>Actions</Col>
                              </Row>
                              <hr />
                              {familyhistories.map((familyhistory, index) => <Row className="mb-2" key={index}>
                                   <Col>{index + 1}</Col>

                                   <Col>{familyhistory.diagnosis}</Col>
                                   <Col>{familyhistory.relation}</Col>
                                   <Col>
                                        <Link href={route('crf.preoperative.familyhistory.destroy', { crf: crf, preoperative: preoperative, familyhistory: familyhistory })}
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
                         preoperative.family_history !== null &&
                         <>
                              {preoperative.family_history ? <>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Create Family History</Modal.Title>
                                   </Modal.Header>
                                   <form onSubmit={handlesubmit}>
                                        <Modal.Body>

                                             <FormInput
                                                  labelText='Diagnosis'
                                                  value={data.diagnosis}
                                                  handleChange={e => setData('diagnosis', e.target.value)} />

                                             <FormInputSelect
                                                  labelText='Relation'
                                                  selectedValue={data.relation}
                                                  handleChange={e => setData('relation', e.target.value)}
                                                  options={relationOptions}
                                             />

                                        </Modal.Body>
                                        <Modal.Footer>
                                             <FormButton processing={processing} labelText='Add Family History' type="submit" mode="primary" className="btn-sm" />


                                        </Modal.Footer>
                                   </form>
                              </> : 'No medical history found'}
                         </>

                    }
               </Modal>
          </Card>

     )
}
