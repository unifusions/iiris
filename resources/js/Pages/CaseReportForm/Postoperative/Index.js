import React from 'react';

import { usePage } from '@inertiajs/inertia-react';
import Authenticated from '@/Layouts/Authenticated';
import { Link } from '@inertiajs/inertia-react';
import { LinkIcon } from '@heroicons/react/outline';
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
               postopdicomfiles
          } = this.props;
          return (
               <Authenticated auth={auth} role={roles}>

                    <div className='wrapper'>

                         <Container>
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

                                   </div>


                              </div>
                              <RenderFormStatus
                                   isSubmitted={postoperative.is_submitted}
                                   visitStatus={postoperative.visit_status}
                                   visitNo=''
                                   formTitle="Postoperative " />

                              <CaseReportFormData crf={crf} />


                              <Row className='align-items-stretch'>
                                   <Col md={12} lg={12} className="mail-view d-none d-md-block">
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
                                        <Card className="mb-3 rounded-5 shadow-sm">
                                             <Card.Body>
                                                  <div className='d-flex justify-content-between align-items-center'>
                                                       <div className='fs-6 fw-bold'>
                                                            Related Files
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
                                                  {postopdicomfiles !== undefined &&
                                                       <div className='container'>
                                                            <div className="row ">
                                                                 {postopdicomfiles.map((file) =>
                                                                      <div key={file.id} className="col-md-4">
                                                                           <a href={route('crf.postoperative.fileupload.show', { crf: crf, postoperative: postoperative, fileupload: file })} >{file.file_name} </a>
                                                                      </div>)}
                                                            </div>
                                                       </div>
                                                  }
                                             </Card.Body>
                                        </Card>

                                   </Col>
                              </Row>
                         </Container>
                    </div>


               </Authenticated>
          )
     }
}

