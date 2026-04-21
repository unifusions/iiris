import React from "react";
 
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderDuration, RenderFieldBoolDatas, RenderSymptomDatas } from "./FormDataHelper";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { Siren } from "lucide-react";
import SectionNoData from "@/Components/ui-ext/SectionNoData";



export default function SymptomsData({id,  symptoms, role, createUrl, editUrl, enableActions, title }) {


     return (

          <Card id={id}  >
              
                         <SectionTitle title={`${title} Symptoms`} enableActions={enableActions} coordinator={role.coordinator}
                              createUrl={createUrl}
                              editUrl={editUrl}
                              data={symptoms}
                              icon={Siren}
                         />
             
                     
               <CardContent> 
                     
                    {symptoms !== null ?
                         <>
                              {symptoms.symptoms ? <>
                                   <RenderFieldDatas labelText="Symptoms" value={symptoms.symptoms && 'Yes'} />

<div className="ms-3 ps-3 border-s border-gray-200">
<RenderSymptomDatas labelText="Angina on Exertion" boolValue={symptoms.angina} symptomClass={symptoms.angina_class} duration={symptoms.angina_duration}
                                 
                                   />

                                   <RenderSymptomDatas labelText="Dyspnea on Exertion" boolValue={symptoms.dyspnea} symptomClass={symptoms.dyspnea_class} duration={symptoms.dyspnea_duration} />

                                   <RenderSymptomDatas labelText="Syncope" boolValue={symptoms.syncope}  duration={symptoms.syncope_duration} />
                                   <RenderSymptomDatas labelText="Palpitation" boolValue={symptoms.palpitation}  duration={symptoms.palpitation_duration} />
                                   <RenderSymptomDatas labelText="Giddiness" boolValue={symptoms.giddiness}  duration={symptoms.giddiness_duration} />
                                   <RenderSymptomDatas labelText="Fever" boolValue={symptoms.fever}  duration={symptoms.fever_duration} />
                                   <RenderSymptomDatas labelText="Heart Failure Admission" boolValue={symptoms.heart_failure_admission}  duration={symptoms.heart_failure_admission_duration} />
                                   <RenderSymptomDatas labelText="Others" boolValue={symptoms.others} symptomClass = {symptoms.others_text} duration={symptoms.others_duration} />
</div>
                                   


                             


                              </> :

                                   'No symptoms found'}





                         </> : <SectionNoData title={`${title} Symptoms`} />

                    }

               </CardContent>
          </Card>
     )
}
