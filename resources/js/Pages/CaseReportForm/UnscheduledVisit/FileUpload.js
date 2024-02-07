import Authenticated from "@/Layouts/Authenticated";

import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";

import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { FilePond } from "react-filepond";

import { RenderBackButton } from "../FormData/FormDataHelper";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export default function FileUpload() {



     const { auth, roles, errors, crf, unscheduledvisit, csrf_token, accessKey, accessId, bucket } = usePage().props;
     const { post } = useForm();


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
                                        <Row>
                                             <Col lg={12}>
                                                  <FilePond
                                                       allowRevert={false}
                                                       name="files"
                                                       labelIdle="Upload Files here"
                                                       allowMultiple
                                                       maxParallelUploads={2}
                                                      
                                                       server={{
                                                            // process: {url: route('crf.unscheduledvisit.fileupload.store', { crf: crf, unscheduledvisit: unscheduledvisit })},
                                                            // headers: { 'X-CSRF-Token': csrf_token },     
                                                            // patch : '?crf='+ crf.subject_id +'&usvid='+ unscheduledvisit.id+'&patch='                                                // patch:{
                                                                 process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {


                                                                      const client = new S3Client({
                                                                           region: 'ap-south-1',
                                                                           // signatureVersion: 'v4'
                                                                           credentials: {
                                                                                accessKeyId: accessId,
                                                                                secretAccessKey: accessKey
                                                                           }
                                                                      });
     
     
                                                                      const params = {
                                                                           Bucket: bucket,
                                                                           Key: `uploads/${crf.subject_id}/unscheduledvisits/visit_${unscheduledvisit.visit_no}/` + file.name,
                                                                           Body: file,
                                                                      };
                                                                      const command = new PutObjectCommand(params);
                                                                      client.send(command).then(
                                                                           (response) => {
                                                                                if (response.$metadata.httpStatusCode == 200) {
                                                                                     
     
                                                                                     post(route('crf.unscheduledvisit.fileupload.store', {
                                                                                          crf: crf, unscheduledvisit: unscheduledvisit,
                                                                                          fileName: file.name,
                                                                                          url: params.Key
     
                                                                                     }))
                                                                                     load();
                                                                                }
                                                                                else {
                                                                                     error();
                                                                                }
                                                                           }
                                                                      );
                                                                 }
                                                       }}


                                                  />
                                             </Col>
                                        </Row>


                                        <hr />
                                        <RenderBackButton backUrl={route('crf.unscheduledvisit.show', { crf: crf, unscheduledvisit: unscheduledvisit })} className='me-3' />


                                   </> : 'You cannot upload files to submitted forms'

                                   }
                              </Card.Body>



                         </Card>



                    </Container>


               </Authenticated>
          </>
     )
}