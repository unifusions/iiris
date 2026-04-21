//TBD
// 
import React, { useState } from "react";
 
import FormDataHelper, { RenderCreateButton, RenderEditButton, RenderUpdateButton } from "./FormDataHelper";
import { CirclePlus, SquareActivity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import ScreenTitle from "@/Components/ScreenTitle";
import { LinkButton } from "@/Components/ui-ext/LinkButton";
import SectionNoData from "@/Components/ui-ext/SectionNoData";



const SECTON_TITLE = "Surgical History";

export default function SurgicalHistoryData({ id, hasSurHis, surgicalhistories, role, linkUrl, enableActions }) {



     return (

          <Card id={id} className="mb-3 shadow-sm scroll-section">
               <CardHeader className="border-b border-gray-200">
                    <CardTitle>
                         <div className="flex items-center justify-between">
                              <div className='flex items-center gap-2 font-bold'>
                                   <SquareActivity className="h-5 w-5 text-primary/70" />   {SECTON_TITLE}
                              </div>

                              {!enableActions &&
                                   <>
                                        {role.coordinator &&
                                             <>
                                                  {hasSurHis === null ?
                                                       
                                                            <LinkButton href={linkUrl} > <CirclePlus /> Add {SECTON_TITLE}</LinkButton>
                                                        : <>
                                                            {hasSurHis ?
                                                                 <LinkButton href={linkUrl} > <CirclePlus /> Add {SECTON_TITLE}</LinkButton> :
                                                                 <LinkButton href={linkUrl} > Edit {SECTON_TITLE}</LinkButton>}
                                                       </>
                                                  }
                                             </>
                                        }
                                   </>
                              }

                         </div></CardTitle>

               </CardHeader>

               <CardContent>



                    {(hasSurHis === null || surgicalhistories?.length < 1) ? <SectionNoData title={SECTON_TITLE} /> :
                         <>

                              {surgicalhistories.length > 0 &&

                                   <>


                                        <div className="fw-bold">
                                             <div>#</div>
                                             <div>Date</div>
                                             <div>Diagnosis</div>
                                             <div>Treatment</div>

                                        </div>
                                        <hr />
                                        {surgicalhistories.map((surgicalhistory, index) => <div className="mb-2" key={index}>
                                             <div>{index + 1}</div>
                                             <div>{surgicalhistory.sh_date}</div>
                                             <div>{surgicalhistory.diagnosis}</div>
                                             <div>{surgicalhistory.on_treatment !== null &&
                                                  <> {surgicalhistory.on_treatment === 1 ? 'Yes' : 'No'}
                                                  </>
                                             }</div>
                                        </div>)}</>


                              }

                         </>
                    }
               </CardContent>



          </Card>
     )
}
