import React, { useState } from 'react';

import {  Link } from '@inertiajs/react';
 

 
 
import CaseReportFormData from '../FormData/CaseReportFormData';
import PhysicalExaminationData from '../physical-examination/PhysicalExaminationData';
import SymptomsData from '../FormData/SymptomsData';
import LabInvestigationData from '../FormData/LabInvestigationData';
import SafetyParameterData from '../FormData/SafetyParameterData';
import ElectrocardiogramData from '../FormData/ElectrocardiogramData';
import EchocardiographyData from '../FormData/EchocardiographyData';
import MedicationsData from '../FormData/MedicationsData';
import ApprovalSubmit from './ApprovalSubmit';
import ApprovalActionsDisapprove from './ApprovalActionsDisapprove';
import ApprovalActionsApprove from './ApprovalActionsApprove';
import { RenderFormStatus } from '../FormData/FormDataHelper';
import FileDeleteConfirmDialog from '@/Components/FileDeleteConfirmDialog';
import ApprovalActionEditable from './ApprovalActionsEditable';
import Operative from '@/Layouts/Operative';
import FileList from '@/Components/FileList';
import CrfLayout from '@/Layouts/CrfLayout';
import { Card } from '@/Components/ui/card';

export default function Index({ auth, roles, crf, postoperative,
     physicalexamination,
     symptoms,
     labinvestigations,
     echocardiographies,
     electrocardiograms,
     safetyparameters,
     medications,
     echodicomfiles,
     postopdicomfiles,
     approvalremarks,
     postopfileswext }) {


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
               backUrl={route('crf.show', { crf: crf })}
               screenTitle="Postperative"
               entity={crf.preoperative}
               entityType="postoperative"
               pageTitle={`Postoperative | ${crf.subject_id}`}>
               <Operative
                    activities={approvalremarks}
               >






                    <RenderFormStatus
                         isSubmitted={postoperative.is_submitted}
                         visitStatus={postoperative.visit_status}
                         visitNo=''
                         formTitle="Postoperative " />
                    <CaseReportFormData crf={crf} />

                    {!roles.reviewer ? <>
                         <PhysicalExaminationData
                              physicalexamination={physicalexamination}
                              enableActions={postoperative.is_submitted}
                              role={roles}
                              showHWB={false}
                              crf={crf}
                              entity={postoperative}
                              entityType="postoperative"

                              isEditing={activeEdit === "physicalexamination"}


                              onEdit={() => handleActiveEdit("physicalexamination")}
                              onCancel={() => setActiveEdit(null)}
                         />
                         <SymptomsData
                              symptoms={symptoms}
                              enableActions={postoperative.is_submitted}
                              role={roles}
                              title="Post Operative"
                              createUrl={route('crf.postoperative.symptoms.create', { crf: crf, postoperative: postoperative })}
                              editUrl={symptoms !== null && route('crf.postoperative.symptoms.edit', { crf: crf, postoperative: postoperative, symptom: symptoms })}
                         />

                         <LabInvestigationData
                              labinvestigations={labinvestigations}
                              enableActions={postoperative.is_submitted}
                              role={roles}
                              createUrl={route('crf.postoperative.labinvestigation.create', { crf: crf, postoperative: postoperative })}
                              editUrl={labinvestigations !== null && route('crf.postoperative.labinvestigation.edit', { crf: crf, postoperative: postoperative, labinvestigation: labinvestigations })}
                         />

                         <ElectrocardiogramData
                              electrocardiograms={electrocardiograms}
                              enableActions={postoperative.is_submitted}
                              role={roles}
                              createUrl={route('crf.postoperative.electrocardiogram.create', { crf: crf, postoperative: postoperative })}
                              editUrl={electrocardiograms !== null && route('crf.postoperative.electrocardiogram.edit', { crf: crf, postoperative: postoperative, electrocardiogram: electrocardiograms })}
                         />


                         <EchocardiographyData
                              echocardiographies={echocardiographies}
                              enableActions={postoperative.is_submitted}
                              echodicomfiles={echodicomfiles}
                              role={roles}
                              createUrl={route('crf.postoperative.echocardiography.create', { crf: crf, postoperative: postoperative })}
                              editUrl={echocardiographies !== null && route('crf.postoperative.echocardiography.edit', { crf: crf, postoperative: postoperative, echocardiography: echocardiographies })}
                         />

                         <SafetyParameterData
                              safetyparameters={safetyparameters}
                              enableActions={postoperative.is_submitted}
                              role={roles}
                              createUrl={route('crf.postoperative.safetyparameter.create', { crf: crf, postoperative: postoperative })}
                              editUrl={safetyparameters !== null && route('crf.postoperative.safetyparameter.edit', { crf: crf, postoperative: postoperative, safetyparameter: safetyparameters })} />


                         <MedicationsData
                              hasMedication={postoperative.hasMedications}
                              enableActions={postoperative.is_submitted}
                              medications={medications !== undefined ? medications : ''}
                              role={roles}
                              linkUrl={route('crf.postoperative.medication.index', { crf: crf, postoperative: postoperative })}
                         />



                    </> : <>

                         {(postoperative.is_submitted && postoperative.visit_status) ? <>
                              <EchocardiographyData
                                   echocardiographies={echocardiographies}
                                   enableActions={postoperative.is_submitted}
                                   echodicomfiles={echodicomfiles}
                                   role={roles}
                                   crf={crf}
                                   createUrl={route('crf.postoperative.echocardiography.create', { crf: crf, postoperative: postoperative })}
                                   editUrl={echocardiographies !== null && route('crf.postoperative.echocardiography.edit', { crf: crf, postoperative: postoperative, echocardiography: echocardiographies })}
                              />
                         </> : <>
                              <Card className="mb-3 rounded-5 shadow-sm">
                                  
                                        Forms is yet to be submitted and approved.
                                   
                              </Card>
                         </>}
                    </>}

                    <Card className="mb-3 rounded-5 shadow-sm">
                         <Card.Body>
                              <div className='d-flex justify-content-between align-items-center'>
                                   <div className='fs-6 fw-bold'>
                                        Echo Files
                                   </div>
                                   {roles.coordinator &&
                                        <>
                                             {!postoperative.is_submitted &&
                                                  <Link href={route('crf.postoperative.fileupload.index', { crf: crf, postoperative: postoperative })} type="submit" className='btn btn-primary btn-sm' method="get" as="button" >Upload Files</Link>

                                             }
                                        </>
                                   }


                              </div>

                              <hr />

                              <FileList files={postopfileswext}
                                   crf={crf}
                                   entity={postoperative}
                                   entityRouteKey='postoperative'
                                   role={roles}
                              />


                         </Card.Body>
                    </Card>







               </Operative>
          </CrfLayout>
     )
}


