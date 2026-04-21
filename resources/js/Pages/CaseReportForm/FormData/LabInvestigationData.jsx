//DELETE THIS FILE
// 
import React from "react";
 
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";
import { Syringe } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
 
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import SectionNoData from "@/Components/ui-ext/SectionNoData";


const SECTION_TITLE = "Lab Investigation"
export default function LabInvestigationData({ 
     id,labinvestigations, role, createUrl, editUrl, enableActions }) {

     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }
     return (

          <Card  >
               
                    <SectionTitle title={SECTION_TITLE}
                    icon={Syringe}
                    enableActions={enableActions}
                    coordinator={role.coordinator}
                    createUrl={createUrl}
                    editUrl={editUrl}
                    />
                         
  
                   
                    
                   

              
          </Card>
     )
}
