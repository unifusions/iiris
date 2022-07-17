import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { useForm, usePage } from "@inertiajs/inertia-react";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import CaseReportFormData from "../FormData/CaseReportFormData";
import FormCalendar from "@/Pages/Shared/FormCalendar";
import FormButton from "@/Pages/Shared/FormButton";
import PhysicalExaminationData from "../FormData/PhysicalExaminationData";

export default function Show() {

     const { auth, facility, roles, crf, backUrl, createUrl, usvcount } = usePage().props;
     const { data, setData, processing, post, errors, reset } = useForm({
          case_report_form_id: crf.id,
          pod: '',
          visit_no: usvcount + 1
     })

     function handlesubmit(e) {
          e.preventDefault();

          return post(route('crf.unscheduledvisit.store', { crf: crf }));


     }
     return (
          <Authenticated auth={auth} role={roles}>
               <PageTitle backUrl={backUrl} pageTitle='Unscheduled Visits' role={roles} />
               <CaseReportFormData crf={crf} />
               <Card className='card shadow-sm rounded-5'>
                    <Card.Body>
                         <form onSubmit={handlesubmit} >
                              <FormCalendar
                                   labelText='Date of Investigation'
                                   value={data.pod}
                                   handleChange={(date) => setData('pod', new Date(date))}
                                   className={`${errors.pod ? 'is-invalid' : ''}`}
                              />
                              <hr/>
                              <FormButton processing={processing} labelText='Next' type="submit" mode="primary" />

                         </form>
                    </Card.Body>
               </Card>
          </Authenticated>
     )
}