import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage, } from "@inertiajs/inertia-react";
import { FilePond } from "react-filepond";
import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { RenderBackButton } from "../FormData/FormDataHelper";


export default function FileUpload() {
     const { auth, roles, errors, crf, preoperative, csrf_token } = usePage().props;
     return (

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
               <Head title="Preoperative File Uploads" />


               <Container>
                    <PageTitle backUrl={route('crf.preoperative.show', { crf: crf, preoperative: preoperative })} pageTitle='Preoperative Echo File Uploads' role={roles} />

                    <Card className="mb-3 shadow-sm rounded-5">
                         <Card.Body>
                              {!preoperative.is_submitted ? <>

                                   <Row>
                                        <Col lg={12}>
                                             <FilePond
                                                  allowRevert={false}
                                                  name="files"
                                                  labelIdle="Upload Files here"
                                                  allowMultiple
                                                  maxParallelUploads={2}
                                                  server={{
                                                       process: {
                                                            url: route('crf.preoperative.fileupload.store', { crf: crf, preoperative: preoperative }),
                                                            method: 'POST',
                                                            headers: { 'X-CSRF-Token': csrf_token }
                                                       },
                                                  }}

                                             />
                                        </Col>
                                   </Row>

                                   <hr />
                                   <RenderBackButton backUrl={route('crf.preoperative.show', { crf: crf, preoperative: preoperative })} className='me-3' />

                              </> : 'You cannot upload files to submitted forms'

                              }
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>

     )
}