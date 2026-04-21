import React from 'react';
 
import {   Link, usePage,  } from '@inertiajs/react';
 
 
import CaseReportFormData from './FormData/CaseReportFormData';
import ActivityComments from '@/Components/ActivityComments';
import CrfLayout from '@/Layouts/CrfLayout';
import Authenticated from '@/Layouts/Authenticated';
import ScreenTitle from '@/Components/ScreenTitle';


const ActivityColumn = ({ title, items }) => {

     if(!items) 
          return null;

     if(items && items<1) 
          return null;
      
     return (
          <div md={3} lg={3} className='mb-3'>

               <ActivityComments
                    title={title}
                    items={items}
               />


          </div>
     )
}

export default function Show() {


     const { crf, backUrl, preoperativeUrl, preopremarks, postopremarks, svremarks, usvremarks, intraopremarks } = usePage().props;





     return (
          
         
            
          <CrfLayout
               crf={crf}
            
               breadcrumb={<>
                    <li className='breadcrumb-item'>
                         <Link href={route('crf.index')} className="breadcrumb-item"> Case Report Form</Link>
                    </li>
                    <li className='breadcrumb-item'>
                         <span className='active'>Subject : {crf.subject_id}</span>

                    </li>
               </>
               }

               backUrl = {backUrl}
                
          >




            

            

               <div className='align-items-stretch'>

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


               </div>




          </CrfLayout>
         
     )
}
