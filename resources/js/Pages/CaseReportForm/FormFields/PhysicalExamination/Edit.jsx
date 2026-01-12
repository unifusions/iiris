
import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
 
import PageTitle from "@/Pages/Shared/PageTitle";
import CrfLayout from "@/Layouts/CrfLayout";
import { ENTITY_ID_FIELD_MAP } from "../Helper";
import { toTitleCase } from "../HelperFunctions";



const Edit = () => {
     const {  
          entity, entityType,
           crf,  physicalexamination } = usePage().props;
    
         const entityIdField = ENTITY_ID_FIELD_MAP[entityType];
    
     const { data, setData, errors, put, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,

          [entityIdField]: entity?.id ?? null,
 
          height: physicalexamination.height || '',
          weight: physicalexamination.weight || '',
          bsa: physicalexamination.bsa || '',
          heart_rate: physicalexamination.heart_rate || '',
          systolic_bp: physicalexamination.systolic_bp || '',
          diastolic_bp: physicalexamination.diastolic_bp || '',
          subject: crf.subject_id
     });


     const routeParams = {
          crf,
          [entityType]: entity,
          physicalexamination : physicalexamination
     };

     function handlesubmit(e) {
          e.preventDefault();
          put(route(`crf.${entityType}.physicalexamination.update`,routeParams))
         
         
     }
     useEffect(
          () => {
               let bsa = Math.sqrt((data.height * data.weight) / 3600).toFixed(2)
               setData('bsa', bsa);
          },
          [data.height, data.weight],
     );

     function updateBsa(e) {
          let bsa = Math.sqrt((data.height * data.weight) / 3600).toFixed(2)
          setData('bsa', bsa);
     }

     return (
          <CrfLayout
             crf={crf}
              backUrl={route(`crf.${entityType}.show`, routeParams)}
                           screenTitle={`${toTitleCase(entityType)}  \\ Physical Examination`}
               breadcrumb={<>
                    <li className='breadcrumb-item'>
                         <Link href={route('crf.index')} className="breadcrumb-item"> Case Report Form</Link>
                    </li>
                    <li className='breadcrumb-item'>
                         <span className="Active">Update</span>
                    </li>
               </>
               }
          >

             

                    <Card className='card shadow-sm'>
                         <Card.Body>
                              <form onSubmit={handlesubmit} >
                                   {entityType !== 'postoperative' && <>
                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.height && 'is-invalid '}`}
                                             error={errors.height} labelText="Height"
                                             handleChange={e => setData('height', e.target.value)}
                                             units='cms'

                                             onBlur={e => setData('height', Number.parseFloat(data.height).toFixed(2))}
                                             //  onBlur={updateBsa}
                                             value={data.height}
                                             required />

                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.weight && 'is-invalid '}`}
                                             error={errors.weight} labelText="Weight"
                                             handleChange={e => setData('weight', e.target.value)}
                                             // onBlur={updateBsa}
                                             onBlur={e => setData('weight', Number.parseFloat(data.weight).toFixed(2))}
                                             units='kgs'
                                             value={data.weight}
                                             required />

                                        <FormInputWithLabel
                                             type="number"
                                             className={`${errors.bsa && 'is-invalid '}`}
                                             error={errors.bsa} labelText="BSA"
                                             value={data.bsa}
                                             // handleChange={e => setData('bsa', Math.sqrt((state.height * state.weight) / 3000).toFixed(2))}
                                             units='m<sup>2</sup>'
                                             disabled
                                        />
                                   </>}
                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.heart_rate && 'is-invalid '}`}
                                        error={errors.heart_rate} labelText="Heart Rate"
                                        handleChange={e => setData('heart_rate', e.target.value)}
                                        units='bpm'
                                        required
                                        remarks='BSA will be calculated automatically from the given height & weight'
                                        value={data.heart_rate}

                                   />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.systolic_bp && 'is-invalid '}`}
                                        error={errors.systolic_bp}
                                        labelText="Systolic BP"
                                        handleChange={e => setData('systolic_bp', e.target.value)}
                                        units='mmHg'

                                        value={data.systolic_bp}
                                        required
                                   />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.diastolic_bp && 'is-invalid '}`}
                                        error={errors.diastolic_bp}
                                        labelText="Diastolic BP"
                                        handleChange={e => setData('diastolic_bp', e.target.value)}

                                        required
                                        value={data.diastolic_bp}
                                        units='mmHg' />

                                   <hr />

                                   <FormButton processing={processing} labelText='Update' type="submit" mode="primary" />

                              </form>
                         </Card.Body>
                    </Card>
              
          </CrfLayout>
     )
}

export default Edit;