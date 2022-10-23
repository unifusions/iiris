import FormButton from "@/Pages/Shared/FormButton";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";


export default function CreatePhysicalActivity({ crf, mode, postUrl, preoperative, physicalactivities, postoperative, scheduledvisit, unscheduledvisit, modalTitle }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative !== undefined ? preoperative.id : '',
          scheduled_visits_id: scheduledvisit !== undefined ? scheduledvisit.id : '',
          unscheduled_visits_id: unscheduledvisit !== undefined ? unscheduledvisit.id : '',
          activity_type: '',
          duration: '',

     })


     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return post(route(`${postUrl}`, { crf: crf, preoperative: preoperative }), {
                         preserveScroll: true,
                         onSuccess: () => { reset(); setShow(false); }
                    });
               case 'postoperative':
                    return post(route(`${postUrl}`, { crf: crf, postoperative: postoperative }), {
                         preserveScroll: true,
                         onSuccess: () => { reset(); setShow(false); }
                    });
               case 'scheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, scheduledvisit: scheduledvisit }), {
                         preserveScroll: true,
                         onSuccess: () => { reset(); setShow(false); }
                    });
               case 'unscheduledvisit':
                    return post(route(`${postUrl}`, { crf: crf, unscheduledvisit: unscheduledvisit }), {
                         preserveScroll: true,
                         onSuccess: () => { reset(); setShow(false); }
                    });

          }




     }

     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);

     return (
          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>

                    <button onClick={handleShow} className='btn btn-primary'>Add New Physical Activity</button>
                    <hr />
                    {physicalactivities.length > 0 &&
                         <>
                              <Row className="fw-bold">
                                   <Col>#</Col>
                                   <Col>Activity Type</Col>
                                   <Col>Duration</Col>
                                   <Col>Actions</Col>
                              </Row>

                              <hr />
                              {physicalactivities.map((physicalactivity, index) => <Row className="mb-2" key={index}>
                                   <Col>{index + 1}</Col>
                                   <Col>{physicalactivity.activity_type}</Col>
                                   <Col>{physicalactivity.duration} hrs/week</Col>
                                   <Col>
                                        {preoperative !== undefined && <Link href={route('crf.preoperative.physicalactivity.destroy', { crf: crf, preoperative: preoperative, physicalactivity: physicalactivity })} type="submit" method="delete" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
                                        {scheduledvisit !== undefined && <Link href={route('crf.scheduledvisit.physicalactivity.destroy', { crf: crf, scheduledvisit: scheduledvisit, physicalactivity: physicalactivity })} type="submit" method="delete" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
                                        {unscheduledvisit !== undefined && <Link href={route('crf.unscheduledvisit.physicalactivity.destroy', { crf: crf, unscheduledvisit: unscheduledvisit, physicalactivity: physicalactivity })} type="submit" method="delete" as="button" className='btn btn-danger btn-sm'>Delete</Link>}
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

                    <Modal.Header closeButton>
                         <Modal.Title>{modalTitle}</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={handlesubmit}>
                         <Modal.Body>

                              <FormInput
                                   type="text"
                                   className={`${errors.activity_type && 'is-invalid '}`}
                                   error={errors.activity_type}
                                   labelText='Activity Type'
                                   value={data.activity_type}
                                   handleChange={e => setData('activity_type', e.target.value)}
                              />

                              <FormInputWithLabel
                                   type="number"
                                   className={`${errors.duration && 'is-invalid '}`}
                                   error={errors.duration} labelText="Duration"
                                   handleChange={e => setData('duration', e.target.value)}
                                   units='hrs/week'
                                   value={data.duration}
                                   // min={1}
                                   // max={60}

                                   required />



                         </Modal.Body>
                         <Modal.Footer>
                              <FormButton processing={processing} labelText='Add Physical Activity' type="submit" mode="primary" className="btn-sm" />


                         </Modal.Footer>
                    </form>

               </Modal>
          </Card>

     )
}
