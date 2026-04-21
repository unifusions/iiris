//TBD
import React from "react";

import FormDataHelper, { RenderCreateButton, RenderFieldDatas, RenderEditButton, RenderDateFieldDatas } from "./FormDataHelper";
import { User } from "lucide-react";
import SectionTitle from "@/Components/ui-ext/SectionTitle";
import { Card, CardContent } from "@/Components/ui/card";
import SectionNoData from "@/Components/ui-ext/SectionNoData";


const SECTION_TITLE = 'Personal History';
export default function PersonalHistoryData({ id, personalhistories, role, createUrl, editUrl, enableActions }) {
     const options = {

          year: 'numeric'
     }
     return (

          <Card  >

               <SectionTitle
                    title={SECTION_TITLE} icon={User}
                    enableActions={enableActions}
                    coordinator={role.coordinator}
                    createUrl={createUrl}
                    editUrl={editUrl}
                    data={personalhistories}
               />

               <CardContent>



                    {personalhistories !== null ?
                         <div className="space-y-2">

                              <RenderFieldDatas labelText='Smoking' value={personalhistories.smoking} />
                              {personalhistories.smoking !== 'Never' && <div className="border-s border-gray-200 space-y-1 ps-3">
                                   <RenderFieldDatas labelText='No. of. Cigaretters' value={personalhistories.cigarettes} />
                                   <RenderDateFieldDatas labelText='Smoking Since' value={personalhistories.smoking_since} options={options} />
                                   {personalhistories.smoking === 'Used to consume in the past' && <>
                                        <RenderDateFieldDatas labelText='Stopped Since' value={personalhistories.smoking_stopped} options={options} />

                                   </>}

                              </div>
                              }

                              <div className="border-b border-gray-200"/>
                              <RenderFieldDatas labelText='Alcohol' value={personalhistories.alchohol} />

                              {personalhistories.alchohol !== 'Never' && <div className="border-s border-gray-200 space-y-1 ps-3">
                                   <RenderFieldDatas labelText='Quantity' value={personalhistories.quantity} units='ml' />
                                   <RenderDateFieldDatas labelText='Consuming Since' value={personalhistories.alchohol_since} options={options} />
                                   {personalhistories.alchohol === 'Used to consume in the past' && <>
                                        <RenderDateFieldDatas labelText='Stopped Since' value={personalhistories.alchohol_stopped} options={options} />

                                   </>}



                              </div>}

                                <div className="border-b border-gray-200"/>

                              <RenderFieldDatas labelText='Tobacco' value={personalhistories.tobacco} />

                              {personalhistories.tobacco !== 'Never' && <div className="border-s border-gray-200 space-y-1 ps-3">
                                   <RenderFieldDatas labelText='Type' value={personalhistories.tobacco_type} />
                                   <RenderFieldDatas labelText='Quantity' value={personalhistories.tobacco_quantity} />

                                   <RenderDateFieldDatas labelText='Consuming Since' value={personalhistories.tobacco_since} options={options} />
                                   {personalhistories.tobacco === 'Used to consume in the past' && <>
                                        <RenderDateFieldDatas labelText='Stopped Since' value={personalhistories.tobacco_stopped} options={options} />

                                   </>}





                              </div>}


                         </div> : <SectionNoData title={SECTION_TITLE} />

                    }

               </CardContent>
          </Card>
     )
}
