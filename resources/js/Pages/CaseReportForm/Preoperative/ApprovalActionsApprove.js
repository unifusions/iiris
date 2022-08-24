
import FormButton from "@/Pages/Shared/FormButton";
import { Link, useForm } from "@inertiajs/inertia-react"
import React, { useState } from "react"
import { Modal, Button } from "react-bootstrap";

export default function ApprovalActionsApprove({ role, crf, preoperative }) {

     const { data, put, setData, processing } = useForm({
          approve: '1',
          remarks: '',
          action: 'Approved'
     });
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     function handlesubmit(e) {
          e.preventDefault();
          return put(route('crf.preoperative.update', { crf: crf, preoperative: preoperative }));
     }
     return (
          <>{role.investigator &&
               <>{preoperative.visit_status !== null &&
                    <>
                         {preoperative.visit_status ? '' :
                              <Button variant="success" onClick={handleShow}> Approve </Button>

                         }
                         
                         <Modal show={show} onHide={handleClose}>
                              <form onSubmit={handlesubmit}>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Remarks/Reason</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                                   <Modal.Footer>
                                        <FormButton processing={processing} labelText='Approve' type="submit" mode="success" />

                                   </Modal.Footer>
                              </form>
                         </Modal>
                    </>
               }</>
          }  </>


     )

}
