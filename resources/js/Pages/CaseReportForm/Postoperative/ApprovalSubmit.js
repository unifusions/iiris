import FormButton from "@/Pages/Shared/FormButton";
import { useForm } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap";

export default function ApprovalSubmit({ role, crf, postoperative }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          is_submitted: '1',
          action: 'Submitted',
          remarks: ''
     });
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.postoperative.update', { crf: crf, postoperative: postoperative }));
     }
     return (
          <>{role.coordinator &&
               <>{postoperative.is_submitted !== null &&
                    <>
                         {postoperative.is_submitted ? '' :

                                   <Button variant="primary" onClick={handleShow}> Submit </Button>
                                   }
                         <Modal show={show} onHide={handleClose}>
                              <form onSubmit={handlesubmit}>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Remarks/Reason</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                                   <Modal.Footer>
                                        <FormButton processing={processing} labelText='Submit for Approval' type="submit" mode="primary" />

                                   </Modal.Footer>
                              </form>
                         </Modal>
                    </>
               }</>
          }  </>


     )
}
