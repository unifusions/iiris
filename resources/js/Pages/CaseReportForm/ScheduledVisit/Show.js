import Authenticated from "@/Layouts/Authenticated";
import FormButton from "@/Pages/Shared/FormButton";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Link, useForm, usePage } from "@inertiajs/inertia-react";

import React, { useState } from "react";
import { Container, Col, Row, Card, Button, Modal } from "react-bootstrap";
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


function DateofInvestigation({ crf, scheduledvisit }) {
     const { data, put, setData, errors, processing } = useForm({
          pod: ''
     });

     function handlesubmit(e) {
          e.preventDefault();
          return put(route('crf.scheduledvisit.update', { crf: crf, scheduledvisit: scheduledvisit }));
     }
     return (
          <>
               <Card className='card shadow-sm rounded-5'>
                    <Card.Body>
                         <form onSubmit={handlesubmit} >
                              <FormCalendar
                                   labelText='Date of Visit'
                                   value={data.pod}
                                   handleChange={(date) => setData('pod', new Date(date))}
                                   className={`${errors.pod ? 'is-invalid' : ''}`}
                              />
                              <hr />
                              <FormButton processing={processing} labelText='Next' type="submit" mode="primary" />

                         </form>
                    </Card.Body>
               </Card>
          </>
     )
}

function ApprovalActionsApprove({ role, crf, scheduledvisit }) {

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
          put(route('crf.scheduledvisit.update', { crf: crf, scheduledvisit: scheduledvisit }));
     }
     return (
          <>{role.investigator &&
               <>{scheduledvisit.visit_status !== null &&
                    <>
                         {scheduledvisit.visit_status ? '' :
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

function ApprovalActionsDisapprove({ role, crf, scheduledvisit }) {

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
          put(route('crf.scheduledvisit.update', { crf: crf, scheduledvisit: scheduledvisit }));
     }
     return (
          <>{role.investigator &&
               <>{scheduledvisit.visit_status !== null &&
                    <>
                         {scheduledvisit.visit_status ? '' :
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

function ApprovalSubmit({ role, crf, scheduledvisit }) {

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
          put(route('crf.scheduledvisit.update', { crf: crf, scheduledvisit: scheduledvisit }));
     }
     return (
          <>{role.coordinator &&
               <>{scheduledvisit.is_submitted !== null &&
                    <>
                         {scheduledvisit.is_submitted ? '' :
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
     const { auth, facility, roles, crf, backUrl, scheduledvisit,

          physicalexamination,
          symptoms,
          personalhistories,
          physicalactivities,
          labinvestigations,
          electrocardiograms,
          echocardiographies,
          safetyparameters,
          medications,
          echodicomfiles,
          svdicomfiles
     } = usePage().props;

     return (
          <Authenticated auth={auth} role={roles}>
               <Container>
                    <div className='d-flex justify-content-between align-items-center mb-3'>

                         <h2 className="font-semibold text-xl text-gray-800 leading-tight">Scheduled Visit No: {scheduledvisit.visit_no}</h2>
                         <div className='d-flex'>
                              <Link
                                   href={backUrl} className="btn btn-secondary me-2" method="get" type="button" as="button">Back</Link>

                              <ApprovalSubmit role={roles} crf={crf} scheduledvisit={scheduledvisit} />




                              {scheduledvisit.is_submitted ? <>
                                   <ApprovalActionsDisapprove role={roles} crf={crf} scheduledvisit={scheduledvisit} />
                                   <ApprovalActionsApprove role={roles} crf={crf} scheduledvisit={scheduledvisit} />
                              </> : ''
                              }


                         </div>

                    </div>
                    <RenderFormStatus
                         isSubmitted={scheduledvisit.is_submitted}
                         visitStatus={scheduledvisit.visit_status}
                         visitNo={scheduledvisit.visit_no}
                         formTitle="Scheduled Visit" />
                    <CaseReportFormData crf={crf} />
                    {scheduledvisit.pod === null ? <>
                         <DateofInvestigation crf={crf} scheduledvisit={scheduledvisit} />
                    </> : <>
                         <Row className='align-items-stretch'>
                              <Col md={12} lg={12} className="mail-view d-none d-md-block">
                                   <Card className="mb-3 shadow-sm rounded-5">
                                        <Card.Body>
                                             Date of Visit : {scheduledvisit.pod}
                                        </Card.Body>
                                   </Card>
                                   <PhysicalExaminationData
                                        physicalexamination={physicalexamination}
                                        enableActions={scheduledvisit.is_submitted}
                                        role={roles}
                                        showHWB={true}
                                        createUrl={route('crf.scheduledvisit.physicalexamination.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                        editUrl={physicalexamination !== null && route('crf.scheduledvisit.physicalexamination.edit', { crf: crf, scheduledvisit: scheduledvisit, physicalexamination: physicalexamination })}
                                   />
                                   <SymptomsData
                                        symptoms={symptoms}
                                        enableActions={scheduledvisit.is_submitted}
                                        role={roles}
                                        title="Post Operative"
                                        createUrl={route('crf.scheduledvisit.symptoms.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                        editUrl={symptoms !== null && route('crf.scheduledvisit.symptoms.edit', { crf: crf, scheduledvisit: scheduledvisit, symptom: symptoms })}
                                   />

                                   <PersonalHistoryData
                                        personalhistories={personalhistories}
                                        enableActions={scheduledvisit.is_submitted}
                                        role={roles}
                                        createUrl={route('crf.scheduledvisit.personalhistory.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                        editUrl={personalhistories !== null && route('crf.scheduledvisit.personalhistory.edit', { crf: crf, scheduledvisit: scheduledvisit, personalhistory: personalhistories })}
                                   />

                                   <PhysicalActivityData
                                        isPhyAct={scheduledvisit.physical_activity}
                                        enableActions={scheduledvisit.is_submitted}
                                        physicalactivites={physicalactivities}
                                        role={roles}
                                        linkUrl={route('crf.scheduledvisit.physicalactivity.index', { crf: crf, scheduledvisit: scheduledvisit })}
                                   />

                                   <LabInvestigationData
                                        labinvestigations={labinvestigations}
                                        enableActions={scheduledvisit.is_submitted}
                                        role={roles}
                                        createUrl={route('crf.scheduledvisit.labinvestigation.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                        editUrl={labinvestigations !== null && route('crf.scheduledvisit.labinvestigation.edit', { crf: crf, scheduledvisit: scheduledvisit, labinvestigation: labinvestigations })}
                                   />

                                   <ElectrocardiogramData
                                        electrocardiograms={electrocardiograms}
                                        enableActions={scheduledvisit.is_submitted}
                                        role={roles}
                                        createUrl={route('crf.scheduledvisit.electrocardiogram.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                        editUrl={electrocardiograms !== null && route('crf.scheduledvisit.electrocardiogram.edit', { crf: crf, scheduledvisit: scheduledvisit, electrocardiogram: electrocardiograms })}
                                   />

                                   <EchocardiographyData
                                        echocardiographies={echocardiographies}
                                        enableActions={scheduledvisit.is_submitted}
                                        echodicomfiles={echodicomfiles}
                                        role={roles}
                                        createUrl={route('crf.scheduledvisit.echocardiography.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                        editUrl={echocardiographies !== null && route('crf.scheduledvisit.echocardiography.edit', { crf: crf, scheduledvisit: scheduledvisit, echocardiography: echocardiographies })}
                                   />


                                   <SafetyParameterData
                                        safetyparameters={safetyparameters}
                                        enableActions={scheduledvisit.is_submitted}
                                        role={roles}
                                        createUrl={route('crf.scheduledvisit.safetyparameter.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                        editUrl={safetyparameters !== null && route('crf.scheduledvisit.safetyparameter.edit', { crf: crf, scheduledvisit: scheduledvisit, safetyparameter: safetyparameters })} />


                                   <MedicationsData
                                        hasMedication={scheduledvisit.hasMedications}
                                        enableActions={scheduledvisit.is_submitted}
                                        medications={medications}
                                        role={roles}
                                        linkUrl={route('crf.scheduledvisit.medication.index', { crf: crf, scheduledvisit: scheduledvisit })}
                                   />

                                   <Card className="mb-3 rounded-5 shadow-sm">
                                        <Card.Body>
                                             <div className='d-flex justify-content-between align-items-center'>
                                                  <div className='fs-6 fw-bold'>
                                                       Related Files
                                                  </div>
                                                  {roles.coordinator &&
                                                       <>
                                                            {!scheduledvisit.is_submitted &&
                                                                 <Link href={route('crf.scheduledvisit.fileupload.index', { crf: crf, scheduledvisit: scheduledvisit })} type="submit" className='btn btn-primary btn-sm' method="get" as="button" >Upload Files</Link>

                                                            }
                                                       </>
                                                  }


                                             </div>

                                             <hr />
                                             {svdicomfiles !== undefined &&
                                                  <div className='container'>
                                                       <div className="row ">
                                                            {svdicomfiles.map((file) =>
                                                                 <div key={file.id} className="col-md-4">
                                                                      <a href={route('crf.scheduledvisit.fileupload.show', { crf: crf, scheduledvisit: scheduledvisit, fileupload: file })} >{file.file_name} </a>
                                                                 </div>)}
                                                       </div>
                                                  </div>
                                             }
                                        </Card.Body>
                                   </Card>

                              </Col>
                         </Row>
                    </>}

               </Container>

          </Authenticated>
     )
}