import React, { useState } from 'react';


import Authenticated from '@/Layouts/Authenticated';
import { Link, usePage } from '@inertiajs/react';

import { Row, Col, Card, Container, Alert, Modal, Button } from 'react-bootstrap';
import CaseReportFormData from '../FormData/CaseReportFormData';
import { RenderFieldBoolDatas, RenderFieldBoolNoDatas, RenderFieldDatas, RenderFormStatus } from '../FormData/FormDataHelper';
import UpdateIntraOperative from './UpdateIntraoperative';
import ApprovalActionsDisapprove from './ApprovalActionsDisapprove';
import ApprovalSubmit from './ApprovalSubmit';
import ApprovalActionsApprove from './ApprovalActionsApprove';

import FileDeleteConfirmDialog from '@/Components/FileDeleteConfirmDialog';
import ApprovalActionEditable from './ApprovalActionsEditable';
import ReviewerIntraUpdate from './ReviewerIntraUpdate';
import { PREDEFINED_CONCOMITANT_PROCEDURE, RenderBoolYesNo } from '../FormFields/Helper';
import Operative from '@/Layouts/Operative';
import FileList from '@/Components/FileList';
import CrfLayout from '@/Layouts/CrfLayout';



function SubmittedIntraOperative({ intraoperative, crf, intradicomfiles, role, intraopfileswext }) {
     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }

     const [fullscreen, setFullscreen] = useState(true);
     const [show, setShow] = useState(false);

     return (<>
          {!role.reviewer ? <>
               <RenderFieldDatas labelText='Date of Procedure' value={intraoperative.date_of_procedure !== null ? new Date(intraoperative.date_of_procedure).toLocaleString('en-in', options) : null} />
               <RenderFieldDatas labelText='Arterial Cannulation' value={intraoperative.arterial_cannulation} />
               <RenderFieldDatas labelText='Venous Cannulation' value={intraoperative.venous_cannulation} />
               <RenderFieldDatas labelText='Cardioplegia' value={intraoperative.cardioplegia} />
               <RenderFieldDatas labelText='Aortotomy' value={intraoperative.aortotomy} />
               {intraoperative.aortotomy === 'Others' &&
                    <RenderFieldDatas labelText='' value={intraoperative.aortotomy_others} />
               }

               <RenderFieldDatas labelText='Annular Suturing Technique' value={intraoperative.annular_suturing_technique} />

               {intraoperative.annular_suturing_technique === 'Others' &&
                    <RenderFieldDatas labelText='' value={intraoperative.annular_suturing_others} />
               }


               <RenderFieldDatas labelText='Total Cardiopulmonary Bypass Time' value={intraoperative.tcb_time} />
               <RenderFieldDatas labelText='Aortic Cross Clamp Time' value={intraoperative.acc_time} />
               {/* <RenderFieldDatas labelText='Concomitant Procedure' value={intraoperative.concomitant_procedure} /> */}

               <hr />
               <div className='fw-bold fs-6 mb-3'>Concomitant Procedure</div>

               {PREDEFINED_CONCOMITANT_PROCEDURE.map((field) =>
                    <>
                         <Row className='mb-3'>
                              <Col md={4} className='text-secondary'>
                                   {field.labelText}
                              </Col>
                              <Col md={8}>
                                   <Row>
                                        <Col md={4}>
                                             <RenderBoolYesNo boolValue={intraoperative[field.fieldName]} />

                                        </Col>
                                        <Col md={4}>
                                             {field.fieldName === 'concomitant_procedure_others' && (

                                                  intraoperative[field.fieldName] === 1 && (
                                                       intraoperative['concomitant_procedure_others_specify']



                                                  )
                                             )
                                             }

                                        </Col>

                                   </Row>

                              </Col>
                         </Row>


                    </>
               )}

               <RenderFieldBoolNoDatas labelText='All paravalvular leak' boolValue={intraoperative.all_paravalvular_leak} value={intraoperative.all_paravalvular_leak_specify} />
               <RenderFieldBoolNoDatas labelText='Major Pravalvular Leak' boolValue={intraoperative.major_paravalvular_leak} value={intraoperative.major_paravalvular_leak_specify} />

               {/* Blind Observer Data */}

               <hr />
               <div className='fw-bold fs-6 mb-3'>Blind Observer Data</div>
               <RenderFieldBoolNoDatas labelText='All paravalvular leak' boolValue={intraoperative.r_all_paravalvular_leak} />
               <RenderFieldBoolNoDatas labelText='Major Pravalvular Leak' boolValue={intraoperative.r_major_paravalvular_leak} />
               <RenderFieldDatas labelText='Comments' value={intraoperative.r_comments} />
               <hr />

          </> : <>

               {intraoperative.visit_status ? <ReviewerIntraUpdate crf={crf} intraoperative={intraoperative} /> : 'This form is yet to be approved'}

          </>}
          {intraopfileswext !== undefined &&
               <Row>
                    <Col md={4} className='text-secondary'>Related Echo Files ({intraopfileswext.length})</Col>
                    <Col md={8} >


                         <FileList 
                         crf={crf}
                         entityRouteKey="intraoperative"
                         role={role}
                         entity ={intraoperative}
                         files={intraopfileswext} />

                          

                         <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                              <Modal.Header closeButton>
                                   <Modal.Title>Modal</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>Modal body content</Modal.Body>
                         </Modal>
                    </Col>

               </Row>

          }

     </>
     )
}


export default function Index() {

     const { roles, crf, intraoperative, intradicomfiles, updateUrl,
          approvalremarks, intraopfileswext
     } = usePage().props;
     return (

           <CrfLayout 
                    crf={crf}
                    pageTitle    ={`Intraoperative | ${crf.subject_id}`}>
          <Operative
               
               activities={approvalremarks}
          >
               <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms \ {crf.subject_id} \ Intraoperative</h2>
                    <div className='d-flex'>
                         <Link href={route('crf.show', { crf: crf })} className="btn btn-secondary me-2" type="button" as="button" >Back</Link>
                         <ApprovalSubmit role={roles} crf={crf} intraoperative={intraoperative} />
                         {intraoperative.is_submitted ? <>
                              <ApprovalActionsDisapprove role={roles} crf={crf} intraoperative={intraoperative} />
                              <ApprovalActionsApprove role={roles} crf={crf} intraoperative={intraoperative} />
                         </> : ''
                         }
                         <ApprovalActionEditable role={roles} crf={crf} intraoperative={intraoperative} />

                    </div>



               </div>



               {roles.reviewer ?
                    <>
                         {intraoperative.is_reviewed ? <>   <div className='bg-success text-white p-3 mb-3 rounded-5 shadow-sm'>
                              Intraoperative Data has been reviewed. To modify data, please raise a
                              <Link href={route('tickets.index')} className="fw-bold text-white" style={{ textDecoration: 'none' }}> query</Link>
                         </div></> : ''}
                    </> : <RenderFormStatus
                         isSubmitted={intraoperative.is_submitted}
                         visitStatus={intraoperative.visit_status}
                         visitNo=''
                         formTitle="Intraoperative " />
               }
               <CaseReportFormData crf={crf} />

               <Card className='shadow-sm rounded-t'>
                    <Card.Body>
                         {intraoperative.is_submitted ? <>
                              <SubmittedIntraOperative intraoperative={intraoperative} crf={crf} role={roles} intradicomfiles={intradicomfiles} intraopfileswext={intraopfileswext} />

                         </> : <>
                              {roles.admin ?

                                   <SubmittedIntraOperative intraoperative={intraoperative} crf={crf} role={roles} intradicomfiles={intradicomfiles} intraopfileswext={intraopfileswext} />
                                   :

                                   <UpdateIntraOperative intraoperative={intraoperative} crf={crf} role={roles} intradicomfiles={intradicomfiles} intraopfileswext={intraopfileswext} />
                              }
                         </>
                         }
                    </Card.Body>
               </Card>
          </Operative>

          </CrfLayout>
     )
}



