import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormInput from "@/Pages/Shared/FormInput";
import { Link, useForm } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Card, Col, Modal, Row } from "react-bootstrap";


export default function CreatePhysicalActivity({ crf, mode,postUrl,  preoperative, physicalactivities, postoperative, scheduledvisit, unscheduledvisit }) {

     const { data, setData, processing, post, errors, reset } = useForm({
          pre_operative_data_id: preoperative.id,
          diagnosis: '',
          relation: '',
          
     })


     function handlesubmit(e) {
          e.preventDefault();
          switch (mode) {
               case 'preoperative':
                    return post(route(`${postUrl}`, { crf: crf, preoperative: preoperative }),  {
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
                         physicalactivities.map((physicalactivity, index) => <Row className="mb-2" key={index}>
                              <Col>{index + 1}</Col>
                              
                              <Col>{physicalactivity.activity_type}</Col>
                              <Col>{physicalactivity.duration}</Col>
                              <Col> 
                              <Link href={route('crf.preoperative.physicalactivity.destroy', { crf: crf, preoperative: preoperative, physicalactivity: physicalactivity })} 
                              type="submit" method="delete"  as="button"
                              className='btn btn-danger btn-sm'>Delete</Link>
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
                    {
                         preoperative.physical_activity !== null &&
                         <>
                              {preoperative.physical_activity ? <>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Modal title</Modal.Title>
                                   </Modal.Header>
                                   <form onSubmit={handlesubmit}>
                                        <Modal.Body>

                                             <FormInput
                                                  labelText='Activity Type'
                                                  value={data.activity_type}
                                                  handleChange={e => setData('activity_type', e.target.value)} />


                                             <FormInput labelText='Duration'
                                                  value={data.duration}
                                                  handleChange={e => setData('duration', e.target.value)} />
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
