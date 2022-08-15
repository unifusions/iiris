import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Head, Link, useForm, usePage } from "@inertiajs/inertia-react";

import React from "react";
import { Card, Col, Row, Container } from "react-bootstrap";

import { RenderBackButton } from "../FormData/FormDataHelper";

export default function FileUpload() {

     const { auth, roles, errors, crf, intraoperative } = usePage().props;
     const { data, setData,  post, processing, hasErrors, transform } = useForm({
          intra_operative_data_id: intraoperative.id,
       
          files: ''

     });

     function handlesubmit(e) {
          e.preventDefault();
          return post(route('crf.intraoperative.fileupload.store', { crf: crf, intraoperative: intraoperative }));       

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
                    <Head title="Intraoperative File Uploads" />


                    <Container>
                         <PageTitle backUrl={route('crf.intraoperative.show', {crf:crf, intraoperative: intraoperative})} pageTitle='Intraoperative File Uploads' role={roles} />

                         <Card className="mb-3 shadow-sm rounded-5">
                              <Card.Body>
                                   <form onSubmit={handlesubmit}>

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
                                        <RenderBackButton backUrl={route('crf.intraoperative.show', {crf:crf, intraoperative: intraoperative})} className='me-3' />
                                        <FormButton processing={processing} labelText='Save' type="submit" mode="primary" />


                                   </form>


                              </Card.Body>



                         </Card>

                         {/* {preoperative.family_history !== null &&
                              <>
                                   {preoperative.family_history ? <CreateFamilyHistory preoperative={preoperative} crf={crf} familyhistories={familyhistories} /> : ''}
                              </>

                         } */}



                    </Container>
               </Authenticated>
          </>
     )
}