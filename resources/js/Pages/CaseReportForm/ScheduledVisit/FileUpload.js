import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";

import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

import { RenderBackButton } from "../FormData/FormDataHelper";

export default function FileUpload() {

     const { auth, roles, errors, crf, scheduledvisit } = usePage().props;
     const { data, setData, post, processing, hasErrors, transform } = useForm({
          pre_operative_data_id: scheduledvisit.id,

          files: ''

     });

     function handlesubmit(e) {
          e.preventDefault();
          return post(route('crf.scheduledvisit.fileupload.store', { crf: crf, scheduledvisit: scheduledvisit }));

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
                    <Head title="Scheduled Visit File Uploads" />


                    <Container>
                         <PageTitle backUrl={route('crf.scheduledvisit.show', { crf: crf, scheduledvisit: scheduledvisit })} pageTitle={`Scheduled Visit : ${scheduledvisit.visit_no} Echo File Uploads`} role={roles} />

                         <Card className="mb-3 shadow-sm rounded-5">
                              <Card.Body>
                                   {!scheduledvisit.is_submitted ? <>
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
                                             <RenderBackButton backUrl={route('crf.scheduledvisit.show', { crf: crf, scheduledvisit: scheduledvisit })} className='me-3' />
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