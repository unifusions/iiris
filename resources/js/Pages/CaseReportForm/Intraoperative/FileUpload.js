import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";
import { FilePond } from "react-filepond";

import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { RenderBackButton } from "../FormData/FormDataHelper";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export default function FileUpload() {

     const { auth, roles, errors, crf, intraoperative, csrf_token,
          accessKey, accessId, bucket } = usePage().props;
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
                    <Head title="Intraoperative File Uploads" />


                    <Container>
                         <PageTitle backUrl={route('crf.intraoperative.show', { crf: crf, intraoperative: intraoperative })} pageTitle='Intraoperative File Uploads' role={roles} />

                         <Card className="mb-3 shadow-sm rounded-5">
                              <Card.Body>
                                   {!intraoperative.is_submitted ? <>
                                        <Row>
                                             <Col lg={12}>
                                                  <FilePond
                                                       allowRevert={false}
                                                       name="files"
                                                       labelIdle="Upload Files here"
                                                       allowMultiple
                                                       chunkUploads
                                                       maxParallelUploads={2}
                                                       server={{
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
                                                                      Key: `uploads/${crf.subject_id}/intraoperative/` + file.name,
                                                                      Body: file,
                                                                 };
                                                                 const command = new PutObjectCommand(params);
                                                                 client.send(command).then(
                                                                      (response) => {
                                                                           if (response.$metadata.httpStatusCode == 200) {


                                                                                post(route('crf.intraoperative.fileupload.store', {
                                                                                     crf: crf, intraoperative: intraoperative,
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
                                        <RenderBackButton backUrl={route('crf.intraoperative.show', { crf: crf, intraoperative: intraoperative })} className='me-3' />


                                   </> : 'You cannot upload files to submitted forms'

                                   }
                              </Card.Body>



                         </Card>



                    </Container>


               </Authenticated>
          </>
     )
}