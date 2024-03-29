import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage, } from "@inertiajs/inertia-react";
import { FilePond } from "react-filepond";
import React, { useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";
import { RenderBackButton } from "../FormData/FormDataHelper";

import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";




export default function FileUpload() {
     const { auth, roles, errors, crf, preoperative, csrf_token, accessKey, accessId, bucket } = usePage().props;

     const { post } = useForm();

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
                                                  // chunkUploads
                                                  maxParallelUploads={2}
                                                  server={
                                                       {
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
                                                                      Key: `uploads/${crf.subject_id}/preoperative/` + file.name,
                                                                      Body: file,
                                                                 };
                                                                 const command = new PutObjectCommand(params);
                                                                 client.send(command).then(
                                                                      (response) => {
                                                                           if (response.$metadata.httpStatusCode == 200) {
                                                                                

                                                                                post(route('crf.preoperative.fileupload.store', {
                                                                                     crf: crf, preoperative: preoperative,
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
                                                       }
                                                  }
                                             // server={{
                                             //      process: {
                                             //           url: route('crf.preoperative.fileupload.store', { crf: crf, preoperative: preoperative })
                                             //      },
                                             //      headers: {
                                             //          'X-CSRF-Token': csrf_token,
                                             //      },
                                             //      patch: '?crf=' + crf.subject_id + '&preop=' + preoperative.id + '&patch='
                                             // }}

                                             />

                                        </Col>
                                   </Row>

                                   {/* <Row>
                                        <Col lg={12}>
                                             <div>
                                                  <input type="file" onChange={handleFileChange} />
                                                  <button onClick={uploadFile}>Upload</button>
                                             </div>
                                        </Col>
                                   </Row> */}

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