import React from 'react';

import { usePage } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import { LinkIcon, TrashIcon } from '@heroicons/react/outline';
import { Row, Col, Card, Container, Alert } from 'react-bootstrap';
import CaseReportFormData from '../FormData/CaseReportFormData';
import PhysicalExaminationData from '../FormData/PhysicalExaminationData';
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

export default class Index extends React.Component {

     constructor(props) {
          super(props)

     }

     render() {
          const { auth, roles, crf, postoperative,
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
               postopfileswext
          } = this.props;
          const iconStyle = { width: 18, height: 18 };
          return (
               <Authenticated auth={auth} role={roles}>

                    <div className='wrapper'>





                         <Row className='align-items-stretch'>



                              <Col md={9} lg={10} className="mail-view d-none d-md-block">
                                   <div className='d-flex justify-content-between align-items-center mb-3'>
                                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms \ {crf.subject_id} \ Postoperative</h2>
                                        <div className='d-flex'>
                                             <Link href={route('crf.show', { crf: crf })} className="btn btn-secondary me-2" type="button" as="button" >Back</Link>
                                             <ApprovalSubmit role={roles} crf={crf} postoperative={postoperative} />
                                             {postoperative.is_submitted ? <>
                                                  <ApprovalActionsDisapprove role={roles} crf={crf} postoperative={postoperative} />
                                                  <ApprovalActionsApprove role={roles} crf={crf} postoperative={postoperative} />
                                             </> : ''
                                             }
    <ApprovalActionEditable role={roles} crf={crf} postoperative={postoperative} />
                                        </div>


                                   </div>
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
                                             createUrl={route('crf.postoperative.physicalexamination.create', { crf: crf, postoperative: postoperative })}
                                             editUrl={physicalexamination !== null && route('crf.postoperative.physicalexamination.edit', { crf: crf, postoperative: postoperative, physicalexamination: physicalexamination })}
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
                                                  <Card.Body>
                                                       Forms is yet to be submitted and approved.
                                                  </Card.Body>
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
                                             {postopfileswext !== undefined &&
                                                  <div className='container'>

                                                       <div className="row ">
                                                            {postopfileswext.map((file) =>
                                                                 <div key={file.file.id} className="col-md-6 mb-3">
                                                                      <div className="d-flex justify-content-between">
                                                                           <div> {file.file.file_name} </div>
                                                                           <div>

                                                                                {(file.extension === 'jpg' || file.extension === '512' || file.extension === '') &&
                                                                                     <>

                                                                                          <a
                                                                                               className='btn btn-outline-info btn-sm me-2'
                                                                                               href={route('crf.postoperative.fileupload.show', { crf: crf, postoperative: postoperative, fileupload: file.file })}
                                                                                               target="_blank" rel="noopener noreferrer">View</a></>}

                                                                                <a
                                                                                     className='btn btn-outline-success btn-sm'
                                                                                     href={route('postoperativefiledownload', { crf: crf, postoperative: postoperative, fileupload: file.file })}>Download</a>

                                                                                {roles.admin &&

                                                                                     <FileDeleteConfirmDialog
                                                                                          url='crf.postoperative.fileupload.destroy'
                                                                                          options={{ crf: crf, postoperative: postoperative, fileupload: file.file }}
                                                                                     />


                                                                                }

                                                                           </div>
                                                                      </div>




                                                                 </div>
                                                            )}
                                                       </div>
                                                  </div>
                                             }
                                        </Card.Body>
                                   </Card>


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


               </Authenticated>
          )
     }
}

