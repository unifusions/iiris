import React from 'react';


import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage } from '@inertiajs/inertia-react';

import { Row, Col, Card, Container, Alert, Button } from 'react-bootstrap';
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
import { RenderCreateButton, RenderFormStatus } from '../FormData/FormDataHelper';
import FileUpload from './FileUpload';
import { TrashIcon } from "@heroicons/react/solid";
import ConfirmDialog, { ConfirmDialogProvider } from '@/Components/ConfirmDialog';
import useDeleteConfirm from '@/Components/ConfirmDialog';
import { Inertia } from '@inertiajs/inertia';

import FileDeleteConfirmDialog from '@/Components/FileDeleteConfirmDialog';
import ApprovalActionEditable from './ApprovalActionsEditable';
import Diagnosis from './Diagnosis';
import DiagnosisData from '../FormData/DiagnosisData';
import PredefinedMedicalHistoryData from '../FormData/PredefinedMedicalHistoryData';
import PredefinedFamilyHistoryData from '../FormData/PredefinedFamilyHistoryData';




export default class Index extends React.Component {

     constructor(props) {
          super(props)

     }



     render() {
          const { auth, roles, crf, preoperative,
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

          } = this.props;


          const iconStyle = { width: 18, height: 18 };

          return (
               <Authenticated auth={auth} role={roles} errors={errors}>

                    <div className='wrapper'>

                         <Head title="Preoperation Form" />




                         <Row className='align-items-stretch '>

                              <Col md={9} lg={10} className="mail-view d-none d-md-block">
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


                                             <ApprovalActionEditable role={roles} crf={crf} preoperative={preoperative} />



                                        </div>


                                   </div>

                                   <RenderFormStatus
                                        isSubmitted={preoperative.is_submitted}
                                        visitStatus={preoperative.visit_status}
                                        visitNo=''
                                        formTitle="Preoperative " />
                                   <CaseReportFormData crf={crf} />

                                   {!roles.reviewer ?
                                        <>
                                             <DiagnosisData
                                                  diagnosis={diagnosis}
                                                  createUrl={route('crf.preoperative.diagnosis.create', { crf: crf, preoperative: preoperative })}
                                                  enableActions={preoperative.is_submitted}
                                                  role={roles}
                                                  editUrl={diagnosis !== null && route('crf.preoperative.diagnosis.edit', { crf: crf, preoperative: preoperative, diagnosi: diagnosis })}

                                             />
                                             <PhysicalExaminationData
                                                  physicalexamination={physicalexamination}
                                                  role={roles}
                                                  enableActions={preoperative.is_submitted}
                                                  showHWB={true}
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

                                             <PredefinedMedicalHistoryData

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
                                                  surgicalhistories={surgicalhistories}
                                                  enableActions={preoperative.is_submitted}
                                                  hasSurHis={preoperative.surgical_history}
                                                  role={roles}
                                                  linkUrl={route('crf.preoperative.surgicalhistory.index', { crf: crf, preoperative: preoperative })}

                                             />

                                             <PredefinedFamilyHistoryData
                                                  predefinedfamilyhistory ={predefinedfamilyhistory }
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
                                                  echodicomfiles={echodicomfiles}
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


                                             <Card className="mb-3 rounded-5 shadow-sm">

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

                                                       {preopfileswext !== undefined &&

                                                            <div className="row mt-3">
                                                                 {preopfileswext.map((file) =>
                                                                      <div key={file.file.id} className="col-md-6 mb-3">

                                                                           <div className="d-flex justify-content-between">
                                                                                <div> {file.file.file_name} </div>
                                                                                <div>

                                                                                     {(file.extension === 'jpg' || file.extension === '512' || file.extension === '') &&
                                                                                          <>

                                                                                               <a
                                                                                                    className='btn btn-outline-info btn-sm me-2'
                                                                                                    href={route('crf.preoperative.fileupload.show', { crf: crf, preoperative: preoperative, fileupload: file.file })}
                                                                                                    target="_blank" rel="noopener noreferrer" >View</a></>}

                                                                                     <a
                                                                                          className='btn btn-outline-success btn-sm'
                                                                                          href={route('preopertivefiledownload', { crf: crf, preoperative: preoperative, fileupload: file.file })}> Download</a>

                                                                                     {roles.admin &&
                                                                                          <>

                                                                                               <FileDeleteConfirmDialog
                                                                                                    url='crf.preoperative.fileupload.destroy'
                                                                                                    options={{ crf: crf, preoperative: preoperative, fileupload: file.file }}
                                                                                               />


                                                                                          </>

                                                                                     }
                                                                                </div>
                                                                           </div>




                                                                      </div>
                                                                 )}
                                                            </div>

                                                       }



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


                                             <Card className="mb-3 rounded-5 shadow-sm">

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
                                                       {preopfileswext !== undefined &&

                                                            <div className="row mt-3">
                                                                 {preopfileswext.map((file) =>
                                                                      <div key={file.file.id} className="col-md-6 mb-3">

                                                                           <div className="d-flex justify-content-between">
                                                                                <div> {file.file.file_name} </div>
                                                                                <div>

                                                                                     {(file.extension === 'jpg' || file.extension === '512' || file.extension === '') &&
                                                                                          <>

                                                                                               <a
                                                                                                    className='btn btn-outline-info btn-sm me-2'
                                                                                                    href={route('crf.preoperative.fileupload.show', { crf: crf, preoperative: preoperative, fileupload: file.file })}
                                                                                                    target="_blank" rel="noopener noreferrer" >View</a></>}

                                                                                     <a
                                                                                          className='btn btn-outline-success btn-sm'
                                                                                          href={route('preopertivefiledownload', { crf: crf, preoperative: preoperative, fileupload: file.file })}> Download</a>

                                                                                     {roles.admin &&
                                                                                          <>

                                                                                               <FileDeleteConfirmDialog
                                                                                                    url='crf.preoperative.fileupload.destroy'
                                                                                                    options={{ crf: crf, preoperative: preoperative, fileupload: file.file }}
                                                                                               />


                                                                                          </>

                                                                                     }
                                                                                </div>
                                                                           </div>




                                                                      </div>
                                                                 )}
                                                            </div>

                                                       }
                                                  </Card.Body>
                                             </Card>
                                        </>
                                   }








                              </Col>
                              <Col md={3} lg={2}>
                                   <div className='fs-6 fw-bold'>Notifications</div>

                                   <hr />
                                   <ul className='notifications'>


                                        {approvalremarks !== null &&
                                             approvalremarks.map((approvalremark) => <li key={approvalremark.id} className="py-2">
                                                  Form has been <strong>{approvalremark.action}</strong> <br />
                                                  <span className='text-secondary'>{approvalremark.remarks}</span>
                                             </li>)
                                        }
                                   </ul>

                              </Col>
                         </Row>




                    </div>


               </Authenticated >
          )
     }
}

