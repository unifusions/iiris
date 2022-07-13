import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { usePage } from "@inertiajs/inertia-react";

import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import CaseReportFormData from "../FormData/CaseReportFormData";
import PhysicalExaminationData from "../FormData/PhysicalExaminationData";
import SymptomsData from "../FormData/SymptomsData";

export default function Show() {
     const { auth, facility, roles, crf, backUrl, scheduledvisit, physicalexamination } = usePage().props;
     return (
          <Authenticated auth={auth} role={roles}>
               <Container>
                    <PageTitle backUrl={backUrl} pageTitle={`Scheduled Visit No: ${scheduledvisit.visit_no}`} role={roles} />
                    <CaseReportFormData crf={crf} />

                    <Row className='align-items-stretch'>
                         <Col md={12} lg={12} className="mail-view d-none d-md-block">
                              <PhysicalExaminationData
                                   physicalexamination={physicalexamination}
                                   // enableActions={scheduledvisit.is_submitted}
                                   role={roles}
                                   createUrl={route('crf.scheduledvisit.physicalexamination.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                   editUrl={physicalexamination !== null && route('crf.scheduledvisit.physicalexamination.edit', { crf: crf, scheduledvisit: scheduledvisit, physicalexamination: physicalexamination })}
                              />
                              <SymptomsData
                                   symptoms={symptoms}
                                   // enableActions={scheduledvisit.is_submitted}
                                   role={roles}
                                   title="Post Operative"
                                   createUrl={route('crf.scheduledvisit.symptoms.create', { crf: crf, scheduledvisit: scheduledvisit })}
                                   editUrl={symptoms !== null && route('crf.scheduledvisit.symptoms.edit', { crf: crf, scheduledvisit: scheduledvisit, symptom: symptoms })}
                              />
                         </Col>
                    </Row>
               </Container>

          </Authenticated>
     )
}