
import FormButton from "@/Pages/Shared/FormButton";

import { useForm, usePage } from "@inertiajs/inertia-react";

import React, { useState } from "react";
import { Card, Col, Row, Container, Modal } from "react-bootstrap";



export default function FileUpload() {

     // const { } = usePage().props;
     const { data, setData, post, processing, hasErrors, transform } = useForm({

          files: ''

     });

     const [show, setShow] = useState(false);
     const handleShow = () => setShow(true);

     function handleFilesubmit(e) {
          e.preventDefault();
         
          // return post(route('crf.intraoperative.fileupload.store', { crf: crf, intraoperative: intraoperative }));

     }

     return (
          <>

               <button onClick={()=>handleShow} className='btn btn-primary'>Add More Files</button>

               <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    backdrop="static"
                    keyboard={false}
               >
                    {/* {preoperative.medical_history !== null && */}
                         <>
                              {/* {preoperative.medical_history ? <> */}

                                   <Modal.Header closeButton>
                                        <Modal.Title>Create Medical History</Modal.Title>
                                   </Modal.Header>

                                   <form onSubmit={handleFilesubmit}>

                                        <Row>
                                             <Col lg={3} >
                                                  Dicom Files
                                             </Col>
                                             <Col lg={9}>
                                                  <div className="input-group">
                                                       <input type="file" className="form-control" name="echofiles" multiple onChange={e => setData('files', e.target.files)} />
                                                  </div>

                                             </Col>
                                        </Row>

                                        <hr />

                                        <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                                   </form>
                              {/* </> : 'No medical history found'} */}
                         </>

                    {/* } */}
               </Modal>

          



          </>
     )
}