import React from "react";

 
import { usePage } from "@inertiajs/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { Stethoscope } from "lucide-react";
import SectionNoData from "@/Components/ui-ext/SectionNoData";
import PhysicalExaminationForm from "./PhysicalExaminationForm";
import { RenderFieldDatas } from "../FormData/FormDataHelper";



export default function PhysicalExaminationData({ id, physicalexamination,
      enableActions, showHWB, crf,
entity, entityType,  isEditing, onEdit, onCancel

}) {

     const { roles } = usePage().props;

     return (

          <Card id={id}  >

               <SectionTitle title="Physical Examination" enableActions={enableActions} coordinator={roles.coordinator}
                   
                    data={physicalexamination}
                    icon={Stethoscope}

                    isEditing={isEditing}
                    onEdit={onEdit}
               />

               {isEditing ? <PhysicalExaminationForm 
                    crf={crf}    
                    entity={entity}
                    entityType={entityType}
                    onCancel ={onCancel} onEdit= {onEdit}
                    physicalexamination={physicalexamination}
                    editMode = {physicalexamination === null ? 'store' : 'update'}
                    
               />
                    : <CardContent>
                         {physicalexamination !== null ?
                              <div className="space-y-3">
                                   {showHWB && <>  <RenderFieldDatas labelText="Height" value={physicalexamination.height} units='cms' />
                                        <RenderFieldDatas labelText="Weight" value={physicalexamination.weight} units='kgs' />
                                        <RenderFieldDatas labelText="BSA " value={physicalexamination.bsa} units='m<sup>2</sup>  Formula : &#8730(height * weight)/3600' />
                                   </>


                                   }
                                   <RenderFieldDatas labelText="Heart Rate" value={physicalexamination.heart_rate} units='bpm' />
                                   <RenderFieldDatas labelText="Systolic BP" value={physicalexamination.systolic_bp} units='mmHg' />
                                   <RenderFieldDatas labelText="Diastolic BP" value={physicalexamination.diastolic_bp} units='mmHg' />

                              </div> : <SectionNoData title="Physical Examination" />

                         }
                    </CardContent>
               }







          </Card>
     )
}
