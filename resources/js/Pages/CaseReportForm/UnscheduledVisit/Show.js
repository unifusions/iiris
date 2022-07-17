import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Col, Row } from "react-bootstrap";
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
     const { auth, facility, roles, crf, backUrl, unscheduledvisit, 
          physicalexamination,
          symptoms,
          personalhistories,
          physicalactivities,
          labinvestigations,
          electrocardiograms,
          echocardiographies,
          safetyparameters,
          medications, } = usePage().props;
     return (
          <Authenticated auth={auth} role={roles}>
               <PageTitle backUrl={backUrl} pageTitle={`Unscheduled Visit No: ${unscheduledvisit.visit_no}`} role={roles} />
               <CaseReportFormData crf={crf} />

               <Row className='align-items-stretch'>
                    <Col md={12} lg={12} className="mail-view d-none d-md-block">
                         <PhysicalExaminationData
                              physicalexamination={physicalexamination}
                              enableActions={unscheduledvisit.is_submitted}
                              role={roles}
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
                              editUrl={electrocardiograms !== null && route('crf.scheduledvisit.electrocardiogram.edit', { crf: crf, unscheduledvisit: scheduledvisit, electrocardiogram: electrocardiograms })}
                         />

                         <EchocardiographyData
                              echocardiographies={echocardiographies}
                              enableActions={unscheduledvisit.is_submitted}
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

                    </Col>
               </Row>
          </Authenticated>
     )
}