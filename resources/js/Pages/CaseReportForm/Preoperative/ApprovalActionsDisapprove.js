import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { Button, Modal } from "react-bootstrap";

export default function ApprovalActionsDisapprove({ role, crf, preoperative }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          disapprove: '1',
          remarks: '',
          action: 'Disapproved'
     });
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.preoperative.update', { crf: crf, preoperative: preoperative }));
     }
     return (
          <>
               {role.investigator &&
                    <>{preoperative.visit_status !== null &&
                         <>
                              {preoperative.visit_status ? '' :
                                   <Button variant="danger" onClick={handleShow} className = 'me-2'> Disapprove </Button>

                              }

                              <Modal show={show} onHide={handleClose}>
                                   <form onSubmit={handlesubmit}>
                                        <Modal.Header closeButton>
                                             <Modal.Title>Remarks/Reason</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                                        <Modal.Footer>
                                             <FormButton processing={processing} labelText='Disapprove' type="submit" mode="danger" />

                                        </Modal.Footer>
                                   </form>
                              </Modal>
                         </>
                    }</>
               }


          </>


     )
}
