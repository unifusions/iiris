import FileDeleteConfirmDialog from "@/Components/FileDeleteConfirmDialog";
import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import PageTitle from "@/Pages/Shared/PageTitle";
import { TrashIcon } from "@heroicons/react/solid";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";
import React, { useState } from "react";
import { Alert, Button, Card, Col, Modal, Row } from "react-bootstrap";
import CaseReportFormData from "../FormData/CaseReportFormData";
import EchocardiographyData from "../FormData/EchocardiographyData";
import ElectrocardiogramData from "../FormData/ElectrocardiogramData";
import { RenderFormStatus } from "../FormData/FormDataHelper";
import LabInvestigationData from "../FormData/LabInvestigationData";
import MedicationsData from "../FormData/MedicationsData";
import PersonalHistoryData from "../FormData/PersonalHistoryData";
import PhysicalActivityData from "../FormData/PhysicalActivityData";
import PhysicalExaminationData from "../FormData/PhysicalExaminationData";
import SafetyParameterData from "../FormData/SafetyParameterData";
import SymptomsData from "../FormData/SymptomsData";
import ApprovalActionEditable from "./ApprovalActionsEditable";

function ApprovalActionsApprove({ role, crf, unscheduledvisit }) {

     const { data, put, setData, processing } = useForm({
          approve: '1',
          remarks: '',
          action: 'Approved'
     });
     const [show, setShow] = useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.unscheduledvisit.update', { crf: crf, unscheduledvisit: unscheduledvisit }));
     }
     return (
          <>
               {role.investigator &&
                    <>{unscheduledvisit.visit_status !== null &&
                         <>
                              {unscheduledvisit.visit_status ? '' :
                                   <Button variant="success" onClick={handleShow}> Approve </Button>

                              }

                              <Modal show={show} onHide={handleClose}>
                                   <form onSubmit={handlesubmit}>
                                        <Modal.Header closeButton>
                                             <Modal.Title>Remarks/Reason</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                                        <Modal.Footer>
                                             <FormButton processing={processing} labelText='Approve' type="submit" mode="success" />

                                        </Modal.Footer>
                                   </form>
                              </Modal>
                         </>
                    }</>
               }  </>


     )
}

function ApprovalActionsDisapprove({ role, crf, unscheduledvisit }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          disapprove: '1',
          remarks: '',
          action: 'Disapproved'
     });
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.unscheduledvisit.update', { crf: crf, unscheduledvisit: unscheduledvisit }));
     }
     return (
          <>{role.investigator &&
               <>{unscheduledvisit.visit_status !== null &&
                    <>
                         {unscheduledvisit.visit_status ? '' :
                              <Button variant="danger" onClick={handleShow} className='me-2'> Disapprove </Button>
                         }

                         <Modal show={show} onHide={handleClose}>
                              <form onSubmit={handlesubmit}>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Remarks/Reason</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                                   <Modal.Footer>
                                        <FormButton processing={processing} labelText='Disapprove' type="submit" mode="danger" />

                                   </Modal.Footer>
                              </form>
                         </Modal>
                    </>
               }</>
          }  </>


     )
}

function ApprovalSubmit({ role, crf, unscheduledvisit }) {

     const { data, setData, errors, put, processing, hasErrors } = useForm({
          is_submitted: '1',
          remarks: '',
          action: 'Submitted'
     });
     const [show, setShow] = useState(false);
     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);

     function handlesubmit(e) {
          e.preventDefault();
          put(route('crf.unscheduledvisit.update', { crf: crf, unscheduledvisit: unscheduledvisit }));
     }
     return (
          <>{role.coordinator &&
               <>{unscheduledvisit.is_submitted !== null &&
                    <>
                         {unscheduledvisit.is_submitted ? '' :
                              <form onSubmit={handlesubmit} >
                                   <Button variant="primary" onClick={handleShow}> Submit </Button>
                              </form>
                         }

                         <Modal show={show} onHide={handleClose}>
                              <form onSubmit={handlesubmit}>
                                   <Modal.Header closeButton>
                                        <Modal.Title>Remarks/Reason</Modal.Title>
                                   </Modal.Header>
                                   <Modal.Body>    <textarea onChange={(e) => setData('remarks', e.target.value)} className="form-control" rows="5"></textarea></Modal.Body>
                                   <Modal.Footer>
                                        <FormButton processing={processing} labelText='Submit for Approval' type="submit" mode="primary" />

                                   </Modal.Footer>
                              </form>
                         </Modal>
                    </>
               }</>
          }  </>


     )
}



export default function Show() {
     const { auth, facility, roles, crf, backUrl, unscheduledvisit,
          physicalexamination,
          symptoms,
          personalhistories,
          physicalactivities,
          labinvestigations,
          electrocardiograms,
          echocardiographies, usvdicomfileswext,
          safetyparameters, echodicomfiles, usvdicomfiles, approvalremarks,
          medications, } = usePage().props;
     const iconStyle = { width: 18, height: 18 };
     return (
          <Authenticated auth={auth} role={roles}>

               <Row className='align-items-stretch'>
                    <Col md={9} lg={10} className="mail-view d-none d-md-block">
                         <div className='d-flex justify-content-between align-items-center mb-3'>

                              <h2 className="font-semibold text-xl text-gray-800 leading-tight">Unscheduled Visit No: {unscheduledvisit.visit_no}</h2>
                              <div className='d-flex'>
                                   <Link href={backUrl} className="btn btn-secondary me-2" method="get" type="button" as="button">Back</Link>

                                   <ApprovalSubmit role={roles} crf={crf} unscheduledvisit={unscheduledvisit} />




                                   {unscheduledvisit.is_submitted ? <>
                                        <ApprovalActionsDisapprove role={roles} crf={crf} unscheduledvisit={unscheduledvisit} />
                                        <ApprovalActionsApprove role={roles} crf={crf} unscheduledvisit={unscheduledvisit} />
                                   </> : ''
                                   }

                                   <ApprovalActionEditable role={roles} crf={crf} unscheduledvisit={unscheduledvisit} />
                              </div>

                         </div>

                         {/* <PageTitle backUrl={backUrl} pageTitle={`Unscheduled Visit No: ${unscheduledvisit.visit_no}`} role={roles} /> */}

                         <RenderFormStatus
                              isSubmitted={unscheduledvisit.is_submitted}
                              visitStatus={unscheduledvisit.visit_status}
                              visitNo={unscheduledvisit.visit_no}
                              formTitle="Unscheduled Visit" />


                         <CaseReportFormData crf={crf} />
                         {!roles.reviewer ? <>
                              <PhysicalExaminationData
                                   physicalexamination={physicalexamination}
                                   enableActions={unscheduledvisit.is_submitted}
                                   role={roles}
                                   showHWB={true}
                                   createUrl={route('crf.unscheduledvisit.physicalexamination.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={physicalexamination !== null && route('crf.unscheduledvisit.physicalexamination.edit', { crf: crf, unscheduledvisit: unscheduledvisit, physicalexamination: physicalexamination })}
                              />


                              <SymptomsData
                                   symptoms={symptoms}
                                   enableActions={unscheduledvisit.is_submitted}
                                   role={roles}
                                   title="Post Operative"
                                   createUrl={route('crf.unscheduledvisit.symptoms.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={symptoms !== null && route('crf.unscheduledvisit.symptoms.edit', { crf: crf, unscheduledvisit: unscheduledvisit, symptom: symptoms })}
                              />

                              <PersonalHistoryData
                                   personalhistories={personalhistories}
                                   enableActions={unscheduledvisit.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.unscheduledvisit.personalhistory.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={personalhistories !== null && route('crf.unscheduledvisit.personalhistory.edit', { crf: crf, unscheduledvisit: unscheduledvisit, personalhistory: personalhistories })}
                              />

                              <PhysicalActivityData
                                   isPhyAct={unscheduledvisit.physical_activity}
                                   enableActions={unscheduledvisit.is_submitted}
                                   physicalactivites={physicalactivities}
                                   role={roles}
                                   linkUrl={route('crf.unscheduledvisit.physicalactivity.index', { crf: crf, unscheduledvisit: unscheduledvisit })}
                              />



                              <LabInvestigationData
                                   labinvestigations={labinvestigations}
                                   enableActions={unscheduledvisit.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.unscheduledvisit.labinvestigation.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={labinvestigations !== null && route('crf.unscheduledvisit.labinvestigation.edit', { crf: crf, unscheduledvisit: unscheduledvisit, labinvestigation: labinvestigations })}
                              />

                              <ElectrocardiogramData
                                   electrocardiograms={electrocardiograms}
                                   enableActions={unscheduledvisit.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.unscheduledvisit.electrocardiogram.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={electrocardiograms !== null && route('crf.unscheduledvisit.electrocardiogram.edit', { crf: crf, unscheduledvisit: unscheduledvisit, electrocardiogram: electrocardiograms })}
                              />



                              <EchocardiographyData
                                   echocardiographies={echocardiographies}
                                   enableActions={unscheduledvisit.is_submitted}
                                   echodicomfiles={echodicomfiles}
                                   role={roles}
                                   createUrl={route('crf.unscheduledvisit.echocardiography.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={echocardiographies !== null && route('crf.unscheduledvisit.echocardiography.edit', { crf: crf, unscheduledvisit: unscheduledvisit, echocardiography: echocardiographies })}
                              />

                              <SafetyParameterData
                                   safetyparameters={safetyparameters}
                                   enableActions={unscheduledvisit.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.unscheduledvisit.safetyparameter.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={safetyparameters !== null && route('crf.unscheduledvisit.safetyparameter.edit', { crf: crf, unscheduledvisit: unscheduledvisit, safetyparameter: safetyparameters })} />
                              <MedicationsData
                                   hasMedication={unscheduledvisit.hasMedications}
                                   enableActions={unscheduledvisit.is_submitted}
                                   medications={medications}
                                   role={roles}
                                   linkUrl={route('crf.unscheduledvisit.medication.index', { crf: crf, unscheduledvisit: unscheduledvisit })}
                              />


                         </> : <>
                              <EchocardiographyData
                                   echocardiographies={echocardiographies}
                                   enableActions={unscheduledvisit.is_submitted}
                                   echodicomfiles={echodicomfiles}
                                   role={roles}
                                   createUrl={route('crf.unscheduledvisit.echocardiography.create', { crf: crf, unscheduledvisit: unscheduledvisit })}
                                   editUrl={echocardiographies !== null && route('crf.unscheduledvisit.echocardiography.edit', { crf: crf, unscheduledvisit: unscheduledvisit, echocardiography: echocardiographies })}
                              /></>}




                         <Card className="mb-3 rounded-5 shadow-sm">
                              <Card.Body>
                                   <div className='d-flex justify-content-between align-items-center'>
                                        <div className='fs-6 fw-bold'>
                                             Echo Files
                                        </div>
                                        {roles.coordinator &&
                                             <>
                                                  {!unscheduledvisit.is_submitted &&
                                                       <Link href={route('crf.unscheduledvisit.fileupload.index', { crf: crf, unscheduledvisit: unscheduledvisit })} type="submit" className='btn btn-primary btn-sm' method="get" as="button" >Upload Files</Link>

                                                  }
                                             </>
                                        }


                                   </div>

                                   <hr />
                                   {usvdicomfileswext !== undefined &&
                                        <div className='container'>

                                             <div className="row ">
                                                  {usvdicomfileswext.map((file) =>
                                                       <div key={file.file.id} className="col-md-6 mb-3">
                                                            <div className="d-flex justify-content-between">
                                                                 <div> {file.file.file_name} </div>
                                                                 <div>

                                                                      {(file.extension === 'jpg' || file.extension === '512' || file.extension === '') &&
                                                                           <>

                                                                                <a
                                                                                     className='btn btn-outline-info btn-sm me-2'
                                                                                     href={route('crf.unscheduledvisit.fileupload.show', { crf: crf, unscheduledvisit: unscheduledvisit, fileupload: file.file })}
                                                                                     target="_blank" rel="noopener noreferrer">View</a></>}

                                                                      <a
                                                                           className='btn btn-outline-success btn-sm'
                                                                           href={route('usvfiledownload', { crf: crf, unscheduledvisit: unscheduledvisit, fileupload: file.file })}>Download</a>

                                                                      {roles.admin &&

                                                                           <FileDeleteConfirmDialog
                                                                                url='crf.unscheduledvisit.fileupload.destroy'
                                                                                options={{ crf: crf, unscheduledvisit: unscheduledvisit, fileupload: file.file }} />


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
          </Authenticated>
     )
}