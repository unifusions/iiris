import React, { useState } from 'react';



import { Link, usePage } from '@inertiajs/react';

import { Card } from 'react-bootstrap';

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




import PredefinedMedicalHistoryData from '../FormData/PredefinedMedicalHistoryData';
import PredefinedFamilyHistoryData from '../FormData/PredefinedFamilyHistoryData';
import ActivityTimeline from '@/Components/ActivityTimeline';
import Operative from '@/Layouts/Operative';
import FileList from '@/Components/FileList';
import CrfLayout from '@/Layouts/CrfLayout';
import ApprovalSubmit from '../FormFields/ApprovalSubmit';
import EchoAttachments from '@/Components/ui-ext/EchoAttachments';
import DiagnosisData from '../Diagnosis/DiagnosisData';
import PhysicalExaminationData from '../physical-examination/PhysicalExaminationData';
import SymptomData from '../operative-symptoms/symptom-data';
import EditComponent from '@/Components/ui-ext/EditComponent';
import Echocardiography from '../echocardiography/echocardiography';
import Electrocardiogram from '../electrocardiogram/electrocardiogram';
import LabInvestigation from '../lab-investigation/lab-investigation';
import PhysicalActivity from '../physical-activity/physical-activity';
import SurgicalHistory from '../surgical-history/surgical-history';
import FamilyHistory from '../family-history/family-history';
import PersonalHistory from '../personal-history/personal-history';




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

     const [activeEdit, setActiveEdit] = useState(null);
     const [open, setOpen] = useState(false);
     const handleActiveEdit = (editableComponent) => {
          if (activeEdit && activeEdit !== editableComponent)
               setOpen(true)
          else
               setActiveEdit(editableComponent)
     }

     return (

          <CrfLayout
               crf={crf}
               pageTitle={`Case Report Form \\   ${crf.subject_id} \\ Preoperative`}
               backUrl={route('crf.show', { crf: crf })}
               screenTitle="Preoperative"
               entity={crf.preoperative}
               entityType="preoperative"
          >

               <EditComponent open={open} setOpen={setOpen} />
               <h6
                    class="items-center px-3 mb-1 text-xl font-semibold ">
                    <span>CRF Preoperative</span>

               </h6>
               <RenderFormStatus
                    isSubmitted={preoperative.is_submitted}
                    visitStatus={preoperative.visit_status}
                    visitNo=''
                    formTitle="Preoperative" />

               <Operative activities={approvalremarks}>


                    {!roles.reviewer ?
                         <>
                              <DiagnosisData
                                   id="diagnosis"
                                   crf={crf}
                                   diagnosis={diagnosis}
                                   createUrl={route('crf.preoperative.diagnosis.create', { crf: crf, preoperative: preoperative })}
                                   enableActions={preoperative.is_submitted}
                                   editUrl={diagnosis !== null && route('crf.preoperative.diagnosis.edit', { crf: crf, preoperative: preoperative, diagnosi: diagnosis })}

                                   isEditing={activeEdit === "diagnosis"}

                                   onEdit={() => handleActiveEdit("diagnosis")}
                                   onCancel={() => setActiveEdit(null)}
                              />
                              <PhysicalExaminationData
                                   id="physicalexamination"
                                   physicalexamination={physicalexamination}

                                   enableActions={preoperative.is_submitted}
                                   showHWB={true}



                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "physicalexamination"}


                                   onEdit={() => handleActiveEdit("physicalexamination")}
                                   onCancel={() => setActiveEdit(null)}

                              />

                              <SymptomData

                                   symptoms={symptoms}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}
                                   title='Pre Operative'

                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "operativesymptom"}
                                   onEdit={() => handleActiveEdit("operativesymptom")}
                                   onCancel={() => setActiveEdit(null)}

                              />


                              <PredefinedMedicalHistoryData

                                   id="medical-history"
                                   medicalhistory={predefinedmedicalhistory}
                                   enableActions={preoperative.is_submitted}
                                   hasMedHis={predefinedmedicalhistory !== null ? predefinedmedicalhistory.hasMedHis : null}

                                   role={roles}


                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "medicalhistory"}
                                   onEdit={() => handleActiveEdit("medicalhistory")}
                                   onCancel={() => setActiveEdit(null)}

                              />
                              {/* <MedicalHistoryData
                                                  medicalhistories={medicalhistories}
                                                  enableActions={preoperative.is_submitted}
                                                  hasMedHis={preoperative.medical_history}
                                                  role={roles}
                                                  linkUrl={route('crf.preoperative.medicalhistory.index', { crf: crf, preoperative: preoperative })}
                                             /> */}
                              <SurgicalHistory
                                   id="surgical-history"
                                   surgicalhistories={surgicalhistories}
                                   enableActions={preoperative.is_submitted}
                                   hasSurHis={preoperative.surgical_history}
                                   role={roles}


                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "surgicalhistory"}
                                   onEdit={() => handleActiveEdit("surgicalhistory")}
                                   onCancel={() => setActiveEdit(null)}

                              />

                              <FamilyHistory
                                   familyhistory={predefinedfamilyhistory}
                                   enableActions={preoperative.is_submitted}
                                   isFamHis={preoperative.family_history}
                                   role={roles}

                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "familyhistory"}
                                   onEdit={() => handleActiveEdit("familyhistory")}
                                   onCancel={() => setActiveEdit(null)}

                              />


<PersonalHistory 

  id="personalhistory"
                                   personalhistories={personalhistories}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}
                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "personalhistory"}
                                   onEdit={() => handleActiveEdit("personalhistory")}
                                   onCancel={() => setActiveEdit(null)}
/>
                              <PersonalHistoryData
                                   id="personal-history"
                                   personalhistories={personalhistories}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.preoperative.personalhistory.create', { crf: crf, preoperative: preoperative })}
                                   editUrl={personalhistories !== null && route('crf.preoperative.personalhistory.edit', { crf: crf, preoperative: preoperative, personalhistory: personalhistories })}

                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "personalhistory"}
                                   onEdit={() => handleActiveEdit("personalhistory")}
                                   onCancel={() => setActiveEdit(null)}


                              />

                              <PhysicalActivity
                                   id="physical-activity"
                                   isPhyAct={preoperative?.physical_activity}
                                   enableActions={preoperative.is_submitted}
                                   physicalactivites={physicalactivities}
                                   role={roles}


                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "physicalactivity"}
                                   onEdit={() => handleActiveEdit("physicalactivity")}
                                   onCancel={() => setActiveEdit(null)}

                              />

                              <LabInvestigation
                                   id="lab-investigation"
                                   labinvestigations={labinvestigations}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}

                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "labinvestigation"}
                                   onEdit={() => handleActiveEdit("labinvestigation")}
                                   onCancel={() => setActiveEdit(null)}

                              />

                              <Electrocardiogram
                                   id="electrocardiogram"
                                   electrocardiograms={electrocardiograms}
                                   enableActions={preoperative.is_submitted}
                                   role={roles}


                                   crf={crf}
                                   entity={preoperative}
                                   entityType="preoperative"

                                   isEditing={activeEdit === "electrocardiogram"}
                                   onEdit={() => handleActiveEdit("electrocardiogram")}
                                   onCancel={() => setActiveEdit(null)}


                              />
                              <Echocardiography
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


                              <EchoAttachments
                                   coordinator={roles.coordinator}
                                   submitted={preoperative.is_submitted}
                                   files={preopfileswext}
                                   crf={crf}
                                   entity={preoperative}
                                   entityRouteKey='preoperative'
                                   role={roles}
                                   indexUrl={route('crf.preoperative.fileupload.index', { crf: crf, preoperative: preoperative })}
                              />


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


                                   <div className='d-flex justify-content-between align-items-center'>
                                        <div className='fs-6 fw-bold'>
                                             Echo Attachments
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


                              </Card>
                         </>
                    }















               </Operative>
          </CrfLayout>

     )
}

