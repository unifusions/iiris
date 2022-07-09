import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Col, Row } from "react-bootstrap";
import CaseReportFormData from "../FormData/CaseReportFormData";
import PhysicalExaminationData from "../FormData/PhysicalExaminationData";

export default function Show() {
     const { auth, facility, roles, crf, backUrl, createUrl, unscheduledvisits, physicalexamination } = usePage().props;
     return (
          <Authenticated auth={auth} role={roles}>
               <PageTitle backUrl={backUrl} pageTitle='Unscheduled Visits' createUrl={createUrl} role={roles} />
               {unscheduledvisits.length > 0 ? <>
                    {unscheduledvisits.map((visit, index) => <>{visit}</>)}
               </> : <>No unscheduled visits recorded for the subject :  {crf.subject_id}</>}
          </Authenticated>
     )
}