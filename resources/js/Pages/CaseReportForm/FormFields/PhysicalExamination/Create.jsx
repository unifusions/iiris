
import React, { useEffect } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";

import { Head, Link, usePage, useForm, } from "@inertiajs/react";
import FormInput from "@/Pages/Shared/FormInput";
import FormInputWithLabel from "@/Pages/Shared/FormInputWithLabel";
import FormButton from "@/Pages/Shared/FormButton";
import Authenticated from '@/Layouts/Authenticated';
import PageTitle from "@/Pages/Shared/PageTitle";
import CrfLayout from "@/Layouts/CrfLayout";
import { toTitleCase } from "../HelperFunctions";
import { ENTITY_ID_FIELD_MAP } from "../Helper";


const Create = () => {
     const {
          entity,
          entityType,
           crf } = usePage().props;

     const entityIdField = ENTITY_ID_FIELD_MAP[entityType];


     const { data, setData, errors, post, processing, hasErrors, transform } = useForm({
          case_report_form_id: crf.id,
          [entityIdField]: entity?.id ?? null,
        
          height: '',
          weight: '',
          bsa: '',
          heart_rate: '',
          systolic_bp: '',
          diastolic_bp: '',
     });



     const routeParams = {
          crf,
          [entityType]: entity
     };
     function handlesubmit(e) {

          e.preventDefault();
          post(route(`crf.${entityType}.physicalexamination.store`, routeParams));
         
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


          >




               <Card className='card shadow-sm rounded-5'>
                    <Card.Body>
                         <form onSubmit={handlesubmit} >

                              {entityType !== 'postoperative' && <>
                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.height && 'is-invalid '}`}
                                        error={errors.height} labelText="Height"
                                        // handleChange={e => setData('height', e.target.value.toString().split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))}
                                        // handleChange={e => setData('height', e.target.value.toString().slice(0, 6).split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join(".")) }
                                        handleChange={e =>
                                             // alert(e.target.value)
                                             setData('height', e.target.value)
                                        }
                                        units='cms'
                                        value={data.height}
                                        onBlur={e => setData('height', Number.parseFloat(data.height).toFixed(2))}

                                        // onBlur={updateBsa}
                                        required />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.weight && 'is-invalid '}`}
                                        error={errors.weight} labelText="Weight"
                                        handleChange={e =>
                                             setData('weight', e.target.value)
                                             // setData('weight', e.target.value.toString().split(".").map((el, i) => i ? el.split("").slice(0, 2).join("") : el).join("."))
                                        }
                                        // onBlur={updateBsa}
                                        onBlur={e => setData('weight', Number.parseFloat(data.weight).toFixed(2))}
                                        value={data.weight}
                                        units='kgs'
                                        required />

                                   <FormInputWithLabel
                                        type="number"
                                        className={`${errors.bsa && 'is-invalid '}`}
                                        error={errors.bsa} labelText="BSA"
                                        value={data.bsa}
                                        units='m<sup>2</sup>'
                                        remarks='BSA will be calculated automatically from the given height & weight'
                                        disabled
                                   />
                              </>}



                              <FormInputWithLabel
                                   type="number"
                                   className={`${errors.bpm && 'is-invalid '}`}
                                   error={errors.bpm} labelText="Heart Rate"
                                   handleChange={e => setData('heart_rate', e.target.value)}
                                   units='bpm'
                                   required


                              />

                              <FormInputWithLabel
                                   type="number"
                                   className={`${errors.systolic_bp && 'is-invalid '}`}
                                   error={errors.systolic_bp} labelText="Systolic BP"
                                   handleChange={e => setData('systolic_bp', e.target.value)}
                                   units='mmHg'

                                   required
                              />

                              <FormInputWithLabel
                                   type="number"
                                   className={`${errors.diastolic_bp && 'is-invalid '}`}
                                   error={errors.diastolic_bp} labelText="Diastolic BP"
                                   handleChange={e => setData('diastolic_bp', e.target.value)}

                                   required
                                   units='mmHg' />

                              <hr />

                              <FormButton processing={processing} labelText='Create' type="submit" mode="primary" />

                         </form>
                    </Card.Body>
               </Card>

          </CrfLayout>
     )
}

export default Create;