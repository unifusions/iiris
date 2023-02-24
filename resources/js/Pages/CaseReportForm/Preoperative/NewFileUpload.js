import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";

import React, { useState } from "react";
import { Card, Col, Row, Container } from "react-bootstrap";


import { RenderBackButton } from "../FormData/FormDataHelper";

export default function NewFileUpload() {

     const { auth, roles, errors, crf, preoperative } = usePage().props;
     const { data, setData, post, processing, hasErrors, transform, progress } = useForm({
          pre_operative_data_id: preoperative.id,

          files: null

     });

     // const [sfiles, setSfiles] = useState();

     function handlesubmit(e) {
          e.preventDefault();
          return post(route('crf.preoperative.fileupload.store', { crf: crf, preoperative: preoperative }));

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
                                        <form onSubmit={handlesubmit}>

                                             <Row>
                                                  <Col lg={3} >
                                                       Echo Files
                                                  </Col>
                                                  <Col lg={9}>
                                                       <div className="input-group">
                                                            <input type="file" className="form-control" name="echofiles" multiple
                                                                 // onChange={e => setSfiles(e.target.files)} />
                                                                 onChange={e => setData('files', e.target.files)} />
                                                       </div>

                                                       {/* <ReactResumableJs

                                                            uploaderID="image-upload"
                                                            dropTargetID="myDropTarget"
                                                            // filetypes={["jpg", "png"]}
                                                            fileAccept="image/*"
                                                            fileAddedMessage="Started!"
                                                            completedMessage="Complete!"
                                                            service={route('crf.preoperative.fileupload.store', { crf: crf, preoperative: preoperative })}
                                                            textLabel="Uploaded files"
                                                            previousText="Drop to upload your media:"
                                                            disableDragAndDrop={false}
                                                            onFileSuccess={(file, message) => {
                                                                 console.log(file, message);
                                                            }}
                                                            onFileAdded={(file, resumable) => {
                                                                 resumable.upload();
                                                            }}
                                                            maxFiles={1}
                                                            startButton={true}
                                                            pauseButton={false}
                                                            cancelButton={false}
                                                            onStartUpload={() => {
                                                                 console.log("Start upload");
                                                            }}
                                                            onCancelUpload={() => {
                                                                 this.inputDisable = false;
                                                            }}
                                                            onPauseUpload={() => {
                                                                 this.inputDisable = false;
                                                            }}
                                                            onResumeUpload={() => {
                                                                 this.inputDisable = true;
                                                            }}
                                                       /> */}

                                                  </Col>
                                             </Row>
                                             {progress && (<>
                                                  <progress value={progress.percentage} max="100">

                                                  </progress>
                                                  {progress.percentage} %

                                             </>

                                             )}


                                             {/* {
                                                  sfiles && (
                                                       <>
                                                            {sfiles.map((f) => <>
                                                                 {console.log(f)}
                                                            </>)}
                                                       </>
                                                  )
                                             } */}


                                             <hr />
                                             <RenderBackButton backUrl={route('crf.preoperative.show', { crf: crf, preoperative: preoperative })} className='me-3' />
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