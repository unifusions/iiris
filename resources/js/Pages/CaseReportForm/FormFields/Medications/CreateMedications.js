import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import FormRadio from "@/Pages/Shared/FormRadio";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";
import RenderMedication from "./RenderMedication";


export default function CreateMedications({ crf, preoperative, postoperative,scheduledvisit, unscheduledvisit, medications, mode }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : null,
          post_operative_data_id: postoperative !== undefined ? postoperative.id : null,
          scheduled_visits_id: scheduledvisit !== undefined? scheduledvisit.id : null,
          unscheduled_visits_id: '',
          medication: '',
          indication: '',
          status: '',
          start_date: '',
          stop_date: '',
          dosage: '',
          reason: '',
     })


     function handlesubmit(e) {
          e.preventDefault();


          switch (mode) {
               case 'preoperative':
                    return post(route('crf.preoperative.medication.store', { crf: crf, preoperative: preoperative }), { preserveScroll: true, onSuccess: () => { reset(); setShow(false); } });
               case 'postoperative':
                    return post(route('crf.postoperative.medication.store', { crf: crf, postoperative: postoperative }), { preserveScroll: true, onSuccess: () => { reset(); setShow(false); } });
               case 'scheduledvisit':
                    return post(route('crf.scheduledvisit.medication.store', { crf: crf, scheduledvisit: scheduledvisit }), { preserveScroll: true, onSuccess: () => { reset(); setShow(false); } });
               case 'unscheduledvisit':
                    return post(route('crf.unscheduledvisit.medication.store', { crf: crf, unscheduledvisit: unscheduledvisit }), { preserveScroll: true, onSuccess: () => { reset(); setShow(false); } });

          }




     }

     const medicationOptions = [
          { labelText: 'Ongoing', value: 'Ongoing' },
          { labelText: 'Discontinued', value: 'Discontinued' },
     ]

     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);

     return (
          <>
               <Card className="mb-3 shadow-sm rounded-5">
                    <Card.Body>

                         <button onClick={handleShow} className='btn btn-primary'>Add New Medication</button>
                         <hr />
                         {medications.length > 0 &&
                              medications.map((medication, index) => <Row className="mb-2" key={index}>
                                   <Col>{index + 1}</Col>
                                   <Col>{medication.medication}</Col>
                                   <Col>{medication.indication}</Col>
                                   <Col>{medication.status}</Col>
                                   <Col>{medication.start_date}</Col>
                                   <Col>{medication.stop_date}</Col>
                                   <Col>{medication.dosage}</Col>
                                   <Col>{medication.reason}</Col>
                                   <Col><>
                                        {preoperative !== undefined && <Link href={route('crf.preoperative.medication.destroy', { crf: crf, preoperative: preoperative, medication: medication })} type="submit" method="delete" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
                                        {postoperative !== undefined && <Link href={route('crf.postoperative.medication.destroy', { crf: crf, postoperative: postoperative, medication: medication })} type="submit" method="delete" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
</>
                                   </Col>
                              </Row>)

                         }
                    </Card.Body>
                    <Modal
                         show={show}
                         onHide={() => setShow(false)}
                         backdrop="static"
                         keyboard={false}
                    >




                         <Modal.Header closeButton>
                              <Modal.Title>Create Medication</Modal.Title>
                         </Modal.Header>

                         <Modal.Body>
                              <form onSubmit={handlesubmit}>
                                   <FormInput
                                        labelText='Medication'
                                        value={data.medication}
                                        handleChange={e => setData('medication', e.target.value)} />

                                   <FormInput
                                        labelText='Indication'
                                        value={data.indication}
                                        handleChange={e => setData('indication', e.target.value)} />
                                   <FormRadio
                                        type="radio"
                                        labelText="Status"
                                        name="status"
                                        selectedValue={data.status}
                                        options={medicationOptions}
                                        handleChange={e => setData('status', e.target.value)}

                                        error={errors.status}
                                        className={`${errors.status ? 'is-invalid' : ''}`} />

                                   <FormCalendar
                                        labelText='Start Date'
                                        name='start_date'
                                        value={data.start_date}
                                        handleChange={(date) => setData('start_date', new Date(date))}
                                        className={`${errors.start_date ? 'is-invalid' : ''}`}
                                   />
                                   {data.status === 'Discontinued' && <>
                                        <FormCalendar labelText='Stop Date'
                                             name='stop_date'
                                             minDate={data.start_date}
                                             value={data.stop_date}
                                             handleChange={(date) => setData('stop_date', new Date(date))}
                                             className={`${errors.stop_date ? 'is-invalid' : ''}`} />

                                   </>}

                                   <FormInput
                                        labelText='Dosage'
                                        value={data.dosage}
                                        handleChange={e => setData('dosage', e.target.value)} />


                                   {data.status === 'Discontinued' && <>
                                        <FormInput labelText='Reason for discontinuation'
                                             value={data.reason}
                                             handleChange={e => setData('reason', e.target.value)} />

                                   </>}

                                   <FormButton processing={processing} labelText='Add Medication' type="submit" mode="primary" className="btn-sm" />
                              </form>
                         </Modal.Body>
                         <Modal.Footer>

                         </Modal.Footer>





                    </Modal>

               </Card>

          </>



     )
}
