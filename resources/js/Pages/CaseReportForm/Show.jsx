import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head, Link, usePage, useForm } from '@inertiajs/react';
import { Card, BreadcrumbItem, Row, Col, Container, Table, Nav, Tab } from 'react-bootstrap';
import { LinkIcon } from '@heroicons/react/24/solid';
import CaseReportFormData from './FormData/CaseReportFormData';
import ActivityComments from '@/Components/ActivityComments';
import CrfLayout from '@/Layouts/CrfLayout';


const ActivityColumn = ({ title, items }) => {

     if(!items) 
          return null;

     if(items && items<1) 
          return null;
      
     return (
          <Col md={3} lg={3} className='mb-3'>

               <ActivityComments
                    title={title}
                    items={items}
               />


          </Col>
     )
}

export default function Show() {


     const { crf, backUrl, preoperativeUrl, preopremarks, postopremarks, svremarks, usvremarks, intraopremarks } = usePage().props;





     return (
          <CrfLayout
               crf={crf}
               pageTitle={`CRF | ${crf.subject_id}`}
               breadcrumb={<>
                    <li className='breadcrumb-item'>
                         <Link href={route('crf.index')} className="breadcrumb-item"> Case Report Form</Link>
                    </li>
                    <li className='breadcrumb-item'>
                         <span className='active'>Subject : {crf.subject_id}</span>

                    </li>
               </>
               }
          >




               <div className='d-flex justify-content-between align-items-center mb-3'>
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Case Report Forms</h2>
                    <Link href={backUrl} className="btn btn-secondary" method="get" type="button" as="button">Back</Link>
               </div>

               <CaseReportFormData crf={crf} />

               <Row className='align-items-stretch'>

                    {preopremarks && <ActivityColumn 
                              title="Preoperative Form Comments"
                              items={preopremarks}
                         />                 }



                    {intraopremarks && <ActivityColumn 
                              title="Intraoperative Form Comments"
                              items={intraopremarks}
                         />}


                    {postopremarks && <ActivityColumn 
                              title="Postoperative Form Comments"
                              items={postopremarks}
                         />}
                    

                   


 


                    {svremarks.map((sv) => <ActivityColumn key={sv.id}
                              title={`Scheduled Visit No. ${sv.visit_no} Comments`}
                              items={sv.remarks}
                         />


                    )}

                    {usvremarks.map((sv) => <ActivityColumn key={sv.id}
                              title={`Unscheduled Visit No. ${sv.visit_no} Comments`}
                              items={sv.remarks}
                         />


                    )}


               </Row>




          </CrfLayout>
     )
}
