import React from 'react';


import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';

import { Row, Col, Card, Container, Alert } from 'react-bootstrap';
import PhysicalExaminationData from '../FormData/PhysicalExaminationData';
import SymptomsData from '../FormData/SymptomsData';
import MedicationsData from '../FormData/MedicationsData';
import EchocardiographyData from '../FormData/EchocardiographyData';
import ElectrocardiogramData from '../FormData/ElectrocardiogramData';
import MedicalHistoryData from '../FormData/MedicalHistoryData';
import SurgicalHistoryData from '../FormData/SurgicalHistoryData';
import FamilyHistoryData from '../FormData/FamilyHistoryData';
import PersonalHistoryData from '../FormData/PersonalHistoryData';
import PhysicalActivityData from '../FormData/PhysicalActivityData';
import LabInvestigationData from '../FormData/LabInvestigationData';
import CaseReportFormData from '../FormData/CaseReportFormData';
import ApprovalSubmit from './ApprovalSubmit';
import ApprovalActionsApprove from './ApprovalActionsApprove';
import ApprovalActionsDisapprove from './ApprovalActionsDisapprove';
import { RenderFormStatus } from '../FormData/FormDataHelper';




export default class Index extends React.Component {

     constructor(props) {
          super(props)

     }



     render() {
          const { auth, roles, crf, preoperative,
               physicalexamination, symptoms,
               medicalhistories,
               surgicalhistories,
               familyhistories,
               personalhistories,
               physicalactivities,
               labinvestigations,
               electrocardiograms,
               echocardiographies, echodicomfiles,
               medications,
               
          } = this.props;



          return (
               <Authenticated auth={auth} role={roles}>

                    <div className='wrapper'>

                         <Container className='mb-3'>
                              <div className='d-flex justify-content-between align-items-center mb-3'>
                                   <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms \ {crf.subject_id} \ Preoperative</h2>
                                   <div className='d-flex'>
                                        <Link href={route('crf.show', { crf: crf })} className="btn btn-secondary me-2" type="button" as="button" >Back</Link>
                                        <ApprovalSubmit role={roles} crf={crf} preoperative={preoperative} />
                                        {preoperative.is_submitted ? <>
                                             <ApprovalActionsDisapprove role={roles} crf={crf} preoperative={preoperative} />
                                             <ApprovalActionsApprove role={roles} crf={crf} preoperative={preoperative} />
                                        </> : ''
                                        }



                                   </div>


                              </div>
                              <RenderFormStatus
                                   isSubmitted={preoperative.is_submitted}
                                   visitStatus={preoperative.visit_status}
                                   visitNo=''
                                   formTitle="Preoperative " />

                              <CaseReportFormData crf={crf} />

                              <Row className='align-items-stretch '>



                                   <Col md={12} lg={12} className="mail-view d-none d-md-block">

                                        <PhysicalExaminationData
                                             physicalexamination={physicalexamination}
                                             role={roles}
                                             enableActions={preoperative.is_submitted}
                                             showHWB = {true}
                                             createUrl={route('crf.preoperative.physicalexamination.create', { crf: crf, preoperative: preoperative })}
                                             editUrl={physicalexamination !== null && route('crf.preoperative.physicalexamination.edit', { crf: crf, preoperative: preoperative, physicalexamination: physicalexamination })}
                                        />

                                        <SymptomsData
                                             symptoms={symptoms}
                                             enableActions={preoperative.is_submitted}
                                             role={roles}
                                             title='Pre Operative'
                                             createUrl={route('crf.preoperative.symptoms.create', { crf: crf, preoperative: preoperative })}
                                             editUrl={symptoms !== null && route('crf.preoperative.symptoms.edit', { crf: crf, preoperative: preoperative, symptom: symptoms })}
                                        />

                                        <MedicalHistoryData
                                             medicalhistories={medicalhistories}
                                             enableActions={preoperative.is_submitted}
                                             hasMedHis={preoperative.medical_history}
                                             role={roles}
                                             linkUrl={route('crf.preoperative.medicalhistory.index', { crf: crf, preoperative: preoperative })}
                                        />
                                        <SurgicalHistoryData
                                             surgicalhistories={surgicalhistories}
                                             enableActions={preoperative.is_submitted}
                                             hasSurHis={preoperative.surgical_history}
                                             role={roles}
                                             linkUrl={route('crf.preoperative.surgicalhistory.index', { crf: crf, preoperative: preoperative })}

                                        />

                                        <FamilyHistoryData
                                             familyhistories={familyhistories}
                                             enableActions={preoperative.is_submitted}
                                             isFamHis={preoperative.family_history}
                                             role={roles}
                                             linkUrl={route('crf.preoperative.familyhistory.index', { crf: crf, preoperative: preoperative })}
                                        />

                                        <PersonalHistoryData
                                             personalhistories={personalhistories}
                                             enableActions={preoperative.is_submitted}
                                             role={roles}
                                             createUrl={route('crf.preoperative.personalhistory.create', { crf: crf, preoperative: preoperative })}
                                             editUrl={personalhistories !== null && route('crf.preoperative.personalhistory.edit', { crf: crf, preoperative: preoperative, personalhistory: personalhistories })}
                                        />
                                        <PhysicalActivityData
                                             isPhyAct={preoperative.physical_activity}
                                             enableActions={preoperative.is_submitted}
                                             physicalactivites={physicalactivities}
                                             role={roles}
                                             linkUrl={route('crf.preoperative.physicalactivity.index', { crf: crf, preoperative: preoperative })}
                                        />

                                        <LabInvestigationData
                                             labinvestigations={labinvestigations}
                                             enableActions={preoperative.is_submitted}
                                             role={roles}
                                             createUrl={route('crf.preoperative.labinvestigation.create', { crf: crf, preoperative: preoperative })}
                                             editUrl={labinvestigations !== null && route('crf.preoperative.labinvestigation.edit', { crf: crf, preoperative: preoperative, labinvestigation: labinvestigations })}
                                        />

                                        <ElectrocardiogramData
                                             electrocardiograms={electrocardiograms}
                                             enableActions={preoperative.is_submitted}
                                             role={roles}
                                             createUrl={route('crf.preoperative.electrocardiogram.create', { crf: crf, preoperative: preoperative })}
                                             editUrl={electrocardiograms !== null && route('crf.preoperative.electrocardiogram.edit', { crf: crf, preoperative: preoperative, electrocardiogram: electrocardiograms })}
                                        />
                                        
                                       

                                        <EchocardiographyData
                                             echocardiographies={echocardiographies}
                                             enableActions={preoperative.is_submitted}
                                             echodicomfiles = {echodicomfiles}
                                             role={roles}
                                             createUrl={route('crf.preoperative.echocardiography.create', { crf: crf, preoperative: preoperative })}
                                             editUrl={echocardiographies !== null && route('crf.preoperative.echocardiography.edit', { crf: crf, preoperative: preoperative, echocardiography: echocardiographies })}
                                        />


                                        <MedicationsData
                                             hasMedication={preoperative.hasMedications}
                                             enableActions={preoperative.is_submitted}
                                             medications={medications}
                                             role={roles}
                                             linkUrl={route('crf.preoperative.medication.index', { crf: crf, preoperative: preoperative })}
                                        />

                                   </Col>
                              </Row>
                         </Container>
                    </div>


               </Authenticated>
          )
     }
}

