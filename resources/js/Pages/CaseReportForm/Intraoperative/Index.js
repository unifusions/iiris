import React, { useEffect, useState } from 'react';

import { useForm, usePage } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import { LinkIcon } from '@heroicons/react/outline';
import { Row, Col, Card, Container } from 'react-bootstrap';
import CaseReportFormData from '../FormData/CaseReportFormData';
import { RenderFieldDatas } from '../FormData/FormDataHelper';
import UpdateIntraOperative from './UpdateIntraoperative';
import ApprovalActionsDisapprove from './ApprovalActionsDisapprove';
import ApprovalSubmit from './ApprovalSubmit';
import ApprovalActionsApprove from './ApprovalActionsApprove';


function SubmittedIntraOperative({ intraoperative }) {
     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }
     return (<>
     
          <RenderFieldDatas labelText='Date of Procedure' value={new Date(intraoperative.date_of_procedure).toLocaleString('en-in', options)} />
          <RenderFieldDatas labelText='Arterial Cannulation' value={intraoperative.arterial_cannulation} />
          <RenderFieldDatas labelText='Venous Cannulation' value={intraoperative.venous_cannulation} />
          <RenderFieldDatas labelText='Cardioplegia' value={intraoperative.cardioplegia} />
          <RenderFieldDatas labelText='Aortotomy' value={intraoperative.aortotomy} />
          <RenderFieldDatas labelText='' value={intraoperative.aortotomy_others} />
          <RenderFieldDatas labelText='Annular Suturing Technique' value={intraoperative.annular_suturing_technique} />
          <RenderFieldDatas labelText='' value={intraoperative.annular_suturing_others} />
          <RenderFieldDatas labelText='Total Cardiopulmonary Bypass Time' value={intraoperative.tcb_time} />
          <RenderFieldDatas labelText='Aortic Cross Clamp Time' value={intraoperative.acc_time} />
          <RenderFieldDatas labelText='Concomitant Procedure' value={intraoperative.concomitant_procedure} />
          <RenderFieldDatas labelText='All paravalvular leak' value={intraoperative.all_paravalvular_leak} />
          <RenderFieldDatas labelText='Major Pravalvular Leak' value={intraoperative.major_paravalvular_leak} />


     </>
     )
}

export default class Index extends React.Component {

     constructor(props) {
          super(props)

     }



     render() {
          const { auth, roles, crf, intraoperative, updateUrl } = this.props;


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

                              <CaseReportFormData crf={crf} />

                              <Card className='shadow-sm rounded-t'>
                                   <Card.Body>
                                        {intraoperative.is_submitted ? <>
                                             <SubmittedIntraOperative intraoperative={intraoperative} />

                                        </> : <> <UpdateIntraOperative intraoperative={intraoperative} crf={crf} role={roles} /> </>}
                                   </Card.Body>
                              </Card>



                         </Container>
                    </div>


               </Authenticated>
          )
     }
}

