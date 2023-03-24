import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { FilePond } from "react-filepond";

import { RenderBackButton } from "../FormData/FormDataHelper";

export default function FileUpload() {

     const { auth, roles, errors, crf, postoperative, csrf_token } = usePage().props;
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
               <Head title="Postoperative File Uploads" />
               <Container>
                    <PageTitle backUrl={route('crf.postoperative.show', { crf: crf, postoperative: postoperative })} pageTitle='Postoperative Echo File Uploads' role={roles} />
                    <Card className="mb-3 shadow-sm rounded-5">
                         <Card.Body>
                              {!postoperative.is_submitted ? <>
                                   <Row>
                                        <Col lg={12}>
                                             <FilePond
                                                  allowRevert={false}
                                                  name="files"
                                                  labelIdle="Upload Files here"
                                                  allowMultiple
                                                  maxParallelUploads={2}
                                                  // chunkUploads

                                                  server={{
                                                       process: {url: route('crf.postoperative.fileupload.store', { crf: crf, postoperative: postoperative })},
                                                       headers: { 'X-CSRF-Token': csrf_token },     
                                                       patch : '?crf='+ crf.subject_id +'&postop='+ postoperative.id+'&patch='                                                // patch:{
                                                      
                                                  }}

                                                  

                                             />
                                        </Col>
                                   </Row>
                                   <hr />
                                   <RenderBackButton backUrl={route('crf.postoperative.show', { crf: crf, postoperative: postoperative })} className='me-3' />

                              </> : 'You cannot upload files to submitted forms'
                              }
                         </Card.Body>
                    </Card>
               </Container>
          </Authenticated>

     )
}