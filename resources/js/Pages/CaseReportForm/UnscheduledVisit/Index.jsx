import Authenticated from "@/Layouts/Authenticated";
import PageTitle from "@/Pages/Shared/PageTitle";
import { Link, usePage } from "@inertiajs/react";
import React from "react";
import { Card, Col, Row, Table } from "react-bootstrap";
import CaseReportFormData from "../FormData/CaseReportFormData";
import PhysicalExaminationData from "../physical-examination/PhysicalExaminationData";
import CrfLayout from "@/Layouts/CrfLayout";

export default function Show() {
     const { auth, facility, roles, crf, backUrl, createUrl, unscheduledvisits, physicalexamination } = usePage().props;
     return (


       <CrfLayout 
                                       crf={crf}
                                       pageTitle    ={`Postoperative | ${crf.subject_id}`}>
               <PageTitle backUrl={backUrl} pageTitle='Unscheduled Visits' createUrl={createUrl} role={roles} />

               <Card className="card shadow-sm rounded-5">
                    <Card.Body>
                         {unscheduledvisits.length > 0 ? <>
                              <Table hover responsive size="sm">
                                   <thead>
                                        <tr>
                                             <th>Date of Visit</th>
                                             <th>Visit No</th>
                                             <th>Actions</th>
                                             
                                        </tr>
                                   </thead>
                                   <tbody>

                                        {unscheduledvisits.map((visit, index) => <tr key={index}>
                                             <td> {new Date(visit.pod).toLocaleDateString('en-IN', { day: 'numeric', month: 'numeric', year: 'numeric', })}</td>
                                             <td> {visit.visit_no} </td>
                                             <td>
                                                  <Link href={route('crf.unscheduledvisit.show', { crf: crf, unscheduledvisit : visit })} className='btn btn-primary btn-sm'> View </Link>
                                             </td>
                                        </tr>)}


                                        
                                   </tbody>
                              </Table>

                              <hr />
                              </>
                              : <>No unscheduled visits recorded for the subject :  {crf.subject_id}</>}
                    </Card.Body>


               </Card>

 </CrfLayout>
     )
}