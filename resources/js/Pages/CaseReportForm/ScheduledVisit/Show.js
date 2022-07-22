import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { usePage } from "@inertiajs/inertia-react";

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CaseReportFormData from "../FormData/CaseReportFormData";
import EchocardiographyData from "../FormData/EchocardiographyData";
import ElectrocardiogramData from "../FormData/ElectrocardiogramData";
import LabInvestigationData from "../FormData/LabInvestigationData";
import MedicationsData from "../FormData/MedicationsData";
import PersonalHistoryData from "../FormData/PersonalHistoryData";
import PhysicalActivityData from "../FormData/PhysicalActivityData";
import PhysicalExaminationData from "../FormData/PhysicalExaminationData";
import SafetyParameterData from "../FormData/SafetyParameterData";
import SymptomsData from "../FormData/SymptomsData";

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
          
     } = usePage().props;

     return (
          <Authenticated auth={auth} role={roles}>
               <Container>
                    <PageTitle backUrl={backUrl} pageTitle={`Scheduled Visit No: ${scheduledvisit.visit_no}`} role={roles} />
                    <CaseReportFormData crf={crf} />

                    <Row className='align-items-stretch'>
                         <Col md={12} lg={12} className="mail-view d-none d-md-block">
                              <PhysicalExaminationData
                                   physicalexamination={physicalexamination}
                                   enableActions={scheduledvisit.is_submitted}
                                   role={roles}
                                   showHWB = {true}
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

                         </Col>
                    </Row>
               </Container>

          </Authenticated>
     )
}