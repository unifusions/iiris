 
import { RenderCreateButton, RenderEditButton } from "./FormDataHelper";

 import DisplayFieldData from "../FormFields/MedicalHistory/DisplayFieldData";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import SectionNoData from "@/Components/ui-ext/SectionNoData";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { BriefcaseMedical } from "lucide-react";
import MedicalHistoryForm from "../medical-history/medical-history-form";

export default function PredefinedMedicalHistoryData(
    {id,  medicalhistory, role, enableActions, hasMedHis, createUrl, 

        crf, entity, entityType, isEditing, onEdit, onCancel

     }
) {
    return (
        <Card  >
             
                <SectionTitle title="Medical History" 
                icon={BriefcaseMedical}
                createUrl={createUrl}
                editUrl={createUrl}
                coordinator={role.coordinator}
                enableActions={enableActions}

                  isEditing={isEditing}
                onEdit={onEdit}
                >

                </SectionTitle>
                
               
                {isEditing ? <MedicalHistoryForm 
    crf={crf}
    entity={entity}
    entityType={entityType}
    medicalhistory={medicalhistory}
     editMode={medicalhistory === null ? 'store' : 'update'}

                    onCancel={onCancel}
                />
              

              : <CardContent>  <div className="space-y-3">
{medicalhistory !== null ? <>
                   

                   
                    <DisplayFieldData medicalhistory={medicalhistory} />
                        
                  

                             </> : <SectionNoData title="Medical History" />}
                </div>  </CardContent>}
              
   
            

             
           
        </Card>
    );
}