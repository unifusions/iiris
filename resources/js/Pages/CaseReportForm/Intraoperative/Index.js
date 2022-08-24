import React, { useEffect, useState } from 'react';

import { useForm, usePage } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import { LinkIcon } from '@heroicons/react/outline';
import { Row, Col, Card, Container, Alert } from 'react-bootstrap';
import CaseReportFormData from '../FormData/CaseReportFormData';
import { RenderFieldBoolDatas, RenderFieldBoolNoDatas, RenderFieldDatas, RenderFormStatus } from '../FormData/FormDataHelper';
import UpdateIntraOperative from './UpdateIntraoperative';
import ApprovalActionsDisapprove from './ApprovalActionsDisapprove';
import ApprovalSubmit from './ApprovalSubmit';
import ApprovalActionsApprove from './ApprovalActionsApprove';
import { DocumentDownloadIcon } from '@heroicons/react/outline';


function SubmittedIntraOperative({ intraoperative, crf, intradicomfiles }) {
     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }
     const iconStyle = { width: 15, height: 15, };

     return (<>

          <RenderFieldDatas labelText='Date of Procedure' value={new Date(intraoperative.date_of_procedure).toLocaleString('en-in', options)} />
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
          <RenderFieldDatas labelText='Concomitant Procedure' value={intraoperative.concomitant_procedure} />
          <RenderFieldBoolNoDatas labelText='All paravalvular leak' boolValue={intraoperative.all_paravalvular_leak} value={intraoperative.all_paravalvular_leak_specify} />
          <RenderFieldBoolNoDatas labelText='Major Pravalvular Leak' boolValue={intraoperative.major_paravalvular_leak} value={intraoperative.major_paravalvular_leak_specify} />

          {intradicomfiles !== undefined &&
               <Row>
                    <Col md={4} className='text-secondary'>Related Dicom Files</Col>
                    <Col md={8} >

                         <ul className="file-list">
                              {intradicomfiles.map((file) =>
                                   <li key={file.id} className='col-6'>

                                        <a href={route('crf.intraoperative.fileupload.show', { crf: crf, intraoperative: intraoperative, fileupload: file })} ><DocumentDownloadIcon style={iconStyle} /> {file.file_name} </a>
                                   </li>)}
                         </ul>
                    </Col>

               </Row>

          }
     </>
     )
}

export default class Index extends React.Component {

     constructor(props) {
          super(props)

     }



     render() {
          const { auth, roles, crf, intraoperative, updateUrl, intradicomfiles } = this.props;


          return (
               <Authenticated auth={auth} role={roles}>

                    <div className='wrapper'>

                         <Container className='mb-3'>
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

                                   </div>



                              </div>
                             

                              <RenderFormStatus
                                   isSubmitted={intraoperative.is_submitted}
                                   visitStatus={intraoperative.visit_status}
                                   visitNo=''
                                   formTitle="Intraoperative " />

                              <CaseReportFormData crf={crf} />

                              <Card className='shadow-sm rounded-t'>
                                   <Card.Body>
                                        {intraoperative.is_submitted ? <>
                                             <SubmittedIntraOperative intraoperative={intraoperative} crf={crf} role={roles} intradicomfiles={intradicomfiles} />

                                        </> : <> <UpdateIntraOperative intraoperative={intraoperative} crf={crf} role={roles} intradicomfiles={intradicomfiles} /> </>}
                                   </Card.Body>
                              </Card>



                         </Container>
                    </div>


               </Authenticated>
          )
     }
}

