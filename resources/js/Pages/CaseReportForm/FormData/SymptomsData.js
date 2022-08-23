import React from "react";
import { Card } from "react-bootstrap";
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderDuration, RenderFieldBoolDatas, RenderSymptomDatas } from "./FormDataHelper";



export default function SymptomsData({ symptoms, role, createUrl, editUrl, enableActions, title }) {


     return (

          <Card className="mb-3 shadow-sm rounded-5">
               <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                         <div className='fs-6 fw-bold'>
                              {title} Symptoms
                         </div>
                         {!enableActions &&
                              <>
                                   {role.coordinator &&
                                        <>
                                             {symptoms === null ?
                                                  <RenderCreateButton createUrl={createUrl} className="btn-sm" /> :
                                                  <RenderEditButton editUrl={editUrl} className="btn-sm" />
                                             }
                                        </>
                                   }
                              </>
                         }


                    </div><hr />
                    {symptoms !== null ?
                         <>
                              {symptoms.symptoms ? <>
                                   <RenderFieldDatas labelText="Symptoms" value={symptoms.symptoms && 'Yes'} />

                                   <RenderSymptomDatas labelText="Angina on Exertion" boolValue={symptoms.angina} symptomClass={symptoms.angina_class} duration={symptoms.angina_duration}
                                 
                                   />

                                   <RenderSymptomDatas labelText="Dyspnea on Exertion" boolValue={symptoms.dyspnea} symptomClass={symptoms.dyspnea_class} duration={symptoms.dyspnea_duration} />

                                   <RenderSymptomDatas labelText="Syncope" boolValue={symptoms.syncope}  duration={symptoms.syncope_duration} />
                                   <RenderSymptomDatas labelText="Palpitation" boolValue={symptoms.palpitation}  duration={symptoms.palpitation_duration} />
                                   <RenderSymptomDatas labelText="Giddiness" boolValue={symptoms.giddiness}  duration={symptoms.giddiness_duration} />
                                   <RenderSymptomDatas labelText="Fever" boolValue={symptoms.fever}  duration={symptoms.fever_duration} />
                                   <RenderSymptomDatas labelText="Heart Failure Admission" boolValue={symptoms.heart_failure_admission}  duration={symptoms.heart_failure_admission_duration} />
                                   <RenderSymptomDatas labelText="Others" boolValue={symptoms.others} symptomClass = {symptoms.others_text} duration={symptoms.others_duration} />


                             


                              </> :

                                   'No symptoms found'}





                         </> : <span className="fw-normal text-secondary fst-italic">No symptoms has been recorded. Go ahead and create one.</span>

                    }

               </Card.Body>
          </Card>
     )
}
