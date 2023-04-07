import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";

export default function ApprovalActionEditable({ role, crf, unscheduledvisit }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          remarks: '',
          action: 'Unlocked'
     });
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.unscheduledvisit.update', { crf: crf, unscheduledvisit: unscheduledvisit }));
     }
     return (
          <>
               {role.admin &&
                    <>{unscheduledvisit.visit_status !== null &&
                         <>
                              {unscheduledvisit.visit_status ?
                                   <Button variant="primary" onClick={handleShow} className='me-2'> Unlock </Button> : ''
                              }

                              <Modal show={show} onHide={handleClose}>
                                   <form onSubmit={handlesubmit}>
                                        <Modal.Header closeButton>
                                             <Modal.Title>Remarks/Reason</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                                        <Modal.Footer>
                                             <FormButton processing={processing} labelText='Unlock' type="submit" mode="danger" />

                                        </Modal.Footer>
                                   </form>
                              </Modal>
                         </>
                    }</>
               }


          </>


     )
}
