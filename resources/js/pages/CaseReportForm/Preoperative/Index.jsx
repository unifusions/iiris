import React from 'react';


 
import {  Link, usePage } from '@inertiajs/react';

import {  Card} from 'react-bootstrap';
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

 
import { RenderCreateButton, RenderFormStatus } from '../FormData/FormDataHelper';

 
 
import DiagnosisData from '../FormData/DiagnosisData';
import PredefinedMedicalHistoryData from '../FormData/PredefinedMedicalHistoryData';
import PredefinedFamilyHistoryData from '../FormData/PredefinedFamilyHistoryData';
import ActivityTimeline from '@/Components/ActivityTimeline';
import Operative from '@/Layouts/Operative';
import FileList from '@/Components/FileList';
import CrfLayout from '@/Layouts/CrfLayout';
import ApprovalSubmit from '../FormFields/ApprovalSubmit';




export default function Index() {

     const { roles, crf, preoperative,
          diagnosis,
          physicalexamination, symptoms,
          medicalhistories,
          surgicalhistories,
          familyhistories,
          predefinedfamilyhistory,
          personalhistories,
          physicalactivities,
          labinvestigations,
          electrocardiograms,
          echocardiographies, echodicomfiles,
          medications, predefinedmedicalhistory,
          preopdicomfiles,
          preopfileswext,
          approvalremarks,
          errors

     } = usePage().props;

const isSubmitted = preoperative.is_submitted;
const isReviewer = roles.reviewer;
const canEdit = !isSubmitted; 


     return (

          <CrfLayout
               crf={crf}
               pageTitle={`Preoperative | ${crf.subject_id}`}
               backUrl={route('crf.show', { crf: crf })}
               screenTitle="Preoperative"
               entity={crf.preoperative}
               entityType="preoperative"
          >

               <RenderFormStatus
                    isSubmitted={preoperative.is_submitted}
                    visitStatus={preoperative.visit_status}
                    visitNo=''
                    formTitle="Preoperative" />

               <Operative activities={approvalremarks}>





                    <CaseReportFormData crf={crf} />

                    {!roles.reviewer ?
                         <>
                              <DiagnosisData
                                   id="diagnosis"
                                   diagnosis={diagnosis}
                                   createUrl={route('crf.preoperative.diagnosis.create', { crf: crf, preoperative: preoperative })}
                                   enableActions={preoperative.is_submitted}

                                   editUrl={diagnosis !== null && route('crf.preoperative.diagnosis.edit', { crf: crf, preoperative: preoperative, diagnosi: diagnosis })}

                              />
                              <PhysicalExaminationData
                                   id="physicalexamination"
                                   physicalexamination={physicalexamination}
                                 
                                   enableActions={preoperative.is_submitted}
                                   showHWB={true}
                                   createUrl={route('crf.preoperative.physicalexamination.create', { crf: crf, preoperative: preoperative })}
                                   editUrl={physicalexamination !== null && route('crf.preoperative.physicalexamination.edit', { crf: crf, preoperative: preoperative, physicalexamination: physicalexamination })}
                              />

                              <SymptomsData
                                   id="symptoms"
                                   symptoms={symptoms}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}
                                   title='Pre Operative'
                                   createUrl={route('crf.preoperative.symptoms.create', { crf: crf, preoperative: preoperative })}
                                   editUrl={symptoms !== null && route('crf.preoperative.symptoms.edit', { crf: crf, preoperative: preoperative, symptom: symptoms })}
                              />

                              <PredefinedMedicalHistoryData

                                   id="medical-history"
                                   medicalhistory={predefinedmedicalhistory}
                                   enableActions={preoperative.is_submitted}
                                   hasMedHis={predefinedmedicalhistory !== null ? predefinedmedicalhistory.hasMedHis : null}
                                   createUrl={route('crf.preoperative.predefinedmedicalhistory.index', { crf: crf, preoperative: preoperative })}
                                   role={roles}

                              />
                              {/* <MedicalHistoryData
                                                  medicalhistories={medicalhistories}
                                                  enableActions={preoperative.is_submitted}
                                                  hasMedHis={preoperative.medical_history}
                                                  role={roles}
                                                  linkUrl={route('crf.preoperative.medicalhistory.index', { crf: crf, preoperative: preoperative })}
                                             /> */}
                              <SurgicalHistoryData
                                   id="surgical-history"
                                   surgicalhistories={surgicalhistories}
                                   enableActions={preoperative.is_submitted}
                                   hasSurHis={preoperative.surgical_history}
                                   role={roles}
                                   linkUrl={route('crf.preoperative.surgicalhistory.index', { crf: crf, preoperative: preoperative })}

                              />

                              <PredefinedFamilyHistoryData
                                   id="family-history"
                                   predefinedfamilyhistory={predefinedfamilyhistory}
                                   enableActions={preoperative.is_submitted}
                                   isFamHis={preoperative.family_history}
                                   role={roles}
                                   linkUrl={route('crf.preoperative.familyhistory.index', { crf: crf, preoperative: preoperative })}
                              />

                              {/* <FamilyHistoryData
                                                  familyhistories={familyhistories}
                                                  enableActions={preoperative.is_submitted}
                                                  isFamHis={preoperative.family_history}
                                                  role={roles}
                                                  linkUrl={route('crf.preoperative.familyhistory.index', { crf: crf, preoperative: preoperative })}
                                             /> */}

                              <PersonalHistoryData
                                   id="personal-history"
                                   personalhistories={personalhistories}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.preoperative.personalhistory.create', { crf: crf, preoperative: preoperative })}
                                   editUrl={personalhistories !== null && route('crf.preoperative.personalhistory.edit', { crf: crf, preoperative: preoperative, personalhistory: personalhistories })}
                              />
                              <PhysicalActivityData
                                   id="physical-activity"
                                   isPhyAct={preoperative.physical_activity}
                                   enableActions={preoperative.is_submitted}
                                   physicalactivites={physicalactivities}
                                   role={roles}
                                   linkUrl={route('crf.preoperative.physicalactivity.index', { crf: crf, preoperative: preoperative })}
                              />

                              <LabInvestigationData
                                   id="lab-investigation"
                                   labinvestigations={labinvestigations}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.preoperative.labinvestigation.create', { crf: crf, preoperative: preoperative })}
                                   editUrl={labinvestigations !== null && route('crf.preoperative.labinvestigation.edit', { crf: crf, preoperative: preoperative, labinvestigation: labinvestigations })}
                              />

                              <ElectrocardiogramData
                                   id="electrocardiogram"
                                   electrocardiograms={electrocardiograms}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.preoperative.electrocardiogram.create', { crf: crf, preoperative: preoperative })}
                                   editUrl={electrocardiograms !== null && route('crf.preoperative.electrocardiogram.edit', { crf: crf, preoperative: preoperative, electrocardiogram: electrocardiograms })}
                              />
                              <EchocardiographyData
                                   id="echocardiography"
                                   echocardiographies={echocardiographies}
                                   enableActions={preoperative.is_submitted}
                                   echodicomfiles={echodicomfiles}
                                   role={roles}
                                   createUrl={route('crf.preoperative.echocardiography.create', { crf: crf, preoperative: preoperative })}
                                   editUrl={echocardiographies !== null && route('crf.preoperative.echocardiography.edit', { crf: crf, preoperative: preoperative, echocardiography: echocardiographies })}
                              />

                              <MedicationsData
                                   id="medications"
                                   hasMedication={preoperative.hasMedications}
                                   enableActions={preoperative.is_submitted}
                                   medications={medications}
                                   role={roles}
                                   linkUrl={route('crf.preoperative.medication.index', { crf: crf, preoperative: preoperative })}
                              />


                              <Card id="echo-files" className="mb-3  shadow-sm scroll-section">

                                   <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                             <div className='fs-6 fw-bold'>
                                                  Echo Files
                                             </div>
                                             {roles.coordinator &&
                                                  <>
                                                       {!preoperative.is_submitted &&
                                                            <Link href={route('crf.preoperative.fileupload.index', { crf: crf, preoperative: preoperative })} type="submit" className='btn btn-primary btn-sm' method="get" as="button" >Upload Files</Link>

                                                       }
                                                  </>
                                             }


                                        </div>
                                        <hr />

                                        <FileList files={preopfileswext}
                                             crf={crf}
                                             entity={preoperative}
                                             entityRouteKey='preoperative'
                                             role={roles}
                                        />





                                   </Card.Body>
                              </Card>

                         </> :
                         <>
                              {(preoperative.is_submitted && preoperative.visit_status) ? <>
                                   <EchocardiographyData
                                        echocardiographies={echocardiographies}
                                        enableActions={preoperative.is_submitted}
                                        echodicomfiles={echodicomfiles}
                                        role={roles}
                                        crf={crf}
                                        createUrl={route('crf.preoperative.echocardiography.create', { crf: crf, preoperative: preoperative })}
                                        editUrl={echocardiographies !== null && route('crf.preoperative.echocardiography.edit', { crf: crf, preoperative: preoperative, echocardiography: echocardiographies })}
                                   />
                              </> : <>
                                   <Card className="mb-3 rounded-5 shadow-sm">
                                        <Card.Body>
                                             Forms is yet to be submitted and approved.
                                        </Card.Body>
                                   </Card>
                              </>}


                              <Card className="mb-3  shadow-sm">

                                   <Card.Body>
                                        <div className='d-flex justify-content-between align-items-center'>
                                             <div className='fs-6 fw-bold'>
                                                  Echo Files
                                             </div>
                                             {roles.coordinator &&
                                                  <>
                                                       {!preoperative.is_submitted &&
                                                            <Link href={route('crf.preoperative.fileupload.index', { crf: crf, preoperative: preoperative })} type="submit" className='btn btn-primary btn-sm' method="get" as="button" >Upload Files</Link>

                                                       }
                                                  </>
                                             }


                                        </div>

                                        <hr />

                                        <FileList files={preopfileswext}
                                             crf={crf}
                                             entity={preoperative}
                                             entityRouteKey='preoperative'
                                             role={roles}
                                        />

                                   </Card.Body>
                              </Card>
                         </>
                    }















               </Operative>
          </CrfLayout>

     )
}

