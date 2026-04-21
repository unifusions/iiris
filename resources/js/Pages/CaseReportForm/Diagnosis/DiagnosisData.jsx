import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
 
 
import { usePage } from "@inertiajs/react";
import { LinkButton } from "@/Components/ui-ext/LinkButton";
import { CirclePlus, Heart, Pencil } from "lucide-react";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import SectionNoData from "@/Components/ui-ext/SectionNoData";
import DiagnosisForm from "../Diagnosis/DiagnosisForm";
import { NotAvailable } from "../FormData/FormDataHelper";
 



export default function DiagnosisData({ id,crf, diagnosis, createUrl, editUrl, enableActions, isEditing, onEdit, onCancel }) {

     const { roles } = usePage().props;
     const editMode = diagnosis === null ? 'create' : 'edit';
     return (

          <Card  >


               <SectionTitle title="Diagnosis" icon={Heart} enableActions={enableActions}
                    coordinator={roles.coordinator}
                    createUrl={createUrl}
                    editUrl={editUrl}
                    diagnosis={diagnosis}
                    isEditing={isEditing}
                    onEdit={onEdit}
               />


               {
                    isEditing ? <DiagnosisForm 
                    crf={crf}
                    editMode = {editMode}
                    diagnosis={diagnosis} isEditing={isEditing} onCancel={onCancel}/> :


                         <CardContent>
                              {diagnosis !== null ?
                                   <>

                                        <div className="grid grid-cols-3">
                                             <div className='text-foreground/70'>  Diagnosis</div>
                                             <div className="col-span-2">
                                                  {diagnosis.diagnosis_data !== null ? <>Aortic {diagnosis.diagnosis_data === 'both' ? 'Regurgitation & Stenosis' : diagnosis.diagnosis_data}</> : <NotAvailable />}

                                             </div>
                                        </div>












                                   </> : <SectionNoData title="Diagnosis" />

                              }
                         </CardContent>



               }

          </Card>
     )
}
