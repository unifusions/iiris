import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage, } from "@inertiajs/inertia-react";
import { FilePond } from "react-filepond";


import React, { useCallback, useEffect, useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";




import { RenderBackButton } from "../FormData/FormDataHelper";



// import 'filepond/dist/filepond.min.css';


export default function FileUpload() {

     const { auth, roles, errors, crf, preoperative, csrf_token } = usePage().props;
     const { data, setData, post, processing, hasErrors, transform, progress } = useForm({
          pre_operative_data_id: preoperative.id,

          files: ''

     });

     const [files, setFiles] = useState([]);
     function handlesubmit(e) {
          e.preventDefault();

          return post(route('crf.preoperative.fileupload.store', { crf: crf, preoperative: preoperative }));
          // return post(route('dicupload'));



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
                    <Head title="Preoperative File Uploads" />


                    <Container>
                         <PageTitle backUrl={route('crf.preoperative.show', { crf: crf, preoperative: preoperative })} pageTitle='Preoperative Echo File Uploads' role={roles} />

                         <Card className="mb-3 shadow-sm rounded-5">
                              <Card.Body>
                                   {!preoperative.is_submitted ? <>
                                        {/* <form onSubmit={handlesubmit}> */}

                                        {/* <Row>
                                                  <Col lg={3} >
                                                       Echo Files
                                                  </Col>
                                                  <Col lg={9}>
                                                       <div className="input-group">
                                                            <input type="file" className="form-control" name="echofiles" multiple
                                                                 // onChange={e => setSfiles(e.target.files)} />
                                                                 onChange={e => setData('files', e.target.files)} />
                                                       </div>

                                                  </Col>
                                             </Row> */}


                                        <Row>
                                             <Col lg={12}>
                                                  <FilePond
                                                       allowRevert={false}
                                                       name="files"
                                                       labelIdle="Upload Files here and click SAVE after uploading"
                                                       allowMultiple
                                                       maxParallelUploads={4}
                                                       files={files}
                                                       query={{ 'preoperative': preoperative }}
                                                       onupdatefiles={setFiles}
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
                                        {/* <RenderBackButton backUrl={route('crf.preoperative.show', { crf: crf, preoperative: preoperative })} className='me-3' />
                                             <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                                        </form> */}



                                   </> : 'You cannot upload files to submitted forms'

                                   }
                              </Card.Body>



                         </Card>



                    </Container>


               </Authenticated>
          </>
     )
}