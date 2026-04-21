import React from "react";
  
import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderFieldBoolDatas } from "./FormDataHelper";
import { Activity } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/Components/ui/card";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import SectionNoData from "@/Components/ui-ext/SectionNoData";


const SECTION_TITLE = "Electrocardiogram";
export default function ElectrocardiogramData({id, electrocardiograms, role, createUrl, editUrl, enableActions }) {
     const options = {
          day: 'numeric',
          month: 'numeric',
          year: 'numeric'
     }
     return (

          <Card  >
               <SectionTitle 
                    icon={Activity}
                    title={SECTION_TITLE}
                    enableActions={enableActions}
                    coordinator={role.coordinator}
                    data={electrocardiograms}
                    createUrl={createUrl}
                    editUrl={editUrl}

               />
               <CardContent>
                  
                 
                    {electrocardiograms !== null ?
                         <div className="space-y-3">

                              <RenderFieldDatas labelText='Date of Investigation' value={electrocardiograms.ecg_date !== null ? new Date(electrocardiograms.ecg_date).toLocaleString('en-in', options) : null} />
                              <RenderFieldDatas labelText='Rhythm' value={electrocardiograms.rhythm}/>
                              {electrocardiograms.rhythm === "Others" &&
                                   <RenderFieldDatas labelText='' value={electrocardiograms.rhythm_others} />

                              }
                                                            <RenderFieldDatas labelText='Rate' value={electrocardiograms.rate} units = 'bpm'/>
                              <RenderFieldBoolDatas labelText='LVH' boolValue={electrocardiograms.lvh} />
                              <RenderFieldBoolDatas labelText='LV Strain' boolValue={electrocardiograms.lvs} />
                              <RenderFieldDatas labelText='PR Interval' value={electrocardiograms.printerval} units = 'ms'/>
                              <RenderFieldDatas labelText='QRS Duration' value={electrocardiograms.qrsduration} units = 'ms'/>


                         </div> : <SectionNoData title={SECTION_TITLE} />

                    }

               </CardContent>
          </Card>
     )
}
