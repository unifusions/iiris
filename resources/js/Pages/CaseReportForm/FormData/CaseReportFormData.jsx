import React from "react";
 
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton } from "./FormDataHelper";
import CRFTimeline from "./CRFTimeline";
import { Card, CardContent } from "@/Components/ui/card";


const getAge = (birthDate) => {
    if (!birthDate) return null;

  // Normalize Laravel format "YYYY-MM-DD HH:mm:ss" → ISO
  const normalized = birthDate.replace(" ", "T");

  const bd = new Date(normalized);

  if (isNaN(bd)) return "0"; // 💥 prevents NaN

  const today = new Date();

  let age = today.getFullYear() - bd.getFullYear();
  const m = today.getMonth() - bd.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < bd.getDate())) {
    age--;
  }

  return age;
}



export default function CaseReportFormData({ crf }) {

     const data = [
     {
          label: 'Protocol Number',
          value: '2021-04'
     },{
          label: 'Subject ID',
          value: crf.subject_id
     },
     {
          label:'Date of Birth',
          value: new Date(crf.date_of_birth).toLocaleDateString('en-IN',{ day: 'numeric',  month: 'numeric',year: 'numeric',  })
     },
     
     {
          label: 'Facility',
          value: crf.facility.name
     },
     {
          label:'UHID',
          value: crf.uhid
     },
     {
          label:'Gender',
          value:crf.gender,

     },
     {
          label:'Created On',
          value: crf.created_at
     },
     {
          label:"Date of Consent",
          value: crf.date_of_consent
     },
     {
          label:"Age",
          value: getAge(crf.date_of_birth)
     }

];

const getActiveStage = () => {
     
     if(crf.preoperative.is_submitted === 0) return 'pre-op';
     if(crf.preoperative.is_submitted === 1 && crf.intraoperative.is_submitted === 0) return 'intra-op';
     if(crf.intraoperative.is_submitted === 1 && crf.postoperative.is_submitted === 0) return 'post-op';
     return 'scheduled-visits';
}
 

     return (

          <Card className=" border border-gray-300   rounded-lg p-5">
                
                    <div className="grid grid-cols-3  gap-y-1 text-sm   ">
                         
                         {data.map((item, index) => (
                              <div key={index} className="flex items-center justify-between max-w-64">
                                     <div  className='text-foreground/70  '>{item.label}</div>
                                   <div className="text-foreground font-semibold  ">{item.value}</div>
                              </div> 
                         ))}
                              
                                 
                              
                            
 
  
 

                    </div>
                         <div className="border-b border-gray-200"></div>
                    <CRFTimeline crf={crf} activeStage={getActiveStage()} />

              
          </Card>

     )
}
