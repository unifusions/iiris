import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";

import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

import { RenderBackButton } from "../FormData/FormDataHelper";

export default function FileUpload() {

     const { auth, roles, errors, crf, unscheduledvisit } = usePage().props;
     const { data, setData, post, processing, hasErrors, transform } = useForm({
         files: ''

     });

     function handlesubmit(e) {
          e.preventDefault();
          return post(route('crf.unscheduledvisit.fileupload.store', { crf: crf, unscheduledvisit: unscheduledvisit }));

     }

     return (
          <>
               <Authenticated
                    auth={auth}
                    errors={errors}
                    role={roles}
                    breadcrumb={<>
                         <li className='breadcrumb-item'>
                              <Link href={route('crf.index')} className="breadcrumb-item"> Case Report Form</Link>
                         </li>
                         <li className='breadcrumb-item'>
                              <span className="Active">File Upload</span>
                         </li>
                    </>
                    }
               >
                    <Head title="Unscheduled Visit File Uploads" />


                    <Container>
                         <PageTitle backUrl={route('crf.unscheduledvisit.show', { crf: crf, unscheduledvisit: unscheduledvisit })} pageTitle={`Unscheduled Visit : ${unscheduledvisit.visit_no} Echo File Uploads`} role={roles} />

                         <Card className="mb-3 shadow-sm rounded-5">
                              <Card.Body>
                                   {!unscheduledvisit.is_submitted ? <>
                                        <form onSubmit={handlesubmit}>

                                             <Row>
                                                  <Col lg={3} >
                                                       Echo Files
                                                  </Col>
                                                  <Col lg={9}>
                                                       <div className="input-group">
                                                            <input type="file" className="form-control" name="echofiles" multiple onChange={e => setData('files', e.target.files)} />
                                                       </div>

                                                  </Col>
                                             </Row>

                                             <hr />
                                             <RenderBackButton backUrl={route('crf.unscheduledvisit.show', { crf: crf, unscheduledvisit: unscheduledvisit })} className='me-3' />
                                             <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                                        </form>

                                   </> : 'You cannot upload files to submitted forms'

                                   }
                              </Card.Body>



                         </Card>



                    </Container>


               </Authenticated>
          </>
     )
}